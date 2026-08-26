import { Text, View, StyleSheet } from "react-native";

type InfoComponent = {
  title: string;
  text: string;
}

export default function Component(props: InfoComponent) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text numberOfLines={3} style={styles.subtitle}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    boxShadow: '0 4px 6px rgb(0, 0, 0)',
    backgroundColor: '#588157',
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 20,
    shadowColor: '#000',
    padding: 40,
    justifyContent: "center",
    margin: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Bebas-Neue',
    textAlign: 'left',
  },
  subtitle: {
    color: '#d2d1d1',
    fontSize: 15,
    fontFamily: 'Bebas-Neue',
    textAlign: 'left',
    flexWrap: 'wrap',
  }
});
