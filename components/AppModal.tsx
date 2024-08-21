import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";

import { Colors } from "@/constants/Colors";

const AppModal = ({ isModalVisible }) => {
  return (
    <Modal visible={isModalVisible}>
      <TouchableOpacity style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.text}>
            The number *********10 has already been added to your account
          </Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    height: 300,
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  text: {
    fontSize: 16,
  },
});

export default AppModal;
