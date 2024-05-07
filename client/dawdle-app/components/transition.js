import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { TransitionPresets } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import BackButton from '../components/backButton.js';

const Stack = createSharedElementStackNavigator();

const Transition = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS, // Use the modal slide transition
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ gestureEnabled: false }}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { params } = route;
          return [
            {
              id: params?.sharedElementId || 'backButton',
              animation: 'move',
              resize: 'clip',
            },
          ];
        }}
      />
    </Stack.Navigator>
  );
};

export default Transition;