import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import style from "../styleguide.js";

const styles = {
  svgContainer: {
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  },
};

const BackButton = ({invert = false}) => {
  const backgroundColor = invert ? "#fff" : style.Primary;

  return (
    <View style={styles.svgContainer}>
      <Svg height="100%" width="100%">
        <Circle cx="50%" cy="50%" r="48%" stroke="" strokeWidth="3" fill={backgroundColor} />
      </Svg>
    </View>
  );
};

export default BackButton;