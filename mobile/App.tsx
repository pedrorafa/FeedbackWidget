import { useFonts, Inter_900Black, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [useFontsLoaded] = useFonts({ Inter_900Black, Inter_500Medium })

  if (!useFontsLoaded)
    return <AppLoading />

  return (
    <View style={styles.container}>
      <Text>Teste</Text>
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
