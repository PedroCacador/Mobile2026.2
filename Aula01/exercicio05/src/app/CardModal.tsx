import { useState } from "react";
import { View, Text, Image, Button, Modal, TextInput, ActivityIndicator, StyleSheet } from "react-native";

type CardModalProps = {
    title: string;
    imageUri: string;
};

export default function CardModal({ title, imageUri }: CardModalProps) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <View>
                <Text>{title}</Text>
                <Image source={{ uri: imageUri }} style={{ width: 100, height: 100 }} />
                <Button title="Abrir Modal" onPress={() => setModalVisible(true)} />
            </View>

            <Modal visible={modalVisible}>
                <View>
                    <TextInput placeholder="Digite algo..." />
                    <ActivityIndicator />
                    <Button title="Fechar" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
}
