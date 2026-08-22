import { View, StyleSheet, FlatList } from "react-native";
import CardModal from "./CardModal";

export default function Index() {

  const DATA = [
    { titulo: "Aguiar", urlDaImagem: "https://static.wikia.nocookie.net/ordemparanormal/images/e/ef/Arte_Completa_Portrait_Aguiar.png/revision/latest/scale-to-width-down/250?cb=20251026131105&path-prefix=pt-br" },
    { titulo: "Jae", urlDaImagem: "https://static.wikia.nocookie.net/ordemparanormal/images/5/50/Arte_completa_portrait_Jae_com_maquiagem_em_Hexatombe.png/revision/latest/scale-to-width-down/250?cb=20251102063842&path-prefix=pt-br" },
    { titulo: "Kemi", urlDaImagem: "https://static.wikia.nocookie.net/ordemparanormal/images/8/80/Arte_Completa_Portrait_Kemi.png/revision/latest/scale-to-width-down/250?cb=20260321131941&path-prefix=pt-br" },
    { titulo: "Labirinto", urlDaImagem: "https://static.wikia.nocookie.net/ordemparanormal/images/a/a0/Arte_Completa_Portrait_Labirinto_Assassino.png/revision/latest/scale-to-width-down/250?cb=20251207045644&path-prefix=pt-br" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.titulo}
        renderItem={({ item }) => (
          <CardModal title={item.titulo} imageUri={item.urlDaImagem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
