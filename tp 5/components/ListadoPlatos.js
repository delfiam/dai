/* El Home de la aplicación mostrará los platos del menú en un listado. Cada ítem (el cuál debe ser un componente
separado) del listado (ul)? dice del listado contendrá:
● Nombre del plato.
● Imagen.
● Características del plato.
● Acciones para ver el detalle o eliminarlo del menú.
*/

import React, {useContext} from 'react';
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import RecetasContext from '../others/Context';

export default function CardLis() {
    const navigation = useNavigation();
    const [recetas, setRecetas] = useContext(RecetasContext);
    const ids = Math.floor(Math.random() * 5)
    console.log(recetas[0].title, "ey")
    const data = [{
        id: ids,
        titulo: recetas[ids].title
    }
    ]; //https://reactnative.dev/docs/flatlist y para horizontal es horizontal = {true}
    return (
        <View>
        <FlatList
        data={data}
        renderItem={renderItem}
        horizontal = {true}
        keyExtractor={item => item.id}
      />
        </View>
 )
    
}

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        margin: 10,
        padding: 30,
        width: '100%',
        textAlign: 'center',
        alignItems: 'stretch',
        resizeMode: '',
    }
})
