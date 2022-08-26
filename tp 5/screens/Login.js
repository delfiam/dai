import react from "react";
import { Image, StyleSheet, View } from 'react-native'
import LoginForm from "../components/LoginForm";
import HomeScreen from "./Home";


export default function LoginScreen() {

  return (
    <View style={styles.pag}>
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/icon.png')}></Image>
        <LoginForm></LoginForm>
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