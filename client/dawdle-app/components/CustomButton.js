import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from '../styleguide.js';

export default function CustomButton({label, onPress, invert = false}) {
  const backgroundColor = invert ? style.gray02 : style.Primary;
  const color = invert ? style.gray04 : "#fff";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        padding: 17,
        borderRadius: 22,
        marginBottom: 20,
        marginTop: 25,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 16,
          color: color,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}