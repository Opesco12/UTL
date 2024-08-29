import { Image, StyleSheet, Text, View } from "react-native";
import {} from "iconsax-react-native";

import { Colors } from "@/constants/Colors";
import StyledText from "./StyledText";

const MediumBox = ({ title, subtitle, icon }) => {
  return (
    <View style={styles.container}>
      <View>
        {icon}
        <StyledText
          color={Colors.lightPrimary}
          type="subheading"
          variant="semibold"
        >
          {title}
        </StyledText>
        <StyledText
          color={Colors.lightPrimary}
          style={{ fontSize: 12, lineHeight: 12 }}
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
    padding: 20,
    width: "48%",
  },
});

export default MediumBox;
