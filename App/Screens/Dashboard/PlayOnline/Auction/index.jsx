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
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import GradientVarientOneBtn from "../../../../Components/Gradient/GradientVariantOneBtn";

// month selector button

const SelectorBtn = ({ value, selected, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <WhiteText
      style={{
        fontSize: 20,
        fontWeight: "600",
        paddingHorizontal: "12%",
        paddingVertical: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "rgba(217,217,217,0.8)",
        overflow: "hidden",
        backgroundColor:
          selected === value ? "rgba(217,217,217,0.8)" : "transparent",
      }}
    >
      {value}
    </WhiteText>
  </TouchableOpacity>
);

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
          Amount ₹{btnText}
        </Text>
      </LinearGradient>
    </LinearGradient>
  );
};

// Generate data for FlatList
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
        <GradientTextnBorder btnText={amount} />
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
            {remainingSlots} Slots left
          </WhiteText>
          <WhiteText style={{ color: "black", fontWeight: "600" }}>
            {totalSlots} slots
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
        >
          <Feather name="arrow-left" size={24} color={cardBgBorder} />
          <WhiteText style={{ color: cardBg, fontWeight: "600", fontSize: 15 }}>
            ₹{bcAmount}
          </WhiteText>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: cardBg,
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 24,
              paddingVertical: 8,
            }}
            onPress={() =>
              navigation.navigate("Startbc", {
                bcAmount: bcAmount,
                totalAmount: amount,
              })
            }
            activeOpacity={0.5}
          >
            <WhiteText style={{ fontWeight: "600", color: "black" }}>
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
    remainingSlots: 3,
    participatingAmount: "60 lacs",
    cardAccent: {
      cardBg: "#FCC200",
      cardBottom: "#F2E5BB",
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
    remainingSlots: 11,
    participatingAmount: "10 lacs",
    cardAccent: {
      cardBg: "#FCC200",
      cardBottom: "#F2E5BB",
      cardBgBorder: "#D97D13",
      cardBottomBorder: "#B1B1B1",
    },
    month: 12,
  },
  {
    id: 3,
    cardId: 10003,
    bcAmount: "1 cr",
    totalSlots: 20,
    remainingSlots: 3,
    participatingAmount: "5 lacs",
    cardAccent: {
      cardBg: "#FCC200",
      cardBottom: "#F2E5BB",
      cardBgBorder: "#D97D13",
      cardBottomBorder: "#B1B1B1",
    },
    month: 12,
  },
  {
    id: 4,
    cardId: 10004,
    bcAmount: "90 lacs",
    totalSlots: 20,
    remainingSlots: 5,
    participatingAmount: "4.5 lacs",
    cardAccent: {
      cardBg: "#C0C0C0",
      cardBottom: "#F3E9E9",
      cardBottomBorder: "#B1B1B1",
      cardBgBorder: "#8C8383",
    },
    month: 20,
  },
  {
    id: 5,
    cardId: 10005,
    bcAmount: "80 lacs",
    totalSlots: 20,
    remainingSlots: 16,
    participatingAmount: "4 lacs",
    cardAccent: {
      cardBg: "#C0C0C0",
      cardBottom: "#F3E9E9",
      cardBottomBorder: "#B1B1B1",
      cardBgBorder: "#8C8383",
    },
    month: 20,
  },
  {
    id: 6,
    cardId: 10006,
    bcAmount: "76.8 lacs",
    totalSlots: 12,
    remainingSlots: 9,
    participatingAmount: "6.4 lacs",
    cardAccent: {
      cardBg: "#C0C0C0",
      cardBottom: "#F3E9E9",
      cardBottomBorder: "#B1B1B1",
      cardBgBorder: "#8C8383",
    },
    month: 20,
  },
  {
    id: 7,
    cardId: 10007,
    bcAmount: "9 lacs",
    totalSlots: 20,
    remainingSlots: 15,
    participatingAmount: "45000",
    cardAccent: {
      cardBg: "#D8914B",
      cardBottom: "#EED8C2",
      cardBottomBorder: "#B1B1B1",
      cardBgBorder: "#5C3B29",
    },
    month: 12,
  },
  {
    id: 8,
    cardId: 10008,
    bcAmount: "6 lacs",
    totalSlots: 12,
    remainingSlots: 3,
    participatingAmount: "50000",
    cardAccent: {
      cardBg: "#D8914B",
      cardBottom: "#EED8C2",
      cardBottomBorder: "#B1B1B1",
      cardBgBorder: "#5C3B29",
    },
    month: 12,
  },
  {
    id: 9,
    cardId: 10009,
    bcAmount: "1.2 lacs",
    totalSlots: 12,
    remainingSlots: 2,
    participatingAmount: "12000",
    cardAccent: {
      cardBg: "#D8914B",
      cardBottom: "#EED8C2",
      cardBottomBorder: "#B1B1B1",
      cardBgBorder: "#5C3B29",
    },
    month: 12,
  },
  {
    id: 10,
    cardId: 10010,
    bcAmount: "95000",
    totalSlots: 20,
    remainingSlots: 3,
    participatingAmount: "4750",
    cardAccent: {
      cardBg: "#669FD3",
      cardBottom: "#80BEF6",
      cardBottomBorder: "#B1B1B1",
      cardBgBorder: "#0C3D68",
    },
    month: 20,
  },
  {
    id: 11,
    cardId: 10011,
    bcAmount: "90000",
    totalSlots: 12,
    remainingSlots: 2,
    participatingAmount: "7500",
    cardAccent: {
      cardBg: "#669FD3",
      cardBottom: "#80BEF6",
      cardBottomBorder: "#B1B1B1",
      cardBgBorder: "#0C3D68",
    },
    month: 20,
  },
  {
    id: 12,
    cardId: 10012,
    bcAmount: "60000",
    totalSlots: 20,
    remainingSlots: 8,
    participatingAmount: "3000",
    cardAccent: {
      cardBg: "#669FD3",
      cardBottom: "#80BEF6",
      cardBottomBorder: "#B1B1B1",
      cardBgBorder: "#0C3D68",
    },
    month: 20,
  },
  {
    id: 13,
    cardId: 10013,
    bcAmount: "9000",
    totalSlots: 12,
    remainingSlots: 9,
    participatingAmount: "750",
    cardAccent: {
      cardBg: "#A2539B",
      cardBottom: "#BC96B9",
      cardBottomBorder: "#B1B1B1",
      cardBgBorder: "#3D0438",
    },
    month: 12,
  },
  {
    id: 14,
    cardId: 10014,
    bcAmount: "7200",
    totalSlots: 12,
    remainingSlots: 4,
    participatingAmount: "600",
    cardAccent: {
      cardBg: "#A2539B",
      cardBottom: "#BC96B9",
      cardBottomBorder: "#B1B1B1",
      cardBgBorder: "#3D0438",
    },
    month: 12,
  },
  {
    id: 15,
    cardId: 10015,
    bcAmount: "6000",
    totalSlots: 20,
    remainingSlots: 1,
    participatingAmount: "500",
    cardAccent: {
      cardBg: "#A2539B",
      cardBottom: "#BC96B9",
      cardBottomBorder: "#B1B1B1",
      cardBgBorder: "#3D0438",
    },
    month: 12,
  },
  // {
  //   id: 16,
  //   cardId: 10016,
  //   bcAmount: "500",
  //   totalSlots: 12,
  //   remainingSlots: 3,
  //   participatingAmount: "5000",
  //   cardAccent: {
  //     cardBg: "#FFFFFF",
  //     cardBottom: "#FFFFFF",
  //     cardBottomBorder: "#B1B1B1",
  //     cardBgBorder: "#B1B1B1",
  //   },
  //   month: 12,
  // },
  // {
  //   id: 17,
  //   cardId: 10017,
  //   bcAmount: "1000",
  //   totalSlots: 20,
  //   remainingSlots: 11,
  //   participatingAmount: "20000",
  //   cardAccent: {
  //     cardBg: "#FFFFFF",
  //     cardBottom: "#FFFFFF",
  //     cardBottomBorder: "#B1B1B1",
  //     cardBgBorder: "#B1B1B1",
  //   },
  //   month: 12,
  // },
  // {
  //   id: 18,
  //   cardId: 10018,
  //   bcAmount: "1500",
  //   totalSlots: 20,
  //   remainingSlots: 3,
  //   participatingAmount: "30000",
  //   cardAccent: {
  //     cardBg: "#FFFFFF",
  //     cardBottom: "#FFFFFF",
  //     cardBottomBorder: "#B1B1B1",
  //     cardBgBorder: "#B1B1B1",
  //   },
  //   month: 12,
  // },
  // {
  //   id: 19,
  //   cardId: 10019,
  //   bcAmount: "2000",
  //   totalSlots: 20,
  //   remainingSlots: 5,
  //   participatingAmount: "40000",
  //   cardAccent: {
  //     cardBg: "#FFFFFF",
  //     cardBottom: "#FFFFFF",
  //     cardBottomBorder: "#B1B1B1",
  //     cardBgBorder: "#B1B1B1",
  //   },
  //   month: 12,
  // },
  // {
  //   id: 20,
  //   cardId: 10020,
  //   bcAmount: "2500",
  //   totalSlots: 20,
  //   remainingSlots: 16,
  //   participatingAmount: "50000",
  //   cardAccent: {
  //     cardBg: "#FFFFFF",
  //     cardBottom: "#FFFFFF",
  //     cardBottomBorder: "#B1B1B1",
  //     cardBgBorder: "#B1B1B1",
  //   },
  //   month: 12,
  // },
  // {
  //   id: 21,
  //   cardId: 10021,
  //   bcAmount: "3000",
  //   totalSlots: 12,
  //   remainingSlots: 9,
  //   participatingAmount: "30000",
  //   cardAccent: {
  //     cardBg: "#FFFFFF",
  //     cardBottom: "#FFFFFF",
  //     cardBottomBorder: "#B1B1B1",
  //     cardBgBorder: "#B1B1B1",
  //   },
  //   month: 12,
  // },
  // {
  //   id: 22,
  //   cardId: 10022,
  //   bcAmount: "4000",
  //   totalSlots: 20,
  //   remainingSlots: 15,
  //   participatingAmount: "70000",
  //   cardAccent: {
  //     cardBg: "#FFFFFF",
  //     cardBottom: "#FFFFFF",
  //     cardBottomBorder: "#B1B1B1",
  //     cardBgBorder: "#B1B1B1",
  //   },
  //   month: 12,
  // },
  // {
  //   id: 23,
  //   cardId: 10023,
  //   bcAmount: "4500",
  //   totalSlots: 12,
  //   remainingSlots: 3,
  //   participatingAmount: "60000",
  //   cardAccent: {
  //     cardBg: "#FFFFFF",
  //     cardBottom: "#FFFFFF",
  //     cardBottomBorder: "#B1B1B1",
  //     cardBgBorder: "#B1B1B1",
  //   },
  //   month: 12,
  // },
  // {
  //   id: 24,
  //   cardId: 10024,
  //   bcAmount: "4500",
  //   totalSlots: 12,
  //   remainingSlots: 2,
  //   participatingAmount: "25000",
  //   cardAccent: {
  //     cardBg: "#FFFFFF",
  //     cardBottom: "#FFFFFF",
  //     cardBottomBorder: "#B1B1B1",
  //     cardBgBorder: "#B1B1B1",
  //   },
  //   month: 12,
  // },
  // {
  //   id: 25,
  //   cardId: 10025,
  //   bcAmount: "7500",
  //   totalSlots: 20,
  //   remainingSlots: 3,
  //   participatingAmount: "55000",
  //   cardAccent: {
  //     cardBg: "#FFFFFF",
  //     cardBottom: "#FFFFFF",
  //     cardBottomBorder: "#B1B1B1",
  //     cardBgBorder: "#B1B1B1",
  //   },
  //   month: 12,
  // },
  // {
  //   id: 26,
  //   cardId: 10026,
  //   bcAmount: "8000",
  //   totalSlots: 12,
  //   remainingSlots: 2,
  //   participatingAmount: "1.2 lacs",
  //   cardAccent: {
  //     cardBg: "#FFFFFF",
  //     cardBottom: "#FFFFFF",
  //     cardBottomBorder: "#B1B1B1",
  //     cardBgBorder: "#B1B1B1",
  //   },
  //   month: 12,
  // },
  // {
  //   id: 27,
  //   cardId: 10027,
  //   bcAmount: "8500",
  //   totalSlots: 20,
  //   remainingSlots: 8,
  //   participatingAmount: "1.3 lacs",
  //   cardAccent: {
  //     cardBg: "#FFFFFF",
  //     cardBottom: "#FFFFFF",
  //     cardBottomBorder: "#B1B1B1",
  //     cardBgBorder: "#B1B1B1",
  //   },
  //   month: 12,
  // },
  // {
  //   id: 28,
  //   cardId: 10028,
  //   bcAmount: "9000",
  //   totalSlots: 12,
  //   remainingSlots: 9,
  //   participatingAmount: "1.4 lacs",
  //   cardAccent: {
  //     cardBg: "#FFFFFF",
  //     cardBottom: "#FFFFFF",
  //     cardBottomBorder: "#B1B1B1",
  //     cardBgBorder: "#B1B1B1",
  //   },
  //   month: 12,
  // },
  // {
  //   id: 29,
  //   cardId: 10029,
  //   bcAmount: "9500",
  //   totalSlots: 12,
  //   remainingSlots: 4,
  //   participatingAmount: "1.8 lacs",
  //   cardAccent: {
  //     cardBg: "#FFFFFF",
  //     cardBottom: "#FFFFFF",
  //     cardBottomBorder: "#B1B1B1",
  //     cardBgBorder: "#B1B1B1",
  //   },
  //   month: 12,
  // },
  // {
  //   id: 30,
  //   cardId: 10030,
  //   bcAmount: "10000",
  //   totalSlots: 20,
  //   remainingSlots: 20,
  //   participatingAmount: "2 lacs",
  //   cardAccent: {
  //     cardBg: "#FFFFFF",
  //     cardBottom: "#FFFFFF",
  //     cardBottomBorder: "#B1B1B1",
  //     cardBgBorder: "#B1B1B1",
  //   },
  //   month: 12,
  // },
];

