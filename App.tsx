import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

import Register from "./app/Register";
import KYC_1 from "./app/KYC_1";
import KYC_2 from "./app/KYC_2";
import Login from "./app/Login";
import Otp from "./app/OTP";
import Home from "./app/Home";
import Products from "./app/Products";
import ProductDetails from "./app/ProductDetails";
import ConfirmInvestment from "./app/ConfirmInvestment";
import Profile from "./app/Profile";
import PhoneNumber from "./app/PhoneNumber";
import { AddPhoneNumber, PhoneNumberVerification } from "./app/AddPhoneNumber";

// SplashScreen.preventAutoHideAsync();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);
  return (
    <>
      <StatusBar style="dark" />
      {/* <Register /> */}
      {/* <KYC_1 /> */}
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
      <PhoneNumberVerification />
    </>
  );
};

export default App;
