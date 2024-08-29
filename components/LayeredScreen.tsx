import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import Screen from "./Screen";
import { Colors } from "@/constants/Colors";

const LayeredScreen = ({ children }) => {
  return (
    <>
      <Screen customStyles={{ paddingTop: 0, paddingHorizontal: 0 }}>
        <Image
          source={require("../assets/images/layer.png")}
          style={{ backgroundColor: Colors.primary, width: "100%" }}
        />

        {children}
      </Screen>
    </>
  );
};

export default LayeredScreen;
