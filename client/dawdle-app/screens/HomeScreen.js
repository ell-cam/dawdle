import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/counter';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const goToUserList = () => {
    navigation.navigate('RecordList');
  };

  const goToCreateUser = () => {
    navigation.navigate('Create');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>Counter App</Text>
      <Text style={styles.counter_text}>{counter}</Text>

      <TouchableOpacity onPress={() => dispatch(increment())} style={styles.btn}>
        <Text style={styles.btn_text}> Increment </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(decrement())}
        style={{ ...styles.btn, backgroundColor: '#6e3b3b' }}
      >
        <Text style={styles.btn_text}> Decrement </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToUserList} style={{ ...styles.btn, backgroundColor: '#086972' }}>
        <Text style={styles.btn_text}> Go to User List </Text>
      </TouchableOpacity>

      {/* Add a button to navigate to the Create screen */}
      <TouchableOpacity onPress={goToCreateUser} style={{ ...styles.btn, backgroundColor: '#4CAF50' }}>
        <Text style={styles.btn_text}> Create User </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50,
  },
  title_text: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 55,
  },
  counter_text: {
    fontSize: 35,
    fontWeight: '900',
    margin: 15,
  },
  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: '#fff',
  },
});