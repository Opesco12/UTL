import { StyleSheet, Text, View } from "react-native";

import Screen from "@/components/Screen";
import AppHeader from "@/components/AppHeader";
import AppButton from "@/components/AppButton";
import { Colors } from "@/constants/Colors";
import Otp_Input from "@/components/Otp_Input";
import StyledText from "@/components/StyledText";
import NumberPad from "@/components/AppNumericPad";

const Otp = () => {
  return (
    <Screen>
      <AppHeader />
      <StyledText type="heading" variant="semibold" style={{ marginTop0: 25 }}>
        OTP Verification
      </StyledText>
      <StyledText type="body" variant="medium" color={Colors.light}>
        We have sent an OTP verification to your email address
        evelyn********@gmail.com. Enter the code below to verify
      </StyledText>
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
      <NumberPad />
    </Screen>
  );
};

export default Otp;
