/* Se debe agregar una nueva sección que permita agregar platos al menú, para esto, se deberá visualizar un formulario que 
realice una petición GET al endpoint de búsqueda y muestre los resultados disponibles en un flat list, utilizando el componente de 
ítem del punto anterior (ListadoPlatos). El formulario deberá buscar únicamente si hay más de 2 caracteres en el filtro, caso contrario no debe mostrar nada.
(Es básicamente un buscador form que utiliza get en la API para buscar los platos. no entiendo la parte de caracteres though, así que 
no sé aún si es una screen o un component, probablemente la segunda) */
import React, {useState, useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RecetasContext from '../others/Context';
const Buscador = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recetas, setRecetas] = useContext(RecetasContext);

  const sinrecetas = (query) => { 
  setRecetas('') 
  setSearchQuery(query) }
  
  return (
    <View>
      <Searchbar
        placeholder="Buscar..."
        onChangeText={sinrecetas}
        value={searchQuery}
        style={styles.buscador}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buscador: {
    width: 340,
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    ocapacity: '80%',
    marginTop: 20,
    marginBottom: 0,
  }
});

export default Buscador;