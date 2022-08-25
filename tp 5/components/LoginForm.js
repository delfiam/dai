/* El formulario se deberá renderizar al ingresar a cualquier ruta si el usuario no está autenticado, conteniendo los
campos:
● Email.
● Password.
● Botón de “Enviar”
Al hacer click en “Enviar”, se deberá validar que ambos campos no estén vacíos, y mostrar un mensaje al usuario si
lo estuviesen. (poner require en los forms) Caso contrario, se deberá realizar una petición POST a la siguiente url (http://challenge-react.alkemy.org/), con los campos email y
password en el BODY.
Los datos válidos para obtener un token son:
● Email: challenge@alkemy.org
● Password: react
Se debe mostrar algún tipo de feedback al usuario mientras se está procesando la petición, no permitiendo que
vuelva a accionar el botón de login hasta obtener una respuesta. (un boton de cargando deshabilitado?)
En el caso de obtener un error de la API, se deberá mostrar una alerta (catch (e)), mientras que si es satisfactorio deberá
redirigir al Home y almacenar el token obtenido en el contextState. Para realizar las validaciones no es necesario
utilizar ninguna librería. */
import React, { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet, Image,  ActivityIndicator, TouchableOpacity } from 'react-native';
export default function LoginForm({login}) {
    const [email, setEmail] = useState("challenge@alkemy.org")
    const [password, setPassword] = useState("react")
    const [isLoading, setIsLoading] = useState(false);
    const toggleLoading = () => {
      setIsLoading(!isLoading);
      login(email, password)
    };
  // this.props.navigation.reset([NavigationActions.navigate({ routeName: 'DevicesList'})], 0); para que no vuelva al login?
  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input}
          placeholder="  Email"
          onChangeText={(text) => setEmail(text)}
          defaultValue= "challenge@alkemy.org"
          
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
          style={styles.button} pointerEvents={isLoading ? 'none' : 'auto'}>
          {isLoading ? <ActivityIndicator style={styles.act} size="small" hidesWhenStopped='true'/> : null} 
          <Text style={styles.buttonText}>
            {isLoading ? "Sign In" : "Sign In"}
          </Text>
        </View>
      </TouchableOpacity>
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
  }

});