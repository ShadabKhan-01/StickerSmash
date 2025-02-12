import { Text, View, StyleSheet } from "react-native";
// import { Link } from "expo-router";
import { useState, useRef } from "react";
import * as ImagePacker from "expo-image-picker"
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from "react-native-view-shot";


import ImageViewer from "../../components/ImageViewer";
import Button from "../../components/Button";
import CircleButton from "../../components/CircleButton";
import IconButton from "../../components/IconButton";
import EmojiPicker from "../../components/EmojiPicker";
import EmojiList from "../../components/EmojiList";
import EmojiSticker from "../../components/EmojiSticker";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setselectedImage] = useState("");
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [IsModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setpickedEmoji] = useState()

  const [status, requestPermission] = MediaLibrary.usePermissions()
  const imageRef = useRef();

  if(status === null){
    requestPermission();
  }

  pickImageAsync = async () => {
    let result = await ImagePacker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      // console.log(result);
      setselectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    }
    else {
      alert('You did not select any image.');
    }
  }

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true)
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    try{
      const localUri = await captureRef(imageRef,{height:440,quality:1});
      await MediaLibrary.saveToLibraryAsync(localUri);
      if(localUri){
        alert("Saved");
      }
    }
    catch(error){
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <View ref={imageRef} collapsable= {false}>
        <ImageViewer imgSource={selectedImage || PlaceholderImage} />
        {pickedEmoji && <EmojiSticker stickerSource={pickedEmoji} imageSize={40}/>}
        </View>
      </View>
      {showAppOptions ? (
                <View style={style.optionsContainer}>
                <View style={style.optionsRow}>
                  <IconButton icon="refresh" label="Reset" onPress={onReset} />
                  <CircleButton onPress={onAddSticker} icon="add"/>
                  <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
                </View>
              </View>) : (
        <View style={style.footerContainer}>
          <Button theme="primary" label="Choose a photo" action={pickImageAsync} />
          <Button label="Use this photo" action={() => setShowAppOptions(true)} />
        </View>
      )
      }
      <EmojiPicker isVisible={IsModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setpickedEmoji} onCloseModal={onModalClose}/>
      </EmojiPicker>
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});