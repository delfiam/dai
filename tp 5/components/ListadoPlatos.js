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
import PlatoCard from './PlatoCard';

export default function CardLis() {
    const navigation = useNavigation();
    const [recetas, setRecetas] = useContext(RecetasContext);

     const eliminarRecetas = (id) => {
        const recetasFiltradas = recetas.filter((receta) => receta.id !== id);
        setRecetas(recetasFiltradas);
    }
  const renderItem = (recetas) => (
    <PlatoCard item={recetas} eliminarRecetas={eliminarRecetas}/>
  )
    return (
        <FlatList
        data={recetas}
        renderItem={renderItem}
        numColumns={2}
      />
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
