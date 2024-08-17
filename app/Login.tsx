import { StyleSheet, Text, View } from "react-native";

import AppHeader from "@/components/AppHeader";
import AppButton from "@/components/AppButton";
import AppLargeText from "@/components/AppLargeText";
import Screen from "@/components/Screen";
import { Colors } from "@/constants/Colors";
import AppTextField from "@/components/AppTextField";

const Login = () => {
  return (
    <Screen>
      <AppHeader />
      <View style={{ flex: 1 }}>
        <AppLargeText text={"Welcome Back!"} />
        <Text style={{ fontSize: 17, color: Colors.light }}>
          Login to your account
        </Text>

        <View style={{ marginTop: 20, flex: 1 }}>
          <AppTextField label={"Email"} />
          <AppTextField label={"Password"} rightIcon />
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <AppButton text={"Login"} />
            <Text style={{ textAlign: "center", fontSize: 15, marginTop: 15 }}>
              Don't have an account?{" "}
              <Text style={{ color: Colors.lightPrimary }}>Register</Text>
            </Text>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Login;
