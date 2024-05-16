import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const UserEntries = () => {
  const users = [
    {
      id: 1,
      name: "User1",
      img: "../../../../../assets/Images/usericon.png",
    },
    {
      id: 2,
      name: "User2",
      img: "../../../../../assets/Images/usericon.png",
    },
    {
      id: 3,
      name: "User3",
      img: "../../../../../assets/Images/usericon.png",
    },
    {
      id: 4,
      name: "User4",
      img: "../../../../../assets/Images/usericon.png",
    },
    {
      id: 5,
      name: "User5",
      img: "../../../../../assets/Images/usericon.png",
    },
    {
      id: 6,
      name: "User6",
      img: "../../../../../assets/Images/usericon.png",
    },
    {
      id: 7,
      name: "User7",
      img: "../../../../../assets/Images/usericon.png",
    },
    {
      id: 8,
      name: "User8",
      img: "../../../../../assets/Images/usericon.png",
    },
    {
      id: 9,
      name: "User9",
      img: "../../../../../assets/Images/usericon.png",
    },
    {
      id: 10,
      name: "User10",
      img: "../../../../../assets/Images/usericon.png",
    },
    {
      id: 11,
      name: "User11",
      img: "../../../../../assets/Images/usericon.png",
    },
    {
      id: 12,
      name: "User12",
      img: "../../../../../assets/Images/usericon.png",
    },
  ];
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#fff",
          fontSize: 27,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Entries(10)
      </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                borderRadius: "50%",
                padding: 2,
                backgroundColor: "rgba(255, 252, 255, 0.20)",
              }}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../../../../assets/Images/usericon.png")}
              />
            </View>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
        //   renderItem={({item})=><Text style={styles.item} >{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default UserEntries;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A2E2E",
    flex: 1,
    // alignItems: "center",
    flexDirection: "column",
    gap: 20,
    padding: 20,
  },
  item: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    color: "#fff",
    marginHorizontal: "6%",
  },
});
