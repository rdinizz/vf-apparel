import { useRef, DependencyList, useMemo, useEffect, useState } from "react";
import { Animated } from "react-native";


/** got this custom hook example on the internet when i tried to make another animation
after adding to cart, but since color interpolation requires useNativeDriver = false and the scale animation
requires it true, you can't have two animations at the same time in this case.
decided to leave it here so it could be used in other component animations */
const useColorAnimation = (color) => {
  const anim = useMemo(() => new Animated.Value(0), [color]);
  const [finished, setFinished] = useState(true)
  const currentColor = useRef(color);
  const nextColor = useMemo(() => color, [color]);

  const animColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [currentColor.current, nextColor],
  });

  useEffect(() => {
    setFinished(false)
    Animated.spring(anim, {
      toValue: 1,
      useNativeDriver: false,
    }).start(() => {
      currentColor.current = nextColor;
      setFinished(true)
    });

  }, [color]);

  return [animColor, finished];
};

export default useColorAnimation