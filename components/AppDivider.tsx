import { StyleSheet, View } from "react-native";

import { Colors } from "@/constants/Colors";

const AppDivider = () => {
  return <View style={styles.divider}></View>;
};

const styles = StyleSheet.create({
  divider: {
    borderTopWidth: 1,
    borderColor: Colors.light,
    marginVertical: 10,
    width: "100%",
  },
});

export default AppDivider;
