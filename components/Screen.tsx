import {
  Platform,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Colors } from "@/constants/Colors";

const Screen = ({ children, customStyles }) => {
  const statusBarHeight = StatusBar.currentHeight;
  return (
    <>
      {Platform.OS === "ios" ? (
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>{children}</View>
          </ScrollView>
        </SafeAreaView>
      ) : (
        Platform.OS === "android" && (
          <View
            style={[
              styles.container,
              { paddingTop: statusBarHeight },
              customStyles,
            ]}
          >
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              <View style={{ flex: 1, paddingHorizontal: 15 }}>{children}</View>
            </ScrollView>
          </View>
        )
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightBg,
    flex: 1,
  },
});

export default Screen;
