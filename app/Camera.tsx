import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import {
  CameraView,
  CameraType,
  useCameraPermissions,
  Camera,
} from "expo-camera";
import { Colors } from "@/constants/Colors";

const CameraScreen = () => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    const requestCameraAccess = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      requestPermission(status === "granted");
    };
    requestCameraAccess();
  }, [requestPermission]);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    Alert.alert(
      "Camera permission Required",
      "Camera permission is required to take a photo. Please grant permission in your device settings.",
      [
        { text: "Cancel", onPress: () => console.log("Cancelled") },
        {
          text: "Open Settings",
          onPress: () => {
            Linking.openSettings();
          },
        },
      ]
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "75%" }}>
        <CameraView style={{ flex: 1 }} />
      </View>
      <TouchableOpacity
        style={{
          height: 80,
          width: 80,
          alignSelf: "center",
          bottom: 50,
          position: "absolute",
          backgroundColor: Colors.white,
          borderRadius: 40,
        }}
      ></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CameraScreen;
