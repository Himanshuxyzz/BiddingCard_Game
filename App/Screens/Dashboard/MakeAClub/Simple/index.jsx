import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../../../Components/DashboardHeader/Header";
import WhiteText from "../../../../Components/WhiteText/WhiteText";
import { Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Story = ({ imgSrc, text }) => (
  <TouchableOpacity
    style={{
      width: 45,
      height: 45,
      backgroundColor: "#694242",
      borderRadius: 50,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {/* <Image style={{ width: "100%", height: "100%" }} source={require(imgSrc)} /> */}
    <WhiteText style={{ fontSize: 20, fontWeight: "600" }}>{text}</WhiteText>
  </TouchableOpacity>
);

const GradientTextnBorder = ({ btnText }) => {
  return (
    <LinearGradient
      colors={["#F9B60C", "#FAFAFA"]} // Reversed colors for the border
      start={{ x: 0, y: 0 }} // Start from the left
      end={{ x: 1, y: 0 }} // End at the right
      style={{
        borderRadius: 10,
        padding: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LinearGradient
        colors={["#F7DFA3", "#FFF7E4", "#F5F5F5"]}
        locations={[0, 0.58, 1]}
        start={{ x: 0, y: 0 }} // Start from the left
        end={{ x: 1, y: 0 }} // End at the right
        style={{
          borderRadius: 8,
          paddingHorizontal: 9,
          paddingVertical: 8,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "#B85E0B",
            fontWeight: "600",
          }}
        >
          {btnText}
        </Text>
      </LinearGradient>
    </LinearGradient>
  );
};

// Generate stoy data for FlatList
const data = new Array(10).fill().map((_, index) => ({
  key: index.toString(), // Unique key for each item
  text: (index + 1).toString(), // Text for each story
}));

const ProgressBar = ({ totalSlots, remainingSlots }) => {
  const filledPercentage = ((totalSlots - remainingSlots) / totalSlots) * 100;
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#FFC5C5",
        height: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "#FF0000",
          height: "100%",
          maxWidth: `${filledPercentage}%`,
        }}
      ></View>
    </View>
  );
};

// @TODO add property for card has notifications enabled or not also show it in frontend
const Card = ({
  cardId,
  amount,
  totalSlots,
  remainingSlots,
  month,
  bcAmount,
  isMute,
  setIsMute,
  cardBg,
  cardBgBorder,
  cardBottom,
  cardBottomBorder,
  isCardSelected,
  onPress,
  navigation,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: `${cardBg}`, borderColor: `${cardBgBorder}` },
        // pressed && { opacity: 0.8 },
        isCardSelected && { marginBottom: 35 },
      ]}
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <WhiteText style={{ color: "black", fontWeight: "600", fontSize: 15 }}>
          Start your BC
        </WhiteText>
        <WhiteText style={{ color: "black", fontWeight: "600", fontSize: 15 }}>
          ID: {cardId}
        </WhiteText>
        <GradientTextnBorder btnText={"Total BC Amount"} />
      </View>

      <View style={{ paddingHorizontal: 10, gap: 10 }}>
        <WhiteText style={{ color: "black", fontWeight: "600" }}>
          Person:
        </WhiteText>

        <ProgressBar totalSlots={totalSlots} remainingSlots={remainingSlots} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <WhiteText style={{ color: "#FF0000", fontWeight: "600" }}>
            left slots
          </WhiteText>
          <WhiteText style={{ color: "black", fontWeight: "600" }}>
            {month} months
          </WhiteText>
        </View>
      </View>

      <View
        style={{
          backgroundColor: `${cardBottom}`,
          borderColor: `${cardBottomBorder}`,
          borderTopWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        ></View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(46, 216, 19, 0.9)",
              borderRadius: 8,
              paddingHorizontal: 24,
              paddingVertical: 8,
            }}
            onPress={() =>
              navigation.navigate("CustomStartBc", {
                month: month,
              })
            }
            activeOpacity={0.5}
          >
            <WhiteText style={{ fontWeight: "600", color: "#fff" }}>
              Start
            </WhiteText>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsMute(!isMute)}>
            {!isMute ? (
              <Octicons name="bell" size={27} color="black" />
            ) : (
              <Octicons name="bell-slash" size={27} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};

const DATA = [
  {
    id: 1,
    cardId: 10001,
    bcAmount: "5 cr",
    totalSlots: 12,
    remainingSlots: 12,
    participatingAmount: "60 lacs",
    cardAccent: {
      cardBg: "rgba(255, 255, 255, 1)",
      cardBottom: "rgba(255, 255, 255, 1)",
      cardBgBorder: "#D97D13",
      cardBottomBorder: "#B1B1B1",
    },
    month: 12,
  },
  {
    id: 2,
    cardId: 10002,
    bcAmount: "2 cr",
    totalSlots: 20,
    remainingSlots: 20,
    participatingAmount: "10 lacs",
    cardAccent: {
      cardBg: "rgba(255, 255, 255, 1)",
      cardBottom: "rgba(255, 255, 255, 1)",
      cardBgBorder: "#D97D13",
      cardBottomBorder: "#B1B1B1",
    },
    month: 20,
  },
];

const CustomSimple = ({ navigation }) => {
  const [isMute, setIsMute] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCardPress = (cardId) => {
    if (selectedCardId === cardId) {
      setSelectedCardId(null); // Deselect if already selected
    } else {
      setSelectedCardId(cardId); // Select the card
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.subContainer}>
        {/* here i've added height explicitly in order to fix the issue with flatlist in which it does takes full height and push the below content outside the view */}
        <View style={{ height: 45 }}>
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Story text={item.text} />}
            keyExtractor={(item) => item.key}
            contentContainerStyle={styles.winnerStoriesContianer}
          />
        </View>

        {/* cards container */}

        <View style={styles.cardContainer}>
          <WhiteText style={{ fontSize: 25, fontWeight: "600" }}>
            Create your Auction card
          </WhiteText>

          {/* card list container */}
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Card
                cardId={item.cardId}
                amount={item.bcAmount}
                totalSlots={item.totalSlots}
                remainingSlots={item.remainingSlots}
                month={item.month}
                bcAmount={item.participatingAmount}
                cardBg={item.cardAccent.cardBg}
                cardBottom={item.cardAccent.cardBottom}
                cardBgBorder={item.cardAccent.cardBgBorder}
                isMute={isMute}
                setIsMute={setIsMute}
                isCardSelected={item.cardId === selectedCardId}
                onPress={() => handleCardPress(item.cardId)}
                navigation={navigation}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={[
              styles.cardWrapper,
              { height: DATA ? DATA.length * 300 : "auto" },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomSimple;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    backgroundColor: "#2A2E2E",
    padding: 20,
  },
  subContainer: {
    flex: 1,
    gap: 20,
    marginTop: 10,
  },
  monthSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  winnerStoriesContianer: {
    flexDirection: "row",
    gap: 20,
    overflow: "hidden",
  },
  cardContainer: {
    gap: 20,
  },
  cardWrapper: {
    paddingVertical: 40,
    gap: 10,
  },
  card: {
    borderWidth: 1,
    height: "auto",
    borderRadius: 10,
    overflow: "hidden",
    gap: 10,
    marginVertical: -35,
  },
});
