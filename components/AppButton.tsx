import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

import { Colors } from "@/constants/Colors";

const AppButton = ({ customStyles, disabled, text }) => {
  return (
    <TouchableOpacity disabled={disabled}>
      <View
        style={[
          styles.button,
          customStyles,
          {
            backgroundColor: disabled ? Colors.lightBg : Colors.primary,
          },
        ]}
      >
        <Text style={{ fontSize: 16, color: "#fff", fontWeight: "500" }}>
          {text && text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 10,
    height: 53,
    justifyContent: "center",
  },
});

export default AppButton;
