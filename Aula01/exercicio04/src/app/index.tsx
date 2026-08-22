import { Text, View, StyleSheet, SectionList, KeyboardAvoidingView, TextInput } from "react-native";


export default function Index() {

    const DATA = [
        {
            title: "Hexatombe",
            data: ["Aguiar", "Jae", "Kemi", "Labirinto"]
        },
        {
            title: "Equipe E",
            data: ["Joe", "Arthur", "Liz", "Cris", "Cesar"]
        },
        {
            title: "Tropa de elite",
            data: ["Pedro", "Paulo", "Luciano", "Enzo"]
        }
    ];

    return (
        <View style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <Text>{item}</Text>}
                renderSectionHeader={({ section }) => (
                    <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
                )}
            />
            <Text>Digite o parsa que tu quer buscar:</Text>
            <TextInput></TextInput>
            <KeyboardAvoidingView></KeyboardAvoidingView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
