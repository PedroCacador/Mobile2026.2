import { Text, View, StyleSheet, ScrollView, Modal, Pressable, FlatList } from "react-native";
import { FAB, TextInput } from 'react-native-paper';
import { useState } from "react";
import CharacterCardView from "@/view/components/CharacterCardView";
import { characters } from "@/repository/CharactersRepository";

export default function CharactersList() {

    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>FICHAS DE PERSONAGEM</Text>
            <TextInput mode="outlined" label="Buscar personagem..." />
            <FlatList
                data={characters}
                keyExtractor={character => character.id.toString()}
                renderItem={({ item }) => (
                    <CharacterCardView character={item} />
                )}
            />
            <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>Novo personagem</Text>

                        <Text style={styles.label}>Nome do personagem</Text>
                        <TextInput
                            mode="outlined"
                            label="Adalberto, Lucas, Thiagão, Zé..."
                            dense
                            value={name}
                            onChangeText={setName}
                        />
                        <Text style={styles.label}>Descrição do personagem</Text>
                        <TextInput
                            mode="outlined"
                            label="Combatente, Especialista, Ocultista..."
                            dense
                            value={description}
                            onChangeText={setDescription}
                        />
                        <Text style={styles.label}>Foto do personagem</Text>
                        <TextInput
                            mode="outlined"
                            label="URL apenas"
                            dense
                            value={imageUrl}
                            onChangeText={setImageUrl}
                        />

                        <View style={styles.actions}>
                            <Pressable style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.cancelText}>Cancelar</Text>
                            </Pressable>
                            <Pressable style={styles.button} onPress={() => setModalVisible(false)}>
                                <Text style={styles.buttonText}>Adicionar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <FAB
                style={styles.floatingButton}
                icon="plus"
                onPress={() => setModalVisible(true)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#252525",
    },
    tittle: {
        fontSize: 30,
        fontWeight: "black",
        fontFamily: "Bebas-Nue",
        color: "#FF2567",
    },
    floatingButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#FF2567",
        borderRadius: 50,
        width: 60,
        height: 60,
    },
    button: {
        backgroundColor: "#FF2567",
        paddingVertical: 11,
        paddingHorizontal: 18,
        borderRadius: 8,
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
    },
    cancelButton: {
        paddingVertical: 11,
        paddingHorizontal: 18,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#666",
    },
    cancelText: {
        color: "#DDD",
        fontWeight: "700",
    },
    modalOverlay: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "rgba(0, 0, 0, 0.62)",
    },
    modal: {
        backgroundColor: "#252525",
        width: "100%",
        maxWidth: 420,
        padding: 18,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "#464646",
    },
    modalTitle: {
        color: "white",
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 12,
    },
    label: {
        color: "#DDD",
        fontSize: 13,
        marginBottom: 4,
        marginTop: 8,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10,
        marginTop: 18,
    }
});