const Auction = ({ navigation }) => {
  const [selected, setSelected] = useState(12);
  const [isMute, setIsMute] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [filterData, setFilterData] = useState(null);

  const filterDataByMonth = (month) => {
    return DATA.filter((item) => item.month === month);
  };

  useEffect(() => {
    const filteredData = filterDataByMonth(selected);
    setFilterData(filteredData);
  }, [selected]);

  const handleFilterDataByMonth = (option) => {
    setSelected(option);
  };

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

      <GradientVarientOneBtn
        style={{ width: "100%", borderRadius: 10, overflow: "hidden" }}
        btnText={"skip"}
        onPress={() => navigation.navigate("SpinWheel")}
      />

      <View style={styles.subContainer}>
        {/* month selector */}
        <View style={styles.monthSelector}>
          <WhiteText style={{ fontSize: 25, fontWeight: "600" }}>
            Month
          </WhiteText>

          <SelectorBtn
            value={12}
            selected={selected}
            onPress={() => handleFilterDataByMonth(12)}
          />

          <SelectorBtn
            value={20}
            selected={selected}
            onPress={() => handleFilterDataByMonth(20)}
          />
        </View>

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
            Your Club BC
          </WhiteText>

          {/* card list container */}
          <FlatList
            data={filterData !== null && filterData}
            renderItem={({ item }) => (
              <Card
                cardId={item.cardId}
                amount={item.bcAmount}
                totalSlots={item.totalSlots}
                remainingSlots={item.remainingSlots}
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
              { height: filterData ? filterData.length * 200 : "auto" },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default Auction;

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
    gap: 10,
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
