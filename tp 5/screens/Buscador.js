/* Se debe agregar una nueva sección que permita agregar platos al menú, para esto, se deberá visualizar un formulario que 
realice una petición GET al endpoint de búsqueda y muestre los resultados disponibles en un flat list, utilizando el componente de 
ítem del punto anterior (ListadoPlatos). El formulario deberá buscar únicamente si hay más de 2 caracteres en el filtro, caso contrario no debe mostrar nada.
(Es básicamente un buscador form que utiliza get en la API para buscar los platos. no entiendo la parte de caracteres though, así que 
no sé aún si es una screen o un component, probablemente la segunda) */
import axios from 'axios';
import React, {useState, useContext} from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import { Searchbar } from 'react-native-paper';
import PlatoCard from '../components/PlatoCard';
import RecetasContext from '../others/Context';

export default function BuscadorScreen () {
  const [searchQuery, setSearchQuery] = useState('');
  const [recetasagregadas, setRecetasAgregadas] = useState([]);
  function onChangeSearch (query)  {
  setSearchQuery(query)
  getPlatos(searchQuery);

  }

  async function getPlatos () {
    const {data} = await axios.get("https://api.spoonacular.com/recipes/complexSearch/?apiKey=f220679048714954bb834d5b445d793a&addRecipeInformation=true&title=" + searchQuery).then
    (res => {
      if (searchQuery.length > 2) {
    console.log(res.data.results)
    setRecetasAgregadas(res.data.results)
    return recetasagregadas;
      }
      else {
        return null;
      }})
  }

  const eliminarRecetas = (id) => {
    const recetasFiltradas = recetasagregadas.filter((receta) => receta.id !== id);
    setRecetas(recetasFiltradas);
  }

  const renderItem = (data) => (
    <PlatoCard item={data}/>
  )
  return (
    <View style={styles.pag}>
      <Searchbar
        placeholder="Buscar..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.buscador}
      />
      
      <FlatList
        data={recetasagregadas}
        renderItem={renderItem}
        numColumns={2}
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
  },
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
