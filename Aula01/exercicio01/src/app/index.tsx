import { Text, View, StyleSheet, Image, Button } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://static.wikia.nocookie.net/ordemparanormal/images/e/e8/Arte_Completa_Portrait_Dalmo.png/revision/latest/scale-to-width-down/250?cb=20251026131112&path-prefix=pt-br' }} style={styles.imagem} />
            <Text style={styles.nome}>Dalmo magno</Text>
            <Button title=" ADICIONAR AMIGO" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imagem: {
        height: 250,
        width: 250,
    }
});
