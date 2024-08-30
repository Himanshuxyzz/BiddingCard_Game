import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Modal from "react-native-modal";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import GradientVarientOneBtn from "../../Components/Gradient/GradientVariantOneBtn";
import WhiteText from "../../Components/WhiteText/WhiteText";

const CreateUrProfile = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // State to store the selected date
  const [fileSelected, setFileSelected] = useState(null);

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aadhar, setAadhar] = useState("");

  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [aadharError, setAadharError] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
    setSelectedDate(date); // Store the selected date in state
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Invalid phone number");
    } else {
      setPhoneError("");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const validateAadhar = (aadhar) => {
    const aadharRegex = /^\d{12}$/;
    if (!aadharRegex.test(aadhar)) {
      setAadharError("Invalid Aadhaar number");
    } else {
      setAadharError("");
    }
  };

  const pickSomething = async () => {
    try {
      const docRes = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        multiple: true,
      });
      console.log(docRes);
      setFileSelected(docRes.assets);
      setModalVisible(false);
    } catch (error) {
      console.log("Error while selecting file: ", error);
    }
  };

  const pickImageOnly = async () => {
    try {
      const docRes = await DocumentPicker.getDocumentAsync({
        type: "image/*",
      });
      setFileSelected(docRes && docRes?.assets);
      setModalVisible(false);
    } catch (error) {
      console.log("Error while selecting file: ", error);
    }
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setModalVisible(false);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(result);
      setFileSelected(result.assets);
    }
  };

  const handleClear = (index) => {
    setFileSelected((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const formatDate = (date) => {
    if (date != null) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      let finalDate = `${day}-${month}-${year}`;
      return finalDate;
    }
    return;
  };

  const handleSaveAndNext = () => {
    validatePhone(phone);
    validateEmail(email);
    validatePassword(password);
    validateAadhar(aadhar);

    if (!phoneError && !emailError && !passwordError && !aadharError) {
      navigation.navigate("Addbankdetail");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.heading}>Create your profile</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor={Colors.INPUT_PLACEHOLDER}
            autoCapitalize={"none"}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor={Colors.INPUT_PLACEHOLDER}
            autoCapitalize={"none"}
          />
        </View>
        <Text style={styles.noteText}>
          * (Please fill Mention as Aadhar card)
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { position: "relative" }]}
            placeholder="D.O.B"
            placeholderTextColor={Colors.INPUT_PLACEHOLDER}
            autoCapitalize={"none"}
            value={formatDate(selectedDate)}
          />
          <TouchableOpacity
            style={{ position: "absolute", top: 15, left: 140 }}
            onPress={showDatePicker}
          >
            <Feather name="calendar" size={25} color="rgba(177, 177, 177, 1)" />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <TextInput
            style={styles.input}
            placeholder="Phone no."
            keyboardType="phone-pad"
            placeholderTextColor={Colors.INPUT_PLACEHOLDER}
            autoCapitalize={"none"}
            value={phone}
            onChangeText={(text) => {
              setPhone(text);
              validatePhone(text);
            }}
          />
        </View>
        {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor={Colors.INPUT_PLACEHOLDER}
            autoCapitalize={"none"}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              validateEmail(text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={Colors.INPUT_PLACEHOLDER}
            autoCapitalize={"none"}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              validatePassword(text);
            }}
          />
        </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
        <TextInput
          style={[styles.input, { width: "100%" }]}
          placeholder="Aadhar Number"
          keyboardType="numeric"
          placeholderTextColor={Colors.INPUT_PLACEHOLDER}
          autoCapitalize={"none"}
          value={aadhar}
          onChangeText={(text) => {
            setAadhar(text);
            validateAadhar(text);
          }}
        />
        {aadharError ? (
          <Text style={styles.errorText}>{aadharError}</Text>
        ) : null}
        <Text style={styles.uploadText}>Upload Files</Text>
        <View style={styles.noteContainer}>
          <Text style={styles.note}>Note:</Text>
          <Text style={styles.note}>Support format: PDF, JPEG, PNG</Text>
          <Text style={styles.note}>Image size: 20Kb to 700Kb</Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>•  Aadhar Card Front and Back</Text>
          <Text style={styles.listItem}>• Passport Size Photo</Text>
          <Text style={styles.noteRed}>
            *(Once you upload any image it can not be changed)
          </Text>
          <Text style={[styles.listItem, { paddingTop: 5 }]}>
            • Signature image
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
                  onPress={pickSomething}
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
                  onPress={pickImage}
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
                  onPress={pickImageOnly}
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
                  onPress={pickSomething}
                >
                  <FontAwesome6 name="google-drive" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 13 }}>Drive</Text>
              </View>
            </View>
          </View>
        </Modal>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 20,
            justifyContent: "center",
          }}
        >
          {fileSelected !== null &&
            fileSelected !== undefined &&
            fileSelected?.map((data, index) => {
              const uri = data?.uri;
              const file_Name = uri?.substring(uri?.lastIndexOf("/") + 1);
              return (
                <View key={index} style={styles.fileItem}>
                  <WhiteText style={styles.fileName}>
                    {data?.name !== undefined ? data?.name : file_Name}
                  </WhiteText>
                  <TouchableOpacity onPress={() => handleClear(index)}>
                    <FontAwesome name="close" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              );
            })}
        </View>

        <GradientVarientOneBtn
          btnText={"Save & Next"}
          onPress={handleSaveAndNext}
          style={styles.btn}
        />
      </ScrollView>
    </View>
  );
};

export default CreateUrProfile;

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
    marginBottom: 10,
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
    height: 120,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderStyle: "dashed",
    marginVertical: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 70,
    height: 70,
  },
  btn: {
    minWidth: "90%",
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 15,
    overflow: "hidden",
  },
  fileItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.INPUT_BACKGROUND,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
});
