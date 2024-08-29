import { StyleSheet, Text, View, StatusBar } from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import { Colors } from "@/constants/Colors";
import AppTextField from "@/components/AppTextField";
import AppButton from "@/components/AppButton";
import AppPicker from "@/components/AppPicker";
import StyledText from "@/components/StyledText";
import AppHeader from "@/components/AppHeader";
import Screen from "@/components/Screen";

const KYC_1 = () => {
  const statusBarHeight = StatusBar.currentHeight;
  const validationSchema = Yup.object().shape({});

  const options = [
    {
      label: "Travel Passport",
      value: "Travel Passport",
    },
    { label: "Driver's License", value: "Driver's License" },
    { label: "Voter's Card", value: "Voter's Card" },
  ];

  return (
    <Screen>
      <AppHeader />
      <View style={{ marginTop: 20 }}>
        <StyledText type="heading" variant="semibold">
          KYC Details
        </StyledText>
        <StyledText type="body" variant="medium" color={Colors.light}>
          Step 1 of 2
        </StyledText>

        <Formik
          validationSchema={validationSchema}
          initialValues={{ nin: "", bvn: "", govId: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleSubmit }) => (
            <View style={{ marginTop: 20 }}>
              <AppTextField
                label={"National Identification Number"}
                name="nin"
                onChangeText={handleChange("nin")}
              />
              <AppTextField
                label={"Biometric Verification Number"}
                name="bvn"
                onChangeText={handleChange("bvn")}
              />

              <AppPicker
                label={"Government Issued Identification"}
                placeholder={"Select Document Type"}
                options={options}
              />

              <StyledText
                type="label"
                variant="medium"
                color={Colors.primary}
                style={{ marginBottom: 5 }}
              >
                Upload ID Document
              </StyledText>
              <AppButton
                customStyles={{
                  backgroundColor: Colors.white,
                  borderWidth: 1,
                  borderColor: Colors.light,
                }}
                textColor={Colors.primary}
              >
                <AntDesign
                  name="cloudupload"
                  size={20}
                  color={Colors.primary}
                />
                Upload File (JPG, PNG, PDF)
              </AppButton>

              <AppButton
                onPress={handleSubmit}
                customStyles={{ marginTop: 30 }}
              >
                Submit
              </AppButton>
            </View>
          )}
        </Formik>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default KYC_1;
