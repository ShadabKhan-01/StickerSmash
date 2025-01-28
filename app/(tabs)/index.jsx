import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ImageViewer from "../../components/ImageViewer";
import Button from "../../components/Button";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
      <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={style.footerContainer}>
      <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#25292e",
    // color:"#fff"
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});