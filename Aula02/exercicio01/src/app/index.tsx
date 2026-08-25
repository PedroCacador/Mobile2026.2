import { Text,View, StyleSheet, ScrollView, Alert } from "react-native";
import { FAB } from "react-native-paper";
import Contact from "./Contact";

export default function Index() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Válter ZAP</Text>
      <ScrollView>
        <Contact name="Thiago" mensage="Vascão ganhou hoje :)" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXyQ338tE4O3qWqskoIX7eWDSKjHEwu7lMSOc5lbEqGqkUIGKOZfKM7Fsm&s=10" />
        <Contact name="Samuel" mensage="Botafogo perdeu hoje :(" photo="https://imgs.search.brave.com/cqJZZ2qT4-kbUxhwlTGrwF9zsveZXtn_FCKsnS-dvos/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMi1v/Z2xvYm8uZ2xiaW1n/LmNvbS9FaHdLdkQ5/bTE2MmNHR3F6aHkt/TGVVOEk3S0U9L2Zp/dC1pbi83NTB4NDE1/L3NtYXJ0L2ZpbHRl/cnM6c3RyaXBfaWNj/KCkvaS5zMy5nbGJp/bWcuY29tL3YxL0FV/VEhfZGEwMjU0NzRj/MGM0NGVkZDk5MzMy/ZGRkYjA5Y2FiZTgv/aW50ZXJuYWxfcGhv/dG9zL2JzLzIwMjQv/SS9vL1VFbTdTSlQ5/aWkzcldtNkdBcHZR/L2dvdmVybmFkb3It/c2VyZ2lwZS1ib3Rh/Zm9nby5qcGc" />
        <Contact name="Lucas" mensage="Sem banana na promoção hj... :/" photo="https://imgs.search.brave.com/69mVjSZEXn6h3zbjJ8f_9dLI6zeTbfpfXCkSHqxerrA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3RpL2ZvdG9z/LWdyYXRpcy90Mi81/OTMwNDQ3Ni1wb3Np/dGl2by1wcm9maXNz/aW9uYWwtcHJvZ3Jh/bWFkb3ItZS10cmFi/YWxoYW5kby1kZW50/cm8tZGUtY2FzYS1l/LXNvcnJpZGVudGUt/bmVvbi1pbHVtaW5h/Y2FvLWZvdG8uSlBH" />
      </ScrollView>
      <FAB
        icon="plus"
        color="#176585"
        style={styles.floatingButton}
        onPress={() => alert("Sem conexão com a internet!")}   
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#023e8a',
  },
  floatingButton: {
    position: 'absolute',
    backgroundColor: '#00b4d8',
    zIndex: 10,
    right: 24,
    bottom: 24,
  },
  title: {
    color: 'white',
    fontSize: 60,
    fontFamily: 'Bebas-Neue' 
  }
});
