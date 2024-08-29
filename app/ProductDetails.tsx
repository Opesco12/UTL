import { Image, StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Screen from "@/components/Screen";
import ContentBox from "@/components/ContentBox";
import { Colors } from "@/constants/Colors";
import AppTextField from "@/components/AppTextField";
import AppButton from "@/components/AppButton";
import LayeredScreen from "@/components/LayeredScreen";
import StyledText from "@/components/StyledText";
import SavingDetails from "@/components/SavingDetails";

const ProductDetails = () => {
  const navigation = useNavigation();
  const validationSchema = Yup.object().shape({});
  return (
    <LayeredScreen>
      <View style={{ backgroundColor: Colors.lightBg, flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            top: -40,
          }}
        >
          <StyledText color={Colors.white} type="subheading" variant="semibold">
            UTLAM Target Savings
          </StyledText>
        </View>

        <View style={styles.container}>
          <ContentBox
            customStyles={{
              backgroundColor: Colors.white,
              borderWidth: 0,
              elevation: 1,
              marginBottom: 20,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <StyledText
                color={Colors.lightPrimary}
                type="title"
                variant="semibold"
                style={{ color: Colors.lightPrimary, fontSize: 15 }}
              >
                Current Balance
              </StyledText>
            </View>
            <StyledText
              type="heading"
              variant="semibold"
              color={Colors.primary}
              style={{
                textAlign: "center",
              }}
            >
              ₦32,000,000.00
            </StyledText>
          </ContentBox>

          <ContentBox
            customStyles={{
              borderColor: Colors.light,
              marginBottom: 20,
              gap: 15,
            }}
          >
            <ContentBox customStyles={{ padding: 0, borderWidth: 0 }}>
              <ContentBox
                customStyles={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 0,
                  borderWidth: 0,
                }}
              >
                <SavingDetails
                  title={"Annualized Yield"}
                  detail={"8.99%"}
                  iconName={"brightness-percent"}
                />
                <SavingDetails
                  title={"Min. Investment"}
                  detail={"₦200,000"}
                  iconName={"cash-multiple"}
                />
              </ContentBox>
            </ContentBox>

            <ContentBox customStyles={{ padding: 0, borderWidth: 0 }}>
              <ContentBox
                customStyles={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 0,
                  borderWidth: 0,
                }}
              >
                <SavingDetails
                  title={"Min. Holding Period"}
                  detail={"90 Days"}
                  iconName="calendar-month"
                />
                <SavingDetails
                  title={"Penalty Rate"}
                  detail={"20%"}
                  iconName="gavel"
                />
              </ContentBox>
            </ContentBox>
          </ContentBox>

          <Formik
            validationSchema={validationSchema}
            initialValues={{ amount: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleSubmit }) => (
              <ContentBox customStyles={{ backgroundColor: Colors.white }}>
                <AppTextField
                  label={"Amount to invest"}
                  name={"amount"}
                  onChangeText={handleChange("amount")}
                />
                <AppButton
                  customStyles={{ marginTop: 20 }}
                  onPress={() => navigation.navigate("Confirm Investment")}
                >
                  Invest Now
                </AppButton>
              </ContentBox>
            )}
          </Formik>
        </View>
      </View>
    </LayeredScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default ProductDetails;
