import React, { useEffect, useState, useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import RecetasContext from '../others/Context';
export default function PlatoCard(props) {
    const navigation = useNavigation();
    const [añadido, setañadido] = useState(false);
    const [recetas, setRecetas] = useContext(RecetasContext);
    useEffect(() => {
    console.log(props.item.item.title, 'props')
    if (recetas.find((receta) => receta.id === props.item.item.id)) {
        setañadido(true);
      } else {
          setañadido(false);
      }
    }, [])

   

    const agregarPlato = () => {
        setRecetas([...recetas, props.item.item]);
        navigation.goBack();
    }
    const eliminarRecetas = (id) => {
        const recetasFiltradas = recetas.filter((receta) => receta.id !== id);
        setRecetas(recetasFiltradas);
        setañadido(false);
      }
    return (
        <View style={styles.card}>
            <Card >
                <Avatar.Icon icon="food-variant" style={{ backgroundColor: '#044C24' }}></Avatar.Icon>
                <Card.Title title={props.item.item.title} subtitle={props.item.item.diets} />
                <Card.Cover source={props.item.item.image} />
                <Card.Actions style={styles.button}>
                    <Button color='#044C24' onPress={() => navigation.navigate('DetallePlato', props.item.item)}>Ver Detalle</Button>
                    {añadido == false ? <Button color='#044C24' onPress={() => agregarPlato(props.item.item.id)}>Agregar</Button> :  <Button color='#044C24' onPress={ () =>  eliminarRecetas(props.item.item.id)}>Eliminar</Button>}
                </Card.Actions>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        margin: 10,
        marginRight: 5,
        padding: 30,
        width: '50%',
        textAlign: 'center',
        alignItems: 'stretch',
        resizeMode: '',
    }
})
