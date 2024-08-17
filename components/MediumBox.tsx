import { Image, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/Colors";

const MediumBox = ({ title, subtitle, iconSource }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={iconSource} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: Colors.lightPrimary,
          }}
        >
          {title}
        </Text>
        <Text style={{ fontSize: 12, color: Colors.lightPrimary }}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    minHeight: 90,
    padding: 10,
    width: "48%",
  },
});

export default MediumBox;
