/*Al hacer click en un plato del menú, se deberá mostrar los detalles de ese plato en caso de que ya este en el menú.
O un botón de agregar al menú en caso de que no esté. Al agregar el plato al menú se va a guardar en el contextState. */
import React, { useContext, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import RecetasContext from "../others/Context";

export default function DetalleScreen(props) {
  
  const navigation = useNavigation();
  console.log(props.route.params, 'detalleplato')

  return (
    <View style={styles.pag}>
      <Card >
        <Avatar.Icon icon="food-variant" style={{ backgroundColor: '#044C24' }}></Avatar.Icon>
        <Card.Title title={props.route.params.title} subtitle={props.route.params.diets} />
        <Card.Content>
          <Paragraph>Precio por plato : ${props.route.params.pricePerServing}, {props.route.params.vegan ? <Text>Vegano </Text>: <Text>No vegano</Text>}, Tiempo de cocción: {props.route.params.cookingMinutes} minutos</Paragraph>
        </Card.Content>
        <Card.Cover source={props.route.params.image} />
        <Card.Actions style={styles.button}>
          <Button color='#044C24' onPress={() => navigation.goBack()}>Volver</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pag: {
    backgroundColor: "#044C24",
    height: '100%',
    width: '100%',
  },
});
