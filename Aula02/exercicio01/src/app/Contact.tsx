import { Text, View, StyleSheet, Image } from "react-native";
import { Card } from 'react-native-paper';

type contactProps = {
    name: string,
    mensage: string,
    photo: string
}
export default function Contact(props: contactProps) {

    return (
        <Card style={styles.mensageCard}>
            <Image source={{ uri: props.photo }} style={styles.photo} />
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.mensage}>{props.mensage}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    photo: {
        width: 80,
        height: 80,
        borderRadius: 100,
    },
    photoCard: {

    },
    namesMensage: {

    },
    name: {


    },
    mensage: {

    },
    mensageCard: {
        backgroundColor: '#176585',
        borderRadius: 20,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});
