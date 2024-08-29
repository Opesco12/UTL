import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Home3, ChartSquare, Briefcase, User } from "iconsax-react-native";

import StyledText from "./components/StyledText";

import Register from "./app/Register";
import KYC_1 from "./app/KYC_1";
import KYC_2 from "./app/KYC_2";
import Login from "./app/Login";
import Otp from "./app/OTP";
import Home from "./app/(tabs)/Home";
import Products from "./app/(tabs)/products";
import ProductDetails from "./app/ProductDetails";
import ConfirmInvestment from "./app/ConfirmInvestment";
import Profile from "./app/Profile";
import PhoneNumber from "./app/PhoneNumber";
import { AddPhoneNumber, PhoneNumberVerification } from "./app/AddPhoneNumber";
import FaceIdSetting from "./app/FaceIdSetting";
import Onboarding from "./app/Onboarding";
import CameraScreen from "./app/Camera";
import { Colors } from "./constants/Colors";
import Portfolio from "./app/(tabs)/portfolio";

SplashScreen.preventAutoHideAsync();

const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={BottomNavigator} name="Tabs" />
        <Stack.Screen component={FaceIdSetting} name="Pin Settings" />
        <Stack.Screen component={ProductDetails} name="Product Details" />
        <Stack.Screen component={ConfirmInvestment} name="Confirm Investment" />
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Register} name="Register" />
        <Stack.Screen component={Otp} name="Otp" />
        <Stack.Screen component={KYC_1} name="KYC_1" />
        <Stack.Screen component={KYC_2} name="KYC_2" />
      </Stack.Navigator>
    </>
  );
};

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          // tabBarStyle: { paddingTop: 15, paddingBottom: 15 },
        }}
      >
        <Tab.Screen
          component={Home}
          name="Home"
          options={{
            tabBarLabel: ({ focused, color }) => (
              <StyledText
                variant={focused ? "medium" : "regular"}
                type="label"
                color={Colors.primary}
              >
                Home
              </StyledText>
            ),
            tabBarIcon: ({ size, color, focused }) => (
              <Home3
                size={size}
                color={focused ? Colors.lightPrimary : Colors.light}
                variant="Bold"
              />
            ),
          }}
        />
        <Tab.Screen
          component={Products}
          name="Products"
          options={{
            tabBarLabel: ({ focused, color }) => (
              <StyledText
                variant={focused ? "medium" : "regular"}
                type="label"
                color={Colors.primary}
              >
                Invest
              </StyledText>
            ),
            tabBarIcon: ({ color, size, focused }) => (
              <ChartSquare
                color={focused ? Colors.lightPrimary : Colors.light}
                size={size}
                variant="Bold"
              />
            ),
          }}
        />

        <Tab.Screen
          component={Portfolio}
          name="portfolio"
          options={{
            tabBarLabel: ({ focused, color }) => (
              <StyledText
                variant={focused ? "semibold" : "regular"}
                type="label"
                color={Colors.primary}
              >
                Portfolio
              </StyledText>
            ),
            tabBarIcon: ({ color, size, focused }) => (
              <Briefcase
                color={focused ? Colors.lightPrimary : Colors.light}
                size={size}
                variant="Bold"
              />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: ({ focused, color }) => (
              <StyledText
                variant={focused ? "medium" : "regular"}
                type="label"
                color={Colors.primary}
              >
                Profile
              </StyledText>
            ),
            tabBarIcon: ({ color, size, focused }) => (
              <User
                color={focused ? Colors.lightPrimary : Colors.light}
                size={size}
                variant="Bold"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const App = () => {
  const [loaded] = useFonts({
    SpaceMono: require("./assets/fonts/SpaceMono-Regular.ttf"),
    IBMRegular: require("./assets/fonts/IBMPlexSans-Regular.ttf"),
    IBMMedium: require("./assets/fonts/IBMPlexSans-Medium.ttf"),
    IBMBold: require("./assets/fonts/IBMPlexSans-Bold.ttf"),
    IBMSemibold: require("./assets/fonts/IBMPlexSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <>
      {/* <StatusBar style="dark" /> */}
      {/* <Register /> */}
      {/* <KYC_1 /> */}
      {/* <KYC_2 /> */}
      {/* <Login /> */}
      {/* <Otp /> */}
      {/* <Home /> */}
      {/* <Products /> */}
      {/* <ProductDetails /> */}
      {/* <ConfirmInvestment /> */}
      {/* <FaceIdSetting /> */}
      {/* <Profile /> */}
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;

{
  /* <PhoneNumberVerification /> */
}
{
  /* <Onboarding /> */
}
{
  /* <PhoneNumber /> */
}
{
  /* <AddPhoneNumber /> */
}
