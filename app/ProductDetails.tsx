import { Image, StyleSheet, Text, View } from "react-native";

import Screen from "@/components/Screen";
import ContentBox from "@/components/ContentBox";
import { Colors } from "@/constants/Colors";
import AppTextField from "@/components/AppTextField";
import AppButton from "@/components/AppButton";
import LayeredScreen from "@/components/LayeredScreen";

const ProductDetails = () => {
  return (
    <LayeredScreen>
      <View style={{ backgroundColor: Colors.lightBg, flex: 1 }}>
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
              <Text style={{ color: Colors.lightPrimary, fontSize: 15 }}>
                Current Balance
              </Text>
            </View>
            <Text
              style={{
                color: Colors.primary,
                fontSize: 30,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              #32,000,000.00
            </Text>
          </ContentBox>

          <ContentBox
            customStyles={{
              borderColor: Colors.light,
              marginBottom: 20,
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text>Annualized Yield</Text>
                  <Text>8.99%</Text>
                </View>
                <View>
                  <Text>Annualized Yield</Text>
                  <Text>8.99%</Text>
                </View>
              </View>
            </View>
          </ContentBox>

          <ContentBox customStyles={{ backgroundColor: Colors.white }}>
            <AppTextField label={"Amount to invest"} />
            <AppButton text={"Invest now"} customStyles={{ marginTop: 20 }} />
          </ContentBox>
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
