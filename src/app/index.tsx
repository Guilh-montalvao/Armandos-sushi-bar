import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
  
  export default function Index() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Armando's Sushi Bar</Text>
        <Text style={styles.subtitle}>Bem-vindo ao nosso aplicativo!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});
