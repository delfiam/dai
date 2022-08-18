import react from "react";
import { Image, StyleSheet, View } from 'react-native'
import LoginForm from "../components/LoginForm";
import HomeScreen from "./Home";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
export default function LoginScreen() {
  const navigation = useNavigation();
  const login = async (email, password) => {
    let usuario = {"email": email, "password": password}
    console.log(email)
    return axios.post('http://challenge-react.alkemy.org/?email='+usuario.email+'&password='+usuario.password)
      .then(res => {
          navigation.navigate('Home'), res.data;})
      .catch(error => {
        console.error('error', error)
      })}

  return (
      <View style={styles.pag}>
        <View style={styles.container}>
          <LoginForm login={login}></LoginForm>
        </View>
      </View>
  )
}


const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 375,
    marginTop: '40%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '8%',

  },
  pag: {
    backgroundColor: "#F7D250",
    height: '100%',
    width: '100%',


  },
});