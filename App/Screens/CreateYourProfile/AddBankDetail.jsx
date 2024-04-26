import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import Modal from "react-native-modal";
import GradientVarientOneBtn from "../../Components/GradientBtn/GradientVariantOneBtn";

const AddBankDetail = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.heading}>Add Bank Details</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: "100%" }]}
            placeholder="Account Holder's Name"
            keyboardType="default"
            placeholderTextColor={Colors.INPUT_PLACEHOLDER}
            autoCapitalize={"none"}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: "100%" }]}
            placeholder="Account Number"
            keyboardType="default"
            placeholderTextColor={Colors.INPUT_PLACEHOLDER}
            autoCapitalize={"none"}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: "100%" }]}
            placeholder="IFSC Number"
            keyboardType="numeric"
            placeholderTextColor={Colors.INPUT_PLACEHOLDER}
            autoCapitalize={"none"}
          />
        </View>
        <TextInput
          style={[styles.input, { width: "100%" }]}
          placeholder="Branch Name"
          keyboardType="default"
          placeholderTextColor={Colors.INPUT_PLACEHOLDER}
          autoCapitalize={"none"}
        />
        <Text style={styles.uploadText}>Upload Files</Text>
        <View style={styles.noteContainer}>
          <Text style={styles.note}>Support format: PDF, JPEG, PNG</Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>• Passbook</Text>
          <Text style={[styles.listItem, { paddingTop: 5 }]}>
            • 4 month pay slip
          </Text>
        </View>
        <View style={styles.dashedBorder}>
          <Feather name="upload-cloud" size={30} color="white" />
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
              Drag and Drop or
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  color: "rgba(56, 154, 244, 1)",
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
                onPress={toggleModal}
              >
                choose file
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                width: 380,
                height: 120,
                backgroundColor: "rgba(253, 253, 253, 1)",
                borderRadius: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 15,
                marginLeft: 5,
                marginRight: 5,
              }}
            >
              <View
                style={{
                  width: 80,
                  height: 60,
                  flexDirection: "column",
                  gap: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 10,
                    backgroundColor: "rgba(217, 217, 217, 1)",
                  }}
                >
                  <Feather name="upload" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 13 }}>File Manager</Text>
              </View>
              <View
                style={{
                  width: 80,
                  height: 60,
                  flexDirection: "column",
                  gap: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 10,
                    backgroundColor: "rgba(217, 217, 217, 1)",
                  }}
                >
                  <AntDesign name="picture" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 13 }}>Gallery</Text>
              </View>
              <View
                style={{
                  width: 80,
                  height: 60,
                  flexDirection: "column",
                  gap: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 10,
                    backgroundColor: "rgba(217, 217, 217, 1)",
                  }}
                >
                  <Feather name="file-plus" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 13 }}>Add Image</Text>
              </View>
              <View
                style={{
                  width: 80,
                  height: 60,
                  flexDirection: "column",
                  gap: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 10,
                    backgroundColor: "rgba(217, 217, 217, 1)",
                  }}
                >
                  <FontAwesome6 name="google-drive" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 13 }}>Drive</Text>
              </View>
            </View>
          </View>
        </Modal>
        {/* <GradientVarientOneBtn
          btnText={"Save & Next"}
          onPress={() => navigation.navigate("Addbankdetail")}
          style={styles.btn}
        /> */}
        <GradientVarientOneBtn btnText={"Save & Next"} style={styles.btn} />
      </ScrollView>
    </View>
  );
};

export default AddBankDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2E2E",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  input: {
    color: Colors.WHITE,
    width: "48%",
    height: 57,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    fontSize: 20,
    borderRadius: 10,
    marginBottom:"2%",
  },
  noteText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  uploadText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  noteContainer: {
    marginVertical: 20,
  },
  note: {
    fontSize: 15,
    color: "rgba(168, 168, 168, 1)",
    fontWeight: "bold",
  },
  listItem: {
    fontSize: 20,
    lineHeight: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  noteRed: {
    color: "#FF3E3E",
    fontSize: 15,
  },
  dashedBorder: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderStyle: "dashed",
    marginVertical: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  btn: {
    minWidth: "90%",
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 15,
    overflow: "hidden",
  },
});
