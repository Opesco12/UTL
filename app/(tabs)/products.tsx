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
import { Header } from "@rneui/base";

import Screen from "@/components/Screen";
import { Colors } from "@/constants/Colors";
import FilterBox from "@/components/FilterBox";
import StyledText from "@/components/StyledText";
import Product from "@/components/Product";
import AppDivider from "@/components/AppDivider";

const Products = () => {
  const statusBarHeight = StatusBar.currentHeight;

  return (
    <Screen
      customStyles={{
        paddingTop: 0,
        paddingHorizontal: 0,
        backgroundColor: Colors.lightBg,
      }}
    >
      <Header
        centerComponent={
          <StyledText
            type="subheading"
            variant="bold"
            style={{ paddingTop: 5 }}
          >
            Investment Products
          </StyledText>
        }
        backgroundColor={Colors.white}
        containerStyle={{ elevation: 5 }}
        statusBarProps={{
          translucent: true,
          barStyle: "light-content",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />
      <View style={{ padding: 15 }}>
        <StyledText type="label" variant="medium" color={Colors.primary}>
          Filter by Risk Level
        </StyledText>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ marginVertical: 20 }}
        >
          <View style={{ flexDirection: "row", gap: 15 }}>
            <FilterBox text={"All"} />
            <FilterBox text={"Measured"} />
            <FilterBox text={"Deliberate"} />
            <FilterBox text={"Ambitious"} />
          </View>
        </ScrollView>

        <View
          style={{
            padding: 10,
            backgroundColor: Colors.white,
            borderRadius: 12,
          }}
        >
          <Product />
          <AppDivider />
          <Product />
          <AppDivider />
          <Product />
          <AppDivider />
          <Product />
          <AppDivider />
          <Product />
          <AppDivider />
          <Product />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default Products;
