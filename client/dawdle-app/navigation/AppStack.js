import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/LoadingScreen';
import Create from '../components/create';
import Edit from '../components/edit';
import RecordList from '../components/recordList';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={HomeScreen}
          options={{ headerShown: false }} // This will hide the header for the HomeScreen
        />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="RecordList" component={RecordList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;