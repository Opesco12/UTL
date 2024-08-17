import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="chevron-left" size={35} />

      <Image source={require("../assets/images/logo.png")} />

      <MaterialCommunityIcons
        name="chevron-left"
        size={35}
        style={{ opacity: 0 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
});

export default AppHeader;
