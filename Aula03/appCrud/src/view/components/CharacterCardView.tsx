import { Text, View, StyleSheet, Image, Pressable } from "react-native";

export default function CharacterCardView() {
    return (
        <View style={styles.characterCard}>
            <Image style={styles.characterPicture} />
            <View>
                <Text style={styles.name}>Nome</Text>
                <Text style={styles.description}>Descrição</Text>
            </View>
            <Pressable style={styles.button}>
                <Text>Editar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    characterCard: {
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Bebas-Nue",
    },
    description: {
        fontSize: 15,
        color: "gray",
        fontFamily: "Bebas-Nue",
    },
    characterPicture: {
        borderRadius: 10,
        width: 100,
        height: 100,
    },
    button: {
        backgroundColor: "Red",
        padding: 10,
        borderRadius: 5,
    }
});
