/*
Se debe mostrar algún tipo de feedback al usuario mientras se está procesando la petición, no permitiendo que
vuelva a accionar el botón de login hasta obtener una respuesta. (un boton de cargando deshabilitado?)
En el caso de obtener un error de la API, se deberá mostrar una alerta (catch (e)), mientras que si es satisfactorio deberá
redirigir al Home y almacenar el token obtenido en el contextState. Para realizar las validaciones no es necesario
utilizar ninguna librería. */
import React, { useState, useEffect } from "react";
import { Button, TextInput, View, Text, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function LoginForm() {

  const navigation = useNavigation();
  const [email, setEmail] = useState("challenge@alkemy.org")
  const [password, setPassword] = useState("react")
  const [isLoading, setIsLoading] = useState(null);
  const [recetas, setRecetas] = useState();

  const toggleLoading = () => {
    setIsLoading(!isLoading);
    login(email, password);

  };
/*
  const recetasnormales = async () => {
    return axios.get('https://api.spoonacular.com/recipes/complexSearch/?apiKey=f220679048714954bb834d5b445d793a&diet=Whole30&addRecipeInformation=true')
     .then(response => {
      let recetanormal = response.data.results;
      return recetanormal;
    }
     )
  }

  const recetasveganas = async () => {
    return axios.get('https://api.spoonacular.com/recipes/complexSearch/?apiKey=f220679048714954bb834d5b445d793a&diet=vegan&addRecipeInformation=true')
    .then(response => {
      let recetavegana = response.data.results;
      return recetavegana;
    }
      )
    }
    

    useEffect(() => {
      recetasnormales().then(
        (recetanormal) => {
        recetasveganas()
        .then((recetavegana) => {
          const recetasgeneral = recetanormal.concat(recetavegana)
          console.log(recetasgeneral)
          setRecetas(recetasgeneral);
          console.log(setRecetas)
      }
        )
    }
      )

    }, [])
    */

  const login = async (email, password) => {
    let usuario = { "email": email, "password": password }
    console.log(email)
    return axios.post('http://challenge-react.alkemy.org/?email=' + usuario.email + '&password=' + usuario.password)
      .then(res => {
        navigation.replace('Home'), res.data;
      })
      .catch(error => {
        console.error('error', error);
        setIsLoading(false);
      })
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input}
          placeholder="  Email"
          onChangeText={(text) => setEmail(text)}
          defaultValue="challenge@alkemy.org"

        />
      </View>
      <View>
        <View>
          <TextInput style={styles.input}
            placeholder="  Contraseña"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            defaultValue="react"
          />
        </View>
      </View>
      <TouchableOpacity onPress={toggleLoading}>
        <View
          style={styles.button}>
          {isLoading ? <ActivityIndicator style={styles.act} size="small" hidesWhenStopped='true' /> : null}
          <Text style={styles.buttonText}>
            Sign in
          </Text>
          </View>
      </TouchableOpacity>
          {(isLoading == false) && <Text style={styles.datosmal}>Datos incorrectos</Text>}
      
    </View>
  )
}

const styles = StyleSheet.create({
  formstyle: {
    backgroundColor: 'white',
    marginBottom: 0,
    marginTop: 0,
    flex: 1,
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 140,
    height: 50,
    borderWidth: 1,
    backgroundColor: '#4caf50',
    borderColor: '#4caf50',
    borderRadius: 10,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: '5%',
    width: 200,
    height: 45,
    textAlign: 'center',
  },

  act: {
    color: 'black'
  },

  datosmal:{
    color: 'white',
    fontStyle: 'bold',
    fontSize: 15,
    marginTop: 5,
  }

});