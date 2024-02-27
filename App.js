import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ETEC-Professor Milton Gazzetti</Text>
      <Text style={styles.italico}>Terceiro Ano</Text>
      <Text style={styles.textoRiscado}>Texto Riscado</Text>

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
  textoRiscado: {
    textDecorationLine: 'line-through',
    fontSize: 18, 
  },
  italico: {
    fontStyle: 'italic',
  },

});
