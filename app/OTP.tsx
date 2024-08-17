import { StyleSheet, Text, View } from "react-native";

import Screen from "@/components/Screen";
import AppHeader from "@/components/AppHeader";
import AppButton from "@/components/AppButton";
import AppLargeText from "@/components/AppLargeText";
import { Colors } from "@/constants/Colors";
import Otp_Input from "@/components/Otp_Input";

const Otp = () => {
  return (
    <Screen>
      <AppHeader />
      <AppLargeText text={"OTP Verification"} />
      <Text style={{ fontSize: 15, color: Colors.light }}>
        We have sent an OTP verification to your email address
        evelyn********@gmail.com. Enter the code belo to verify
      </Text>
      <View style={{ marginTop: 25 }}>
        <Otp_Input />

        <View style={{ marginTop: 20, marginBottom: 50 }}>
          <Text style={{ textAlign: "center", fontSize: 15 }}>
            Didn't receive a code?
          </Text>
          <Text
            style={{
              color: Colors.lightPrimary,
              fontSize: 15,
              textAlign: "center",
            }}
          >
            Resend OTP
          </Text>
        </View>
        <AppButton text={"Continue"} />
      </View>
    </Screen>
  );
};

export default Otp;
