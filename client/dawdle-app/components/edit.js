import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useParams, useNavigation } from "@react-navigation/native";

export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
    records: [],
  });
  const params = useParams();
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      try {
        const response = await fetch(`http://192.168.0.212:5050/record/${params.id.toString()}`);
        if (!response.ok) {
          const message = `An error has occurred: ${response.statusText}`;
          Alert.alert("Error", message);
          return;
        }
        const record = await response.json();
        if (!record) {
          Alert.alert(`Record with id ${id} not found`);
          navigation.navigate("UserList"); // Assuming you have a 'UserList' screen
          return;
        }
        setForm(record);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchData();
  }, [params.id, navigation]);

  function updateForm(value) {
    setForm((prev) => ({ ...prev, ...value }));
  }

  async function onSubmit() {
    const editedPerson = {
      name: form.name,
      position: form.position,
      level: form.level,
    };

    try {
      const response = await fetch(`http://192.168.0.212:5050/record/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify(editedPerson),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        navigation.navigate("UserList"); // Assuming you have a 'UserList' screen
      } else {
        const message = `An error has occurred: ${response.statusText}`;
        Alert.alert("Error", message);
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  }

  return (
    <View>
      <Text>Update Record</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={form.name}
        onChangeText={(value) => updateForm({ name: value })}
      />
      {/* Add TextInput components for 'position' and 'level' */}
      <TouchableOpacity onPress={onSubmit}>
        <Text>Update Record</Text>
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