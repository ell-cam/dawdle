import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  TextInput,
  LayoutAnimation,
} from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Logo from "../icons/logo.js";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import { setAuthToken } from "../store/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackButton from "../components/backButton.js";
import style from "../styleguide.js";

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);

  const gotToRegister = () => {
    navigation.navigate("Register");
  };

  const fadeInAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeInAnim]);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (email, password, dispatch, navigation) => {
    try {
      // Simulate authentication - replace with your actual authentication logic
      const response = await api.login(email, password); // Replace with your actual authentication function

      // Assuming the response includes a user token
      const userToken = response.token;

      // Dispatch the action to set the user token in the Redux store
      dispatch(setAuthToken(userToken));

      // Save the user token in AsyncStorage for persistence
      await AsyncStorage.setItem("userToken", userToken);

      // Navigate to the main app stack or perform other actions
      navigation.navigate("AppStack");
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    contentContainer: {
      justifyContent: "center",
      flex: 1,
      position: "relative", // Make the contentContainer relative to handle absolute positioning of child elements
    },
    form: {
      paddingHorizontal: 30,
    },
    logo: {
      alignItems: "center",
      paddingBottom: 140,
      paddingTop: 10,
    },
    title: {
      fontSize: 28,
      fontWeight: "500",
      color: "#333",
      marginBottom: 30,
    },
    orText: {
      textAlign: "center",
      color: "#666",
      marginBottom: 10,
    },
    forgText: {
      textAlign: "center",
      fontWeight: "600",
      color: style.Primary,
      fontSize: 14,
      marginBottom: 40,
    },
    socialButton: {
      borderColor: "#ddd",
      borderWidth: 2,
      borderRadius: 10,
      paddingHorizontal: 30,
      paddingVertical: 10,
      alignSelf: "center",
      marginBottom: 10,
    },
    registerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 30,
    },
    registerText: {
      color: "#AD40AF",
      fontWeight: "600",
      marginLeft: 5,
    },
    back: {
      position: "absolute",
      bottom: -90,
      right: -110,
      overflow: "hidden",
    },
    overlapGroup2: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingHorizontal: 25,
    },
    createAccount: {
      fontSize: 15,
      fontWeight: 200,
      textAlign: "center",
      color: style.gray04,
      marginBottom: 15,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.contentContainer, { opacity: fadeInAnim }]}>
        <View style={styles.form}>
          <View style={styles.logo}>
            <Logo scale={0.5} />
          </View>

          <View style={styles.input}>
            <InputField
              label={"Email"}
              icon={
                <MaterialIcons name="alternate-email" size={20} color="#666" />
              }
              keyboardType="email-address"
            />
          </View>

          <InputField
            label={"Password"}
            icon={
              <Ionicons name="ios-lock-closed-outline" size={20} color="#666" />
            }
            inputType={passwordVisible ? "text" : "password"}
            fieldButtonLabel={passwordVisible ? "Hide" : "Show"}
            fieldButtonFunction={togglePasswordVisibility}
          />

          <View width="80%" alignSelf="center">
            <CustomButton label={"Login"} onPress={handleLogin} />
          </View>

          <Text style={styles.forgText}>Forgot your password?</Text>
        </View>

        <View style={styles.overlapGroup2}>
          <Text style={styles.createAccount}>Create Account {">"}</Text>
        </View>

        <View style={styles.back}>
          <TouchableOpacity onPress={gotToRegister}>
            <BackButton />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default LoginScreen;
