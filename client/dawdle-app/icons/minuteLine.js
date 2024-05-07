import React, { Component } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

class MinuteLine extends Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
    this.scale = props.scale || 1;
  }

  componentDidMount() {
    if (this.props.shouldAnimate) {
      this.spin();
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.shouldAnimate && this.props.shouldAnimate) {
      this.spin();
    }
  }

  spin() {
    this.spinValue.setValue(0.99);
    Animated.timing(this.spinValue, {
      toValue: 5.99, // Set toValue to 2 for two full rotations
      duration: 3000, // Set the total duration to 4 seconds (2 seconds per rotation)
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }

  render() {
    const { shouldAnimate } = this.props;
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    const scaledWidth = 39 * this.scale;
    const scaledHeight = 1.2 * this.scale;

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      line: {
        width: scaledWidth,
        height: scaledHeight,
        backgroundColor: 'black',
      },
    });

    const pivotStyle = {
      transform: [
        { translateX: -scaledWidth / 2 },
        { translateY: 0 },
        { rotate: shouldAnimate ? spin : '357deg' },
        { translateX: scaledWidth / 2 },
      ],
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.line, pivotStyle]} />
      </View>
    );
  }
}

export default MinuteLine;