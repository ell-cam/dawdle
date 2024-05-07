import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Create({ navigation }) {
  const [form, setForm] = useState({
    name: '',
    position: '',
    level: '',
  });

  function updateForm(value) {
    setForm((prev) => ({ ...prev, ...value }));
  }

  async function onSubmit() {
    const newPerson = {
      name: form.name,
      position: form.position,
      level: form.level,
    };

    try {
      const response = await fetch('http://192.168.0.212:5050/record/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPerson),
      });

      if (response.ok) {
        navigation.navigate('RecordList'); // Assuming you have a 'RecordList' screen
      } else {
        const message = `An error has occurred: ${response.statusText}`;
        console.error(message);
      }
    } catch (error) {
      console.error('Create error:', error);
    }
  }

  return (
    <View>
      <Text>Create User</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={form.name}
        onChangeText={(value) => updateForm({ name: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Position"
        value={form.position}
        onChangeText={(value) => updateForm({ position: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Level"
        value={form.level}
        onChangeText={(value) => updateForm({ level: value })}
      />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Create User</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});