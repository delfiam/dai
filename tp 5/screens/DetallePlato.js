/*Al hacer click en un plato del menú, se deberá mostrar los detalles de ese plato en caso de que ya este en el menú.
O un botón de agregar al menú en caso de que no esté. Al agregar el plato al menú se va a guardar en el contextState. */
import React from "react";
import { Text, View, StyleSheet } from "react-native";
export default function DetalleScreen () {
    return (
        <View style={styles.pag}>
           
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
  