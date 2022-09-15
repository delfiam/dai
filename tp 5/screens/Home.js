/* En la pantalla de Home se deberá mostrar, además de los platos que conforman el menú: (card)
● Acumulativo de precio del menú.
● Promedio de tiempo de preparación entre todos los platos.
● El menú debe tener 4 platos. Debe haber 2 veganos y 2 que no lo sean. Esto debe validarse al intentar agregar un nuevo plato.
● Se deberá poder eliminar un plato del menú, lo que generará nuevamente los promedios y acumulativos (los mismos deben estar almacenados en el estado del componente utilizando Hooks)
 */
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Buscador from "../components/Buscador";
import CardLis from "../components/ListadoPlatos";
export default function HomeScreen () {
    return (
        <View style={styles.pag}>
            <Buscador></Buscador>
            <CardLis></CardLis>
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
  