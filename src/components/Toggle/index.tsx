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

  const styledButtonAnimated = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        toggleAnimated.value,
        [0, 1],
        ['blue', '#111']
      ),
    };
  });

  const styledImageAnimated = useAnimatedStyle(() => {
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

  const styledBackgroundAnimated = useAnimatedStyle(() => {
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
      style={[styles.container, styledButtonAnimated]}
    >
      <Animated.View style={[styles.background, styledBackgroundAnimated]}>
        <Animated.Image
          source={image}
          style={[styles.image, styledImageAnimated]}
        />
      </Animated.View>
    </ButtonAnimated>
  );
};
