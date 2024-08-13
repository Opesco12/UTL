import { Text, View, StyleSheet } from "react-native";
import { Icon, Input } from "@rneui/base";

import { Colors } from "@/constants/Colors";

const AppTextField = ({ label, rightIcon, ...props }) => {
  return (
    <View>
      <Text style={{ color: Colors.primary }}>{label}</Text>
      <Input
        containerStyle={{ paddingHorizontal: 0 }}
        inputContainerStyle={styles.input}
        inputStyle={{ paddingHorizontal: 8 }}
        rightIcon={rightIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.light,
    borderRadius: 8,
    borderWidth: 1.5,
    height: 49,
  },
});

export default AppTextField;
