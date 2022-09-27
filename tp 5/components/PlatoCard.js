import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import RecetasContext from '../others/Context';
export default function PlatoCard(props) {
    const navigation = useNavigation();
    console.log(props.item.item.title, 'props')
    return (
        <View style={styles.card}>
            <Card onTouchStart={() => navigation.navigate('DetallePlato')}>
                <Avatar.Icon icon="food-variant" style={{ backgroundColor: '#044C24' }}></Avatar.Icon>
                <Card.Title title={props.item.item.title} subtitle={props.item.item.diets} />
                <Card.Cover source={props.item.item.image} />
                <Card.Actions style={styles.button}>
                    <Button color='#044C24'>Ver Detalle</Button>
                    <Button color='#044C24' onPress={props.eliminarRecetas(props.item.item.id)}>Eliminar</Button>
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
