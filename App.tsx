import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import Register from "./app/Register";
import KYC_1 from "./app/KYC_1";
import KYC_2 from "./app/KYC_2";
import Login from "./app/Login";
import Otp from "./app/OTP";
import Home from "./app/(tabs)";
import Products from "./app/(tabs)/Products";
import ProductDetails from "./app/ProductDetails";
import ConfirmInvestment from "./app/ConfirmInvestment";
import Profile from "./app/Profile";
import PhoneNumber from "./app/PhoneNumber";
import { AddPhoneNumber, PhoneNumberVerification } from "./app/AddPhoneNumber";
import FaceIdSetting from "./app/FaceIdSetting";
import Onboarding from "./app/Onboarding";
import CameraScreen from "./app/Camera";

SplashScreen.preventAutoHideAsync();

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
      <StatusBar style="dark" />
      {/* <Register /> */}
      <KYC_1 />
      {/* <KYC_2 /> */}
      {/* <Login /> */}
      {/* <Otp /> */}
      {/* <Home /> */}
      {/* <Products /> */}
      {/* <ProductDetails /> */}
      {/* <ConfirmInvestment /> */}
      {/* <Profile /> */}
      {/* <PhoneNumber /> */}
      {/* <AddPhoneNumber /> */}
      {/* <PhoneNumberVerification /> */}
      {/* <FaceIdSetting /> */}
      {/* <Onboarding /> */}
      {/* <CameraScreen /> */}
    </>
  );
};

export default App;
