import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import Modal from "react-native-modal";

import Screen from "@/components/Screen";
import AppHeader from "@/components/AppHeader";
import AppLargeText from "@/components/AppLargeText";
import { Colors } from "@/constants/Colors";
import AppButton from "@/components/AppButton";

const AddPhoneNumber = () => {
  return (
    <Screen>
      <AppHeader />
      <AppLargeText text={"Add phone number"} />
      <Text style={styles.text}>
        Input the number you would like to add to your account
      </Text>
    </Screen>
  );
};

const PhoneNumberVerification = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <AppHeader />
        <AppLargeText text={"2 Step Verification"} />
        <Text style={styles.text}>
          Enter the 2-step verification code we sent to your phone number
          ********10
        </Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Enter 7 digit code" />
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <AppButton text={"Submit"} />
        </View>
      </View>

      <Modal
        isVisible={true}
        onBackdropPress={() => setIsModalVisible(false)}
        onBackButtonPress={() => console.log("back button pressed")}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.white,
            height: "30%",
          }}
        >
          <Text>This is a modal</Text>
        </View>
      </Modal>
    </Screen>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 5,
    fontSize: 16,
    height: 50,
    padding: 8,
  },
  inputContainer: {
    marginTop: 50,
  },
  text: {
    fontSize: 16,
    color: Colors.light,
  },
});

export { AddPhoneNumber, PhoneNumberVerification };
