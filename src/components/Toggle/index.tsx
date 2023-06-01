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
  const { changeType } = useMode();

  return (
    <ButtonAnimated onPress={() => {}} style={[styles.container]}>
      <Animated.View style={[styles.background]}>
        <Animated.Image source={image} style={[styles.image]} />
      </Animated.View>
    </ButtonAnimated>
  );
};
