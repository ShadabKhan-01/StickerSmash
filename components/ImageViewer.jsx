import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';

export default function ImageViewer({ imgSource }) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
