import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "@/constants/Colors";
import AppTextField from "@/components/AppTextField";
import AppButton from "@/components/AppButton";
const KYC_2 = () => {
  const statusBarHeight = StatusBar.currentHeight;
  return (
    <View style={[styles.container, { paddingTop: statusBarHeight }]}>
      <MaterialCommunityIcons name="chevron-left" size={35} />
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 25 }}>KYC Details</Text>
        <Text style={{ fontSize: 15, color: Colors.light }}>Step 2 of 2</Text>

        <View style={{ marginTop: 20 }}>
          <AppTextField label={"Contact Address"} />
          <AppTextField label={"City/Town"} />
          <AppTextField label={"State"} />
          <AppTextField
            label={"Upload Proof of Address (e.g Utility Bill, Rent Receipt)"}
          />
          <AppButton text={"Submit"} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default KYC_2;
