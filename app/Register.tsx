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

import { Colors } from "@/constants/Colors";
import AppTextField from "@/components/AppTextField";
import AppButton from "@/components/AppButton";
import AppHeader from "@/components/AppHeader";

const Register = () => {
  const statusBarHeight = StatusBar.currentHeight;
  return (
    <View style={[styles.container, { paddingTop: statusBarHeight }]}>
      <AppHeader />

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 25 }}>Hello, It's nice to meet you,</Text>
        <Text style={{ fontSize: 15, color: Colors.light }}>
          Sign up for an account below
        </Text>

        <View style={{ marginTop: 20 }}>
          <AppTextField label={"First Name"} />
          <AppTextField label={"Last Name"} />
          <AppTextField label={"Phone Number"} />
          <AppTextField label={"Email Address"} />
          <AppTextField
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
              marginBottom: 15,
              textAlign: "center",
              width: "60%",
            }}
          >
            By Signing up, you agree to{" "}
            <Text style={{ color: Colors.primary }}>
              Terms of Use and Privacy Policy
            </Text>
          </Text>
          <AppButton text={"Proceed"} />
          <Text style={{ marginTop: 15, textAlign: "center" }}>
            Already have an account?{" "}
            <Text style={{ color: Colors.primary }}>Login</Text>
          </Text>
        </View>
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
