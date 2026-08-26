import { Text, View, StyleSheet, ScrollView } from "react-native";
import Component from "./Component";

// Paleta de cores definida:
// #dad7cd + #a3b18a + #588157 + #3a5a40 + #344e41
// site usado: https://coolors.co/palettes/trending

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.tittlecontainer}>
        <Text style={styles.title}>Money Dashboard</Text>
        <Text style={styles.subtitle}>NÃO controle seu dinheiro de forma alguma</Text>
      </View>
      <View style={styles.componentsContainer}>
        <Component title="Contas a pagar" text="Lorem ipsum dolor sit amet, conse" />
        <Component title="Investimentos" text="Lorem ipsum dolor sit amet, conse" />
        <Component title="Pix" text="Lorem ipsum dolor sit amet, conse" />
        <Component title="Apostas perigosas (Vasco)" text="Lorem ipsum dolor sit amet, conse" />
        <Component title="Boletos" text="Lorem ipsum dolor sit amet, conse" />
        <Component title="Queijo prato" text="Lorem ipsum dolor sit amet, conse" />
        <Component title="Depósitos" text="Lorem ipsum dolor sit amet, conse" />
        <Component title="Histórico" text="Lorem ipsum dolor sit amet, conse" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#344e41',
  },
  componentsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: 20,

  },
  title: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Bebas-Neue'
  },
  subtitle: {
    color: '#d2d1d1',
    fontSize: 20,
    fontFamily: 'Bebas-Neue',
  },
  tittlecontainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#a3b18a',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  }
});
