import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

import DatePicker from "react-native-date-picker";
import InputField from "../components/InputField";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import style from "../styleguide.js";

import Logo from "../icons/logo.js";
import GoogleSVG from "../assets/images/google.js";
import CustomButton from "../components/CustomButton";
import BackButton from "../components/backButton.js";

const RegisterScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState("Date of Birth");

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const handleRegister = () => {
    navigation.navigate("AppStack");
  };

  const fadeInAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, [fadeInAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.form}>
          <View style={styles.logo}>
            <Logo scale={0.5} invert={true} />
          </View>

          <View style={styles.input}>
            <InputField
              label={"Full Name"}
              icon={
                <Ionicons
                  name="person-outline"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
            />
          </View>

          <View style={styles.input}>
            <InputField
              label={"Email"}
              icon={
                <MaterialIcons
                  name="alternate-email"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
              keyboardType="email-address"
            />
          </View>

          <View style={styles.input}>
            <InputField
              label={"Password"}
              icon={
                <Ionicons
                  name="ios-lock-closed-outline"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
              inputType="password"
            />
          </View>

          <View width="80%" alignSelf="center">
            <CustomButton
              label={"Register"}
              onPress={handleRegister}
              invert={true}
            />
          </View>
        </View>

        <View style={styles.overlapGroup2}>
          <Text style={styles.createAccount}>Back to login {">"}</Text>
        </View>
      </View>

      <View style={styles.back}>
        <TouchableOpacity onPress={goToLogin}>
          <BackButton invert={true} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: style.Primary,
  },
  contentContainer: {
    justifyContent: "center",
    flex: 1,
    position: "relative", // Make the contentContainer relative to handle absolute positioning of child elements
  },
  form: {
    paddingHorizontal: 30,
    marginBottom: 40,
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
    color: "#fff",
    marginBottom: 15,
  },
});
