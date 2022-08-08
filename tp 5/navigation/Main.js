import NavigationContainer from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Main() {
    const Stack = createNativeStackNavigator()
    return (
      <NavigationContainer  >
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  /*
  Las diferentes secciones que tendrá la app deberán disponga de un token almacenado en el contextState autenticado y 
  el mismo, se obtendrá de una API con datos de muestra
  */