import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import Svg, { Path, G } from "react-native-svg";
import style from "../../styleguide.js";

const BackgroundCircle = ({ scale = 1, shouldAnimate = false, invert = false }) => {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const fill = invert ? style.gray02 : "#5DB0AB";

  useEffect(() => {
    if (shouldAnimate) {
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 3000, // Adjust the duration as needed
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }).start(() => {
        rotateValue.setValue(0); // Reset the rotation value
      });
    }
  }, [rotateValue, shouldAnimate]);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const scaledSize = (value) => value * scale;

  return (
    <Animated.View
      style={{
        transform: shouldAnimate ? [{ rotate }] : [],
      }}
    >
      <Svg
        width={scaledSize(165)}
        height={scaledSize(167)}
        viewBox={`0 0 ${scaledSize(165)} ${scaledSize(167)}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G id="Ellipse" transform={`scale(${scale})`}>
          <Path
            id="Ellipse 5"
            d="M146.951 81.0161C157.989 80.5841 166.818 71.1521 163.779 60.5325C160.585 49.3671 155.075 38.9184 147.527 29.9012C135.666 15.7332 119.441 5.89933 101.394 1.93979C83.3458 -2.01975 64.4944 0.118715 47.7921 8.02023C31.0898 15.9218 17.48 29.14 9.09441 45.6046C0.708851 62.0693 -1.97883 80.8502 1.45235 99.0059C4.88353 117.162 14.2398 133.666 28.0556 145.935C41.8714 158.204 59.3664 165.544 77.8003 166.805C89.5327 167.608 101.224 165.92 112.133 161.937C122.509 158.15 124.946 145.462 118.805 136.281L103.37 113.206C94.6772 100.21 103.588 82.7136 119.212 82.102L146.951 81.0161Z"
            fill={fill}
          />
        </G>
      </Svg>
    </Animated.View>
  );
};

export default BackgroundCircle;
