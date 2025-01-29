import { View } from 'react-native';
import { Image } from 'expo-image';
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export default function EmojiSticker({ imageSize, stickerSource }) {

  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubleTap = Gesture.Tap().numberOfTaps(2).onStart(() => {
    if (scaleImage.value !== imageSize * 2) {
      scaleImage.value = imageSize * 2;
    }
    else {
      scaleImage.value = Math.round(scaleImage.value / 2)
    }
  })

  const drag = Gesture.Pan().onChange((Event) => {
    translateX.value += Event.changeX;
    translateY.value += Event.changeY;
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value
        },
      ],
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  })

  return (
    <GestureDetector gesture={drag}>
    <Animated.View style={[containerStyle,{ top: -350 }]}>
      <GestureDetector gesture={doubleTap}>
        <Animated.Image source={stickerSource} style={[imageStyle, { width: imageSize, height: imageSize }]} resizeMode={"contain"} />
      </GestureDetector>
    </Animated.View>
    </GestureDetector>
  );
}
