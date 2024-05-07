import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

export default function RecordList({ navigation }) {
  const [records, setRecords] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function getRecords() {
      try {
        const response = await fetch({API_URL} + '/record/');
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          Alert.alert("Error", message);
          return;
        }
        const records = await response.json();
        setRecords(records);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    getRecords();
  }, [records.length]);

  async function deleteRecord(id) {
    try {
      await fetch({API_URL} + '/record/${id}', {
        method: "DELETE",
      });

      const newRecords = records.filter((el) => el._id !== id);
      setRecords(newRecords);
    } catch (error) {
      console.error("Delete error:", error);
    }
  }

  function recordList({ item }) {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.position}</Text>
        <Text>{item.level}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Edit", { id: item._id })}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteRecord(item._id)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View>
      <Text>Record List</Text>
      <FlatList
        data={records}
        renderItem={recordList}
        keyExtractor={(item) => item._id.toString()}
      />
    </View>
  );
}