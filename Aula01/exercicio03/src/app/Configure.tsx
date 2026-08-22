import { Text, View, StyleSheet, Switch } from "react-native";
import { useState } from "react";
import { Card } from "react-native-paper";

export default function Configure() {

    const [ativado, setAtivado] = useState(false);


    return (
        <View style={styles.container}>
            <View>
                <Card>
                    <Text>Esse botão faz absolutamente NADA!</Text>
                    <Switch value={ativado} onValueChange={(novoValor) => setAtivado(novoValor)} />
                </Card>
            </View>
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
