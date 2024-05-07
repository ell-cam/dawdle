import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthSession } from 'expo';
import GoogleSVG from '../assets/images/google.js';

const GoogleUp = () => {
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const redirectUrl = AuthSession.getRedirectUrl();

      const result = await AuthSession.startAsync({
        authUrl: `https://accounts.google.com/o/oauth2/auth?response_type=token&client_id=${ANDROID_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUrl)}&scope=profile email&prompt=login`,
      });

      if (result.type === 'success') {
        const { accessToken } = result.params;

        // Now you can use the access token as needed
        let userInfoResponse = await fetch(
          'https://www.googleapis.com/userinfo/v2/me',
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        // Navigate to the main app stack or perform other actions
        navigation.navigate('AppStack');
      } else if (result.type === 'error') {
        console.error('Login failed:', result.error);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <TouchableOpacity onPress={handleLogin}>
      <GoogleSVG />
    </TouchableOpacity>
  );
};

export default GoogleUp;