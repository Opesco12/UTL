import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/Colors";
import AppTextField from "@/components/AppTextField";
import AppButton from "@/components/AppButton";
const KYC_1 = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>KYC Details</Text>
      <Text style={{ fontSize: 15, color: Colors.light }}>Step 1 of 2</Text>

      <AppTextField label={"National Identification Number"} />
      <AppTextField label={"Biiometric Verification Number"} />
      <AppTextField label={"Government Issued Identification"} />
      <AppTextField label={"Upload ID Document"} />
      <AppButton text={"Submit"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default KYC_1;
