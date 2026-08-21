import { ImageBackground } from "expo-image";
import { Text, View, StyleSheet, SafeAreaViewBase, Pressable, TextInput } from "react-native";

export default function Index() {
  return (
    <SafeAreaViewBase>
      <View style={styles.container}>
        <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxowuMtNs9r4NFnILEfy56EnEj8dDyPBAVG4euVzjrRA&s' }}>
          <View>
            <Text>Insira seu Nome!</Text>
            <TextInput></TextInput>
            <Pressable />
          </View>
        </ImageBackground>
      </View >
    </SafeAreaViewBase>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
