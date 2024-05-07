import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector, Provider } from "react-redux";
import store from "./store/store";
import AuthStack from "./navigation/AuthStack";
import AppStack from "./navigation/AppStack";
import Loading from "./screens/LoadingScreen";
import { setAuthToken } from "./store/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = useSelector((state) => !!state.auth.authToken);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const userToken = await AsyncStorage.getItem("userToken");

        console.log("userToken:", userToken);

        if (userToken) {
          dispatch(setAuthToken(userToken));
        }

        await new Promise((resolve) => setTimeout(resolve, 3700));

        setIsLoading(false);
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
