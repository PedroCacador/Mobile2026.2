import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import { FAB } from 'react-native-paper';

export default function CharactersList() {
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Lista de personagens</Text>
            <ScrollView>
            </ScrollView>
            <FAB
                style={styles.floatingButton}
                icon="plus"
                onPress={() => { }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    tittle: {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Bebas-Nue",
    },
    floatingButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "red",
        borderRadius: 50,
        width: 60,
        height: 60,
    }
});
