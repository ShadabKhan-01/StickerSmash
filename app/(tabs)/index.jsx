import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={style.container}>
      <Text style={style.text}>Hello.</Text>
      <Link href="/about" style={style.button}>Go to About screen</Link>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
    // color:"#fff"
  },
  text :{
    color:"#fff"
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});