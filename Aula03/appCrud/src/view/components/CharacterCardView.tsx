import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { CharacterModel } from "@/model/CharacterModel";

export default function CharacterCardView({ character }: { character: CharacterModel }) {
    return (
        <View style={styles.characterCard}>
            <Image style={styles.characterPicture} source={{ uri: character.imageUrl }} />
            <View>
                <Text style={styles.name}>{character.name}</Text>
                <Text style={styles.description}>{character.description}</Text>
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
