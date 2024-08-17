import { Image, StyleSheet, Text, View } from "react-native";

import Screen from "@/components/Screen";
import AppHeader from "@/components/AppHeader";
import { Colors } from "@/constants/Colors";
import AppLargeText from "@/components/AppLargeText";

const Profile = () => {
  return (
    <Screen customStyles={{ backgroundColor: Colors.white }}>
      <AppHeader />
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <AppLargeText text={"Profile"} />
          <Text style={{ fontSize: 15, color: Colors.light }}>
            Evelyn Makinwa
          </Text>
        </View>
        <Image
          source={require("../assets/images/layer.png")}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default Profile;
