import react from "react";
import { Image, StyleSheet, View } from 'react-native'
import LoginForm from "../components/LoginForm";
import HomeScreen from "./Home";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
export default function LoginScreen() {

  const navigation = useNavigation();
  const login = async (email, password) => {
    let usuario = { "email": email, "password": password }
    console.log(email)
    return axios.post('http://challenge-react.alkemy.org/?email=' + usuario.email + '&password=' + usuario.password)
      .then(res => {
        navigation.navigate('Home'), res.data;
      })
      .catch(error => {
        console.error('error', error)
        alert('Datos incorrectos')
      })
  }

  return (
    <View style={styles.pag}>
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/icon.png')}></Image>
        <LoginForm login={login}></LoginForm>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 200,
    marginBottom: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,

  },
  pag: {
    backgroundColor: "#044C24",
    height: '100%',
    width: '100%',
  },
});