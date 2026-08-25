import { Text, View, StyleSheet, Image } from "react-native";

type contactProps = {
    name: string,
    mensage: string,
    photo: string
}
export default function Contact(props: contactProps) {

    return (
        <View style={styles.mensageCard}>
            <View>
                <Image source={{ uri: props.photo }} style={styles.photo} />
            </View>
            <View>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.mensage}>{props.mensage}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    photo: {
        width: 80,
        height: 80,
        borderRadius: 70,
        margin: 5,
        
        borderColor: '#48cae4',      
    },
    photoCard: {

    },
    namesMensage: {

    },
    name: {
        fontSize: 20,
        margin: 5,
        padding: 2,
        textDecorationStyle: 'solid',
        color: 'white',
    },
    mensage: {
        fontSize: 10,
        padding: 10,
        color: 'white',
    },
    mensageCard: {
        backgroundColor: '#0077b6',
        borderRadius: 20,
        flexDirection: 'row',
    },
});
