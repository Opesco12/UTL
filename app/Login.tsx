import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Icon } from "@rneui/base";

import { Colors } from "@/constants/Colors";
import AppHeader from "@/components/AppHeader";
import AppButton from "@/components/AppButton";
import Screen from "@/components/Screen";
import AppTextField from "@/components/AppTextField";
import StyledText from "@/components/StyledText";

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <Screen>
      <AppHeader />
      <View style={{ flex: 1 }}>
        <StyledText type="heading" variant="semibold" style={{ marginTop: 25 }}>
          Welcome Back!
        </StyledText>
        <StyledText type="title" variant="medium" color={Colors.light}>
          Login to your account
        </StyledText>

        <Formik
          validationSchema={validationSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleSubmit, handleChange }) => (
            <View style={{ marginTop: 20, flex: 1 }}>
              <AppTextField
                label={"Email"}
                name="email"
                onChangeText={handleChange("email")}
              />
              <AppTextField
                label={"Password"}
                rightIcon={
                  <Icon
                    type="material-community"
                    name={hidePassword ? "eye-off-outline" : "eye-outline"}
                    color={Colors.light}
                    onPress={() => setHidePassword(!hidePassword)}
                  />
                }
                name={"password"}
                onChangeText={handleChange("password")}
                secureTextEntry={hidePassword ? true : false}
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <AppButton onPress={handleSubmit}>Login</AppButton>
                <StyledText
                  style={{ textAlign: "center", marginTop: 15 }}
                  type="body"
                  variant="medium"
                >
                  Don't have an account?{" "}
                  <StyledText color={Colors.primary}>Register</StyledText>
                </StyledText>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Screen>
  );
};

export default Login;
