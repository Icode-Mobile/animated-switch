import { useState } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolateColor,
} from 'react-native-reanimated';

import ImageSol from '../../images/sol.png';
import ImageLua from '../../images/lua.png';

import { styles } from './style';

import { useMode } from '../../context';

const ButtonAnimated = Animated.createAnimatedComponent(Pressable);

export const Toggle = () => {
  const [image, setImage] = useState(ImageSol);
  const toggleAnimated = useSharedValue(0);
  const { changeType } = useMode();

  const styleButtonAnimation = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        toggleAnimated.value,
        [0, 1],
        ['blue', '#111']
      ),
    };
  });

  const styleImageAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(toggleAnimated.value === 0 ? 0 : 90, {
            duration: 1100,
            easing: Easing.elastic(2),
          }),
        },
      ],
    };
  });

  const styleBackgroundAnimation = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        toggleAnimated.value,
        [0, 1],
        ['#42bff5', '#282929']
      ),
    };
  });

  return (
    <ButtonAnimated
      onPress={() => {
        if (toggleAnimated.value === 1) {
          toggleAnimated.value = 0;
          setImage(ImageSol);
          changeType('sun');
        } else {
          toggleAnimated.value = 1;
          setImage(ImageLua);
          changeType('moon');
        }
      }}
      style={[styles.container, styleButtonAnimation]}
    >
      <Animated.View style={[styles.background, styleBackgroundAnimation]}>
        <Animated.Image
          source={image}
          style={[styles.image, styleImageAnimation]}
        />
      </Animated.View>
    </ButtonAnimated>
  );
};
