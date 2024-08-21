import { Image, StyleSheet, Text, View } from "react-native";
import { Switch } from "@rneui/base";

import LayeredScreen from "@/components/LayeredScreen";
import ContentBox from "@/components/ContentBox";
import AppDivider from "@/components/AppDivider";
import { Colors } from "@/constants/Colors";
import AppButton from "@/components/AppButton";

const ConfirmInvestment = () => {
  return (
    <LayeredScreen customStyles={{ paddingHorizontal: 0 }}>
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            top: -40,
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            UTLAM Target Savings
          </Text>
        </View>

        <ContentBox
          customStyles={{
            borderWidth: 0,
            backgroundColor: Colors.white,
            elelvation: 2,
          }}
        >
          <Text
            style={{
              color: Colors.primary,
              fontSize: 16,
              fontWeight: "500",
              marginBottom: 10,
            }}
          >
            Confirm Investment
          </Text>
          <ContentBox customStyles={{}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: Colors.light, fontSize: 15 }}>Amount</Text>
              <Text
                style={{
                  color: Colors.primary,
                  fontWeight: "600",
                  fontSize: 22,
                }}
              >
                #500,000
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
              <Text style={{ color: Colors.light, fontSize: 15 }}>
                Management Fee(2%)
              </Text>
              <Text
                style={{
                  color: Colors.primary,
                  fontWeight: "600",
                  fontSize: 22,
                }}
              >
                #500,000
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
              <Text style={{ color: Colors.light, fontSize: 15 }}>
                Total Due
              </Text>
              <Text
                style={{
                  color: Colors.primary,
                  fontWeight: "600",
                  fontSize: 22,
                }}
              >
                #500,000
              </Text>
            </View>
          </ContentBox>

          <Text
            style={{ color: Colors.light, fontSize: 15, marginVertical: 20 }}
          >
            Redemptions during the Lock-up Period will attract a 20% penalty on
            accrued returns eaned over the period.
          </Text>

          <Text style={{ color: Colors.light, fontSize: 15 }}>
            By tapping on the "Make Payment" button, you agree to have the Total
            Due deducted from your Wallet Balannce to create this investment
            plan.
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Switch />
            <Text style={{ fontSize: 15, color: Colors.light }}>
              Yes, I agree to the terms above
            </Text>
          </View>
          <AppButton
            text={"Make Payment"}
            disabled={true}
            customStyles={{ marginTop: 10 }}
          />
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
