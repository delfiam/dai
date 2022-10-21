import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import pptxgen from 'pptxgenjs';

export default function App() {
  const GenerarPower = () => { // <-- Crea un ppt
    let ppt = new pptxgen();
    let slide = ppt.addSlide(); // <-- Agrega una diapositiva
    slide.background = { path: "https://images4.alphacoders.com/980/thumb-1920-980848.jpg" };
    slide.addText("Bienvenidos a mi PowerPoint:)", {x: 0.5, y: 1.0, fontSize: 50, color: 'ffffff'});
    ppt.write("base64").then(base64 => {
      const filename = FileSystem.documentDirectory + "TP6.pptx"; // <-- Crea un archivo pptx
      FileSystem.writeAsStringAsync(filename, base64, {
        encoding: FileSystem.EncodingType.Base64 // <-- Escribe el archivo con FS
      }).then(() => {
        Sharing.shareAsync(filename); // <-- Comparte el archivo
      });
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Generar PowerPoint" onPress={GenerarPower} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
