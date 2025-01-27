import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={style.container}>
      <Text style={style.text}>This is about page.</Text>
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
  });