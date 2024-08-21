import { Image, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/Colors";
import StyledText from "./StyledText";

const MediumBox = ({ title, subtitle, iconSource }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={iconSource} />
        <StyledText color={Colors.lightPrimary} type="body" variant="semibold">
          {title}
        </StyledText>
        <StyledText
          color={Colors.lightPrimary}
          style={{ fontSize: 12 }}
          variant="regular"
        >
          {subtitle}
        </StyledText>
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
