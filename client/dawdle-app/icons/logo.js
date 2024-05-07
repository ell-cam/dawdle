import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import ClockSvg from "../assets/logo/clock";
import EllipseSvg from "../assets/logo/ellipse";
import MinuteLine from "./minuteLine";
import HourLine from "./hourLine";
import SecondLine from "./secondLine";

const Logo = ({ scale = 1, shouldAnimate = false, invert = false }) => {
  const [animationKey, setAnimationKey] = useState(0);

  const handleClockPress = () => {
    // Increment the animation key to trigger a re-render and restart the animation
    setAnimationKey((prevKey) => prevKey + 1);

    // if no previous animaiton has happened so nothing changes, then force a spin aniamtion
    if (!shouldAnimate) {
      // set the shouldAnimate prop to true to trigger the animation
      shouldAnimate = true;
    }
  };

  const scaledTop = (value) => value * scale;
  const scaledLeft = (value) => value * scale;
  const scaledSize = (value) => value * scale;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3.84,
      elevation: 5,
    },
    overlapGroup: {
      position: "absolute",
      overflow: "visible",
    },
    backgroundImage: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
    },
    clock: {
      justifyContent: "center",
      alignItems: "center",
    },
    mline: {
      position: "absolute",
      top: scaledTop(49),
      left: scaledLeft(50),
    },
    sline: {
      position: "absolute",
      top: scaledTop(49),
      left: scaledLeft(50),
    },
    hline: {
      position: "absolute",
      top: scaledTop(49),
      left: scaledLeft(50),
    },
    circle: {
      position: "absolute",
      top: scaledTop(78.5),
      left: scaledLeft(79),
      width: scaledSize(6),
      height: scaledSize(6),
      borderRadius: scaledSize(3),
      backgroundColor: "#151515",
    },
  });

  return (
    <TouchableWithoutFeedback onPress={handleClockPress}>
      <View style={styles.container} key={animationKey}>
        <View style={styles.overlapGroup}>
          <View style={styles.backgroundImage}>
            <EllipseSvg scale={scale} shouldAnimate={shouldAnimate} invert={invert} />
          </View>
          <View style={styles.clock}>
            <ClockSvg scale={scale} invert={invert}/>
          </View>
          <View style={styles.mline}>
            <MinuteLine scale={scale} shouldAnimate={shouldAnimate} />
          </View>
          <View style={styles.sline}>
            <SecondLine scale={scale} shouldAnimate={shouldAnimate} />
          </View>
          <View style={styles.hline}>
            <HourLine scale={scale} shouldAnimate={shouldAnimate} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Logo;
