import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ImageViewer from "../../components/ImageViewer";
import Button from "../../components/Button";
import * as ImagePacker from "expo-image-picker"
import { useState } from "react";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setselectedImage] = useState("")

  pickImageAsync = async () => {
    let result = await ImagePacker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      console.log(result);
      setselectedImage(result.assets[0].uri)
    }
    else {
      alert('You did not select any image.');
    }
  }

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <ImageViewer imgSource={selectedImage || PlaceholderImage} />
      </View>
      <View style={style.footerContainer}>
        <Button theme="primary" label="Choose a photo" action={pickImageAsync} />
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