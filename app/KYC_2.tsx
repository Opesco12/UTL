import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import { Colors } from "@/constants/Colors";
import AppTextField from "@/components/AppTextField";
import AppButton from "@/components/AppButton";
import StyledText from "@/components/StyledText";
import Screen from "@/components/Screen";
import AppHeader from "@/components/AppHeader";

const KYC_2 = () => {
  const statusBarHeight = StatusBar.currentHeight;
  const validationSchema = Yup.object().shape({});
  return (
    <Screen>
      <AppHeader />
      <View style={{ marginTop: 20 }}>
        <StyledText type="heading" variant="semibold">
          KYC Details
        </StyledText>
        <StyledText type="body" variant="medium" color={Colors.light}>
          Step 2 of 2
        </StyledText>

        <Formik
          validationSchema={validationSchema}
          initialValues={{}}
          onSubmit={(values) => console.log(values)}
        >
          <View style={{ marginTop: 20 }}>
            <AppTextField label={"Contact Address"} name={"address"} />
            <AppTextField label={"City/Town"} name={"city"} />
            <AppTextField label={"State"} name={"state"} />

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
              <AntDesign name="cloudupload" size={20} color={Colors.primary} />
              Upload File (JPG,PNG, PDF)
            </AppButton>

            <AppButton customStyles={{ marginTop: 30 }}>Submit</AppButton>
          </View>
        </Formik>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default KYC_2;
