import { StyleSheet, Text, TextInput, View } from "react-native";

import { Colors } from "@/constants/Colors";

const Otp_Input = ({ codeLength = 6 }) => {
  return (
    <View style={styles.container}>
      {[...Array(codeLength)].map((_, index) => (
        <TextInput
          key={index}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  input: {
    alignItems: "center",
    borderColor: Colors.light,
    borderRadius: 6,
    borderWidth: 1,
    fontSize: 20,
    height: 48,
    textAlign: "center",
    width: 48,
  },
});

export default Otp_Input;
