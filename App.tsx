import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Register from "./app/Register";
import KYC_1 from "./app/KYC_1";
import KYC_2 from "./app/KYC_2";

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      {/* <Register /> */}
      <KYC_1 />
      {/* <KYC_2 /> */}
    </>
  );
};

export default App;
