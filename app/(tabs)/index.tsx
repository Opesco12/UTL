import {
  Dimensions,
  Platform,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  View,
  StatusBar,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "@/constants/Colors";
import MediumBox from "@/components/MediumBox";
import StyledText from "@/components/StyledText";

const ScreenComponent = ({ children }) => {
  const statusBarHeight = StatusBar.currentHeight;
  return (
    <>
      <ExpoStatusBar style="dark" />
      {Platform.OS === "ios" ? (
        <SafeAreaView>
          <ScrollView>
            <Image
              source={require("../../assets/images/layer.png")}
              style={styles.layer}
            />
            <View style={styles.container}>{children}</View>
          </ScrollView>
        </SafeAreaView>
      ) : (
        Platform.OS === "android" && (
          <View style={[styles.container]}>
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              <Image
                source={require("../../assets/images/layer.png")}
                style={styles.layer}
              />
              {children}
            </ScrollView>
          </View>
        )
      )}
    </>
  );
};

const index = () => {
  const screenWidth = Dimensions.get("screen").width;
  return (
    <ScreenComponent>
      <View style={{ paddingHorizontal: 15 }}>
        <View
          style={{
            backgroundColor: Colors.white,
            height: 30,
            width: 30,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: 15,
            top: -155,
          }}
        >
          <Image source={require("../../assets/icons/notification.png")} />
        </View>
        <View style={{ zIndex: 5, position: "absolute", top: -100, left: 15 }}>
          <StyledText color={Colors.white} variant="bold" type="subheading">
            Hello, Temitope
          </StyledText>
        </View>

        <View
          style={[
            {
              backgroundColor: Colors.white,
              borderRadius: 15,
              elevation: 5,
              position: "absolute",
              top: -60,
              left: 15,
              height: 160,
              padding: 15,
            },
            { width: screenWidth - 30 },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <Image source={require("../../assets/icons/empty-wallet.png")} />
            <StyledText color={Colors.primary} type="title" variant="medium">
              Wallet Balance
            </StyledText>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 12,
            }}
          >
            <StyledText type="heading" variant="bold">
              ₦274,903.00
            </StyledText>
            <MaterialCommunityIcons
              name="eye-off-outline"
              size={25}
              color={Colors.light}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.light,
                borderRadius: 7,
                flexDirection: "row",
                padding: 5,
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                width: "45%",
              }}
            >
              <Image
                source={require("../../assets/icons/receive-square-2.png")}
              />
              <StyledText color={Colors.text} type="body" variant="medium">
                Deposit
              </StyledText>
            </View>

            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.light,
                borderRadius: 7,
                flexDirection: "row",
                padding: 5,
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                width: "45%",
              }}
            >
              <Image source={require("../../assets/icons/send-sqaure-2.png")} />
              <StyledText color={Colors.text} type="body" variant="medium">
                Withdraw
              </StyledText>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            borderWidth: 1,
            borderRadius: 12,
            borderColor: Colors.lightPrimary,
            marginTop: 120,
            marginVertical: 15,
            padding: 15,
          }}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <Image source={require("../../assets/icons/flash.png")} />
            <Text
              style={{
                color: Colors.lightPrimary,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Quick Access
            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "space-between",
            }}
          >
            <MediumBox
              iconSource={require("../../assets/icons/status-up.png")}
              title={"Invest Money"}
              subtitle={"Lorem ipsum is simply dummy text of the print"}
            />
            <MediumBox
              iconSource={require("../../assets/icons/status-up.png")}
              title={"Invest Money"}
              subtitle={"Lorem ipsum is simply dummy text of the print"}
            />
            <MediumBox
              iconSource={require("../../assets/icons/status-up.png")}
              title={"Invest Money"}
              subtitle={"Lorem ipsum is simply dummy text of the print"}
            />
            <MediumBox
              iconSource={require("../../assets/icons/status-up.png")}
              title={"Invest Money"}
              subtitle={"Lorem ipsum is simply dummy text of the print"}
            />
          </View>
        </View>

        <Image
          source={require("../../assets/images/banner.png")}
          style={{ width: "100%", height: 90, borderRadius: 12 }}
          // resizeMode="contain"
        />
      </View>
    </ScreenComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightBg,
    flex: 1,
    position: "relative",
  },
  layer: {
    backgroundColor: Colors.primary,
    height: 200,
    width: "100%",
  },
});

export default index;
