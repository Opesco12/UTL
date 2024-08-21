import { Text, View, StyleSheet } from "react-native";
import { Icon, Input } from "@rneui/base";
import { useFormikContext } from "formik";

import { Colors } from "@/constants/Colors";
import StyledText from "./StyledText";

const AppTextField = ({ label, rightIcon, name, ...props }) => {
  const { values, errors, touched } = useFormikContext();
  return (
    <View style={styles.container}>
      <StyledText
        color={Colors.primary}
        type="label"
        variant="medium"
        style={{ marginBottom: 2 }}
      >
        {label}
      </StyledText>
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
        {...props}
        value={values[name]}
      />
      {touched[name] && errors[name] && (
        <StyledText color={Colors.error} type="label" variant="medium">
          {errors[name]}
        </StyledText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  input: {
    borderColor: Colors.light,
    borderRadius: 8,
    borderWidth: 1,
    height: 49,
  },
});

export default AppTextField;
