// screens/SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AuthService from '../services/AuthService'; // Adjust the path based on your project structure
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const navigation = useNavigation();

  async function handleSignup() {
    try {
      const result = await AuthService.signup(user);
      console.log('Signup successful:', result);
      // Handle successful signup, e.g., navigate to the login screen
      navigation.navigate('Login'); // Replace 'Login' with your actual login screen name
    } catch (error) {
      console.error('Signup error:', error.message);
      // Handle signup error, e.g., display an error message to the user
    }
  }

  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={user.username}
        onChangeText={(value) => setUser({ ...user, username: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={user.password}
        onChangeText={(value) => setUser({ ...user, password: value })}
      />
      <TouchableOpacity onPress={handleSignup} style={styles.button}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    width: '80%',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});