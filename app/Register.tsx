import {
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Icon, Input, Button } from "@rneui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Yup from "yup";
import { Formik } from "formik";

import { Colors } from "@/constants/Colors";
import AppTextField from "@/components/AppTextField";
import AppButton from "@/components/AppButton";
import AppHeader from "@/components/AppHeader";

const Register = () => {
  const statusBarHeight = StatusBar.currentHeight;

  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .matches(/^[A-Za-z]+$/, "First name must contain only letters")
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must not exceed 50 characters")
      .required("First name is required"),
    lastname: Yup.string()
      .matches(/^[A-Za-z]+$/, "Last name must contain only letters")
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must not exceed 50 characters")
      .required("Last name is required"),
    phoneNumber: Yup.string()
      .matches(/^\+?[1-9]\d{1-14}$/, "Invalid phone number")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .min(/[A-Z]/, "Password must contain at least one uppercase letter")
      .min(/[0-9]/, "Password must contain at least one number")
      .min(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
  });
  return (
    <View style={[styles.container, { paddingTop: statusBarHeight }]}>
      <AppHeader />

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 25 }}>Hello, It's nice to meet you,</Text>
        <Text style={{ fontSize: 15, color: Colors.light }}>
          Sign up for an account below
        </Text>

        <Formik
          validationSchema={validationSchema}
          initialValues={{
            firstname: "",
            lastname: "",
            phoneNumber: "",
            email: "",
            password: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={{ marginTop: 20 }}>
              <AppTextField
                onChangeText={handleChange("firstname")}
                name="firstname"
                label={"First Name"}
              />
              <AppTextField
                OnchangeText={handleChange("lastname")}
                name="lastname"
                label={"Last Name"}
              />
              <AppTextField
                OnchangeText={handleChange("phoneNumber")}
                name="phoneNumber"
                label={"Phone Number"}
              />
              <AppTextField
                onChangeText={handleChange("email")}
                name="email"
                label={"Email Address"}
              />
              <AppTextField
                onChangeText={handleChange("password")}
                name="password"
                label={"Password"}
                rightIcon={
                  <Icon
                    type="material-community"
                    name="eye-off-outline"
                    color={Colors.light}
                  />
                }
              />

              <Text
                style={{
                  alignSelf: "center",
                  color: Colors.light,
                  fontSize: 14,
                  marginVertical: 20,
                  textAlign: "center",
                  width: "60%",
                }}
              >
                By Signing up, you agree to{" "}
                <Text style={{ color: Colors.primary }}>
                  Terms of Use and Privacy Policy
                </Text>
              </Text>
              <AppButton text={"Proceed"} onPress={handleSubmit} />
              <Text style={{ marginTop: 15, textAlign: "center" }}>
                Already have an account?{" "}
                <Text style={{ color: Colors.primary }}>Login</Text>
              </Text>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default Register;
