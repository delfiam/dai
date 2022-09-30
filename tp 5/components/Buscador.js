/* Se debe agregar una nueva sección que permita agregar platos al menú, para esto, se deberá visualizar un formulario que 
realice una petición GET al endpoint de búsqueda y muestre los resultados disponibles en un flat list, utilizando el componente de 
ítem del punto anterior (ListadoPlatos). El formulario deberá buscar únicamente si hay más de 2 caracteres en el filtro, caso contrario no debe mostrar nada.
(Es básicamente un buscador form que utiliza get en la API para buscar los platos. no entiendo la parte de caracteres though, así que 
no sé aún si es una screen o un component, probablemente la segunda) */
import React, {useState, useContext} from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RecetasContext from '../others/Context';
import { useNavigation } from '@react-navigation/native';

const Buscador = () => {
 const navigation = useNavigation();

  return (
      <Searchbar
        placeholder=""
        value= ""
        onIconPress={() => navigation.navigate('Buscador')}
        style={styles.buscador}
      />
  );
};

const styles = StyleSheet.create({
  buscador: {
    width: 60,
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    ocapacity: '80%',
    marginTop: 20,
    marginBottom: 0,
    alignContent: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: 300,
  }
});

export default Buscador;