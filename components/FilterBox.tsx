import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/Colors";
import StyledText from "./StyledText";

const FilterBox = ({ text }) => {
  return (
    <View style={styles.container}>
      <StyledText type="body" variant="medium" color={Colors.lightPrimary}>
        {text}
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.lightPrimary,
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  text: { fontSize: 15, color: Colors.lightPrimary },
});

export default FilterBox;
