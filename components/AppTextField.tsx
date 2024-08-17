import { Text, View, StyleSheet } from "react-native";
import { Icon, Input } from "@rneui/base";

import { Colors } from "@/constants/Colors";

const AppTextField = ({ label, rightIcon, ...props }) => {
  return (
    <View>
      <Text style={{ color: Colors.primary, fontSize: 15 }}>{label}</Text>
      <Input
        containerStyle={{
          paddingHorizontal: 0,
          paddingVertical: 0,
          height: 49,
          marginBottom: 3,
        }}
        inputContainerStyle={styles.input}
        inputStyle={{ paddingHorizontal: 8 }}
        rightIcon={rightIcon}
      />
      <Text style={{ color: Colors.error, fontSize: 14 }}>
        Minimum amount to invest is #200,000.00
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.light,
    borderRadius: 8,
    borderWidth: 1,
    height: 49,
  },
});

export default AppTextField;
