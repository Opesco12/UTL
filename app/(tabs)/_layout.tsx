import { Tabs } from "expo-router";
import { Text } from "react-native";
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { Colors } from "@/constants/Colors";
import StyledText from "@/components/StyledText";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: Colors.white },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ focused, color }) => (
            <StyledText
              variant={focused ? "medium" : "regular"}
              type="label"
              color={Colors.Primary}
            >
              Home
            </StyledText>
          ),
          tabBarIcon: ({ size, color, focused }) => (
            <AntDesign
              name="home"
              size={size}
              color={focused ? Colors.lightPrimary : Colors.light}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          tabBarLabel: ({ focused, color }) => (
            <StyledText
              variant={focused ? "medium" : "regular"}
              type="label"
              color={Colors.Primary}
            >
              Invest
            </StyledText>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name="insert-chart"
              color={focused ? Colors.lightPrimary : Colors.light}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          tabBarLabel: ({ focused, color }) => (
            <StyledText
              variant={focused ? "semibold" : "regular"}
              type="label"
              color={Colors.primary}
            >
              Portfolio
            </StyledText>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="briefcase-variant"
              color={focused ? Colors.lightPrimary : Colors.light}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
