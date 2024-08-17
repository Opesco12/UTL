import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";

import Screen from "@/components/Screen";
import { Colors } from "@/constants/Colors";
import FilterBox from "@/components/FilterBox";

const Products = () => {
  const statusBarHeight = StatusBar.currentHeight;

  return (
    <Screen customStyles={{ paddingTop: 0, paddingHorizontal: 0 }}>
      <View
        style={{
          backgroundColor: Colors.white,
          paddingBottom: 20,
          paddingTop: statusBarHeight && statusBarHeight + 20,
        }}
      >
        <Text
          style={{
            color: Colors.text,
            fontSize: 20,
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Investment Products
        </Text>
      </View>
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 12, color: Colors.primary }}>
          Filter by Risk Level
        </Text>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ marginVertical: 20 }}
        >
          <View style={{ flexDirection: "row", gap: 15 }}>
            <FilterBox text={"All"} />
            <FilterBox text={"Measured"} />
            <FilterBox text={"Delberate"} />
            <FilterBox text={"Ambitious"} />
          </View>
        </ScrollView>

        <View
          style={{
            padding: 20,
            backgroundColor: Colors.white,
            borderRadius: 12,
          }}
        >
          <View
            style={{
              alignItems: "center",
              backgroundColor: Colors.white,
              flex: 1,
              gap: 20,
              flexDirection: "row",
              width: "100%",
            }}
          >
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
              <Text
                style={{
                  fontSize: 17,
                  color: Colors.primary,
                  fontWeight: "600",
                }}
              >
                UTLAM Target Savings
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
                >
                  <FontAwesome6
                    name="money-bills"
                    size={14}
                    color={Colors.primary}
                  />
                  <Text style={{ fontSize: 14, color: Colors.light }}>
                    From <Text style={{ fontWeight: "600" }}>#5,000</Text>
                  </Text>
                </View>
                <View
                  style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
                >
                  <MaterialCommunityIcons
                    name={"calendar-range"}
                    size={14}
                    color={Colors.primary}
                  />
                  <Text style={{ fontSize: 14, color: Colors.light }}>
                    For at least{" "}
                    <Text style={{ fontWeight: "600" }}>30 Days</Text>
                  </Text>
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
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default Products;
