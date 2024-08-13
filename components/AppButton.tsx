import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

import { Colors } from "@/constants/Colors";

const AppButton = ({ text }) => {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={{ fontSize: 15, color: "#fff" }}>{text && text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 10,
    height: 53,
    justifyContent: "center",
  },
});

export default AppButton;
