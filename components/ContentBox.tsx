import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/Colors";

const ContentBox = ({ children, customStyles }) => {
  return <View style={[styles.container, customStyles]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.lightPrimary,
  },
});

export default ContentBox;
