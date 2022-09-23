/* El Home de la aplicación mostrará los platos del menú en un listado. Cada ítem (el cuál debe ser un componente
separado) del listado (ul)? dice del listado contendrá:
● Nombre del plato.
● Imagen.
● Características del plato.
● Acciones para ver el detalle o eliminarlo del menú.
*/

import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function CardLis() {
    const navigation = useNavigation();
    const data = []; //https://reactnative.dev/docs/flatlist y para horizontal es horizontal = {true}
    return (
        <View style={styles.card}>
            <Card onTouchStart={() => navigation.navigate('DetallePlato')}>
            <Avatar.Icon icon="food-variant" style={{ backgroundColor: '#044C24' }}></Avatar.Icon>
                <Card.Title title="Card Title" subtitle="Card Subtitle"/>
                <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions style={styles.button}>
                    <Button color='#044C24'>Ver Detalle</Button>
                    <Button color='#044C24'>Eliminar</Button>
                </Card.Actions>
            </Card>
         <Card onTouchStart={() => navigation.navigate('DetallePlato')}>
         <Avatar.Icon icon="food-variant" style={{ backgroundColor: '#044C24' }}></Avatar.Icon>
             <Card.Title title="Card Title" subtitle="Card Subtitle" />
             <Card.Content>
                 <Title>Card title</Title>
                 <Paragraph>Card content</Paragraph>
             </Card.Content>
             <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
             <Card.Actions style={styles.button}>
                 <Button color='#044C24'>Ver Detalle</Button>
                 <Button color='#044C24'>Eliminar</Button>
             </Card.Actions>
         </Card>
     </View>
 )
    
}

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        margin: 10,
        padding: 30,
        width: '40%',
        textAlign: 'center',
        alignItems: 'stretch',
        resizeMode: '',
    }
})
