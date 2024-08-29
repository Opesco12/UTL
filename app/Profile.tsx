import { Image, StyleSheet, SectionList, Text, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Screen from "@/components/Screen";
import AppHeader from "@/components/AppHeader";
import { Colors } from "@/constants/Colors";
import AppLargeText from "@/components/AppLargeText";
import StyledText from "@/components/StyledText";
import AppListItem from "@/components/AppListItem";

const Profile = () => {
  const navigation = useNavigation();
  const [hideBalance, setHideBalance] = useState(false);
  const [usePin, setUsePin] = useState(false);
  return (
    <Screen>
      <AppHeader />
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginVertical: 20 }}>
          <StyledText type="heading" variant="semibold">
            Profile
          </StyledText>
          <StyledText color={Colors.light} type="body" variant="medium">
            Evelyn Makinwa
          </StyledText>
        </View>
        <Image
          source={require("../assets/images/layer.png")}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
      </View>

      <View>
        <StyledText type="subheading" variant="semibold">
          Account
        </StyledText>
        <View>
          <AppListItem text={"Phone Number"} />
          <AppListItem text={"Notification Settings"} />
          <AppListItem text={"Appearance"} />
          <AppListItem
            text={"Hide Balances"}
            switchable={true}
            value={hideBalance}
            setValue={() => setHideBalance(!hideBalance)}
          />
        </View>

        <StyledText
          type="subheading"
          variant="semibold"
          style={{ marginTop: 20 }}
        >
          Security
        </StyledText>
        <View>
          <AppListItem
            text={"Require PIN / Face ID"}
            switchable={true}
            value={usePin}
            setValue={() => setUsePin(!usePin)}
          />
          <AppListItem
            text={"PIN / Face ID Settings"}
            onPress={() => navigation.navigate("Pin Settings")}
          />
          <AppListItem text={"Lock My Account"} />
          <AppListItem text={"Change Security Settings"} />
          <AppListItem text={"Support"} />
        </View>
      </View>

      <StyledText
        style={{ textAlign: "center", paddingVertical: 10 }}
        type="subheading"
        variant="semibold"
        color={Colors.error}
      >
        Sign Out
      </StyledText>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

export default Profile;
