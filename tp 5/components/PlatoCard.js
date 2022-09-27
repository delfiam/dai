import React from "react";

export default function PlatoCard () {
    return (
        <View style={styles.card}>
        <Card onTouchStart={() => navigation.navigate('DetallePlato')}>
        <Avatar.Icon icon="food-variant" style={{ backgroundColor: '#044C24' }}></Avatar.Icon>
            <Card.Title title={titulo} subtitle="Card Subtitle"/>
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