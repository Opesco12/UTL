import { StyleSheet, Text, View } from "react-native";
import {
  AntDesign,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { Colors } from "@/constants/Colors";
import StyledText from "./StyledText";

const Product = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          backgroundColor: Colors.secondary,
          borderRadius: 7,
          height: 24,
          justifyContent: "center",
          width: 24,
        }}
      >
        <MaterialCommunityIcons
          name="trending-up"
          color={Colors.white}
          size={17}
        />
      </View>
      <View style={{ flex: 1, gap: 20 }}>
        <StyledText type="title" variant="semibold" color={Colors.primary}>
          UTLAM Target Savings
        </StyledText>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
            <FontAwesome6 name="money-bills" size={14} color={Colors.primary} />
            <StyledText color={Colors.light} type="label" variant="regular">
              From{" "}
              <StyledText color={Colors.light} type="label" variant="medium">
                ₦5,000
              </StyledText>
            </StyledText>
          </View>
          <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
            <MaterialCommunityIcons
              name={"calendar-range"}
              size={14}
              color={Colors.primary}
            />
            <StyledText color={Colors.light} type="label" variant="regular">
              For at least
              <StyledText color={Colors.light} type="label" variant="medium">
                30 days
              </StyledText>
            </StyledText>
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          backgroundColor: Colors.lightPrimary,
          borderRadius: 15,
          height: 30,
          justifyContent: "center",
          width: 30,
        }}
      >
        <AntDesign name="arrowright" color={Colors.white} size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.white,
    flex: 1,
    gap: 20,
    flexDirection: "row",
    width: "100%",
  },
});

export default Product;
