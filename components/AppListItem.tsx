import { StyleSheet, Text, View } from "react-native";
import { Switch } from "@rneui/base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "@/constants/Colors";
import StyledText from "./StyledText";

const AppListItem = ({ text, switchable, value, setValue }) => {
  return (
    <View style={styles.listItem}>
      <StyledText type="title" variant="medium">
        {text}
      </StyledText>
      {switchable ? (
        <Switch value={value} onValueChange={setValue} style={{ height: 30 }} />
      ) : (
        <MaterialCommunityIcons name="chevron-right" size={25} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.light,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
});

export default AppListItem;
