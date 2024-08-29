import { Image, StyleSheet, Text, View } from "react-native";
import { Switch } from "@rneui/base";
import { useState } from "react";

import LayeredScreen from "@/components/LayeredScreen";
import ContentBox from "@/components/ContentBox";
import AppDivider from "@/components/AppDivider";
import { Colors } from "@/constants/Colors";
import AppButton from "@/components/AppButton";
import StyledText from "@/components/StyledText";

const ConfirmInvestment = () => {
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  return (
    <LayeredScreen customStyles={{ paddingHorizontal: 0 }}>
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            top: -40,
          }}
        >
          <StyledText type="subheading" variant="semibold" color={Colors.white}>
            UTLAM Target Savings
          </StyledText>
        </View>

        <ContentBox
          customStyles={{
            borderWidth: 0,
            backgroundColor: Colors.white,
            elelvation: 2,
          }}
        >
          <StyledText color={Colors.primary} type="title" variant="semibold">
            Confirm Investment
          </StyledText>

          <ContentBox customStyles={{ marginVertical: 20 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <StyledText color={Colors.light} type="body" variant="regular">
                Amount
              </StyledText>
              <Text
                style={{
                  color: Colors.primary,
                  fontWeight: "600",
                  fontSize: 22,
                }}
              >
                ₦500,000
              </Text>
            </View>
            <AppDivider />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <StyledText color={Colors.light} type="body" variant="regular">
                Management Fee(2%)
              </StyledText>
              <Text
                style={{
                  color: Colors.primary,
                  fontWeight: "600",
                  fontSize: 22,
                }}
              >
                ₦10,000
              </Text>
            </View>

            <AppDivider />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <StyledText color={Colors.light} type="body" variant="regular">
                Total Due
              </StyledText>
              <Text
                style={{
                  color: Colors.primary,
                  fontWeight: "600",
                  fontSize: 22,
                }}
              >
                ₦510,000
              </Text>
            </View>
          </ContentBox>

          <StyledText color={Colors.light} type="body" variant="medium">
            Redemptions during the Lock-up Period will attract a 20% penalty on
            accrued returns eaned over the period.
          </StyledText>

          <StyledText color={Colors.light} type="body" variant="medium">
            By tapping on the "Make Payment" button, you agree to have the Total
            Due deducted from your Wallet Balannce to create this investment
            plan.
          </StyledText>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Switch
              value={agreeToTerms}
              onValueChange={() => setAgreeToTerms(!agreeToTerms)}
            />
            <StyledText type="body" variant="medium" color={Colors.light}>
              Yes, I agree to the terms above
            </StyledText>
          </View>
          <AppButton disabled={!agreeToTerms} customStyles={{ marginTop: 20 }}>
            Make Payment
          </AppButton>
        </ContentBox>
      </View>
    </LayeredScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightBg,
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default ConfirmInvestment;
