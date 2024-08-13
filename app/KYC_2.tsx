import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/Colors";
import AppTextField from "@/components/AppTextField";
import AppButton from "@/components/AppButton";
const KYC_2 = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>KYC Details</Text>
      <Text style={{ fontSize: 15, color: Colors.light }}>Step 2 of 2</Text>

      <AppTextField label={"Contact Address"} />
      <AppTextField label={"City/Town"} />
      <AppTextField label={"State"} />
      <AppTextField
        label={"Upload Proof of Address (e.g Utility Bill, Rent Receipt)"}
      />
      <AppButton text={"Submit"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default KYC_2;
