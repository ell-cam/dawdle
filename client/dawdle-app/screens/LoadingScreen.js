import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import Logo from "../icons/logo";

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoWrapper: {
    aspectRatio: 1,
    height: 181,
    width: 173,
  },
  styledLogo: {
    flex: 1,
    height: 181,
    width: 173,
    alignSelf: "center", // Center the logo horizontally
    justifyContent: "center", // Center the logo vertically
  },
});

const Loading = () => {
  const opacity = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const delay = setTimeout(() => {
      const popAnimation = Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.1,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.9,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]);

      const fadeOutAnimation = Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
        delay: 350,
      });

      Animated.parallel([popAnimation, fadeOutAnimation]).start();
    }, 3100); // 3 seconds delay

    return () => clearTimeout(delay);
  }, [opacity, scale]);

  return (
    <View style={styles.loadingWrapper}>
      <Animated.View
        style={[styles.logoWrapper, { opacity, transform: [{ scale }] }]}
      >
        <Logo shouldAnimate = {true} style={styles.styledLogo} />
      </Animated.View>
    </View>
  );
};

export default Loading;
