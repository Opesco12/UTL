import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import AppLargeText from "@/components/AppLargeText";
import AppHeader from "@/components/AppHeader";
import Screen from "@/components/Screen";
import { Colors } from "@/constants/Colors";
import StyledText from "@/components/StyledText";
import AppListItem from "@/components/AppListItem";

const FaceIdSetting = () => {
  const [requireFaceID, setRequireFaceID] = useState(false);
  const [useFaceID, setUseFaceID] = useState(false);
  return (
    <Screen>
      <AppHeader />
      <StyledText
        type="heading"
        variant="semibold"
        style={{ marginVertical: 30 }}
      >
        PIN / Face ID Settings
      </StyledText>

      <View>
        <AppListItem
          text={"Require to open app"}
          switchable={true}
          value={requireFaceID}
          setValue={() => setRequireFaceID(!requireFaceID)}
        />
        <AppListItem
          text={"Use Face ID"}
          switchable={true}
          value={useFaceID}
          setValue={() => setUseFaceID(!useFaceID)}
        />
      </View>

      <View style={styles.container}></View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default FaceIdSetting;
