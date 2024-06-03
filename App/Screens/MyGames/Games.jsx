import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../../Components/ProgessBar/Card';


const Tab = createMaterialTopTabNavigator();

const mainData = [
  {
    id: 10002,
    amount: '₹2Cr',
    totalSlots: 20,
    remainingSlots: 3,
    bcAmount: '₹2Cr',
    cardBg: '#FFCC00',
    cardBgBorder: '#FFCC00',
    cardBottom: '#FFCC00',
    cardBottomBorder: '#FFCC00',
  },
  {
    id: 10004,
    amount: '₹10 lacs',
    totalSlots: 20,
    remainingSlots: 5,
    bcAmount: '₹10 lacs',
    cardBg: '#D3D3D3',
    cardBgBorder: '#D3D3D3',
    cardBottom: '#D3D3D3',
    cardBottomBorder: '#D3D3D3',
  },
  {
    id: 10007,
    amount: '₹1 lac',
    totalSlots: 20,
    remainingSlots: 15,
    bcAmount: '₹1 lac',
    cardBg: '#FFA500',
    cardBgBorder: '#FFA500',
    cardBottom: '#FFA500',
    cardBottomBorder: '#FFA500',
  },
  {
    id: 10010,
    amount: '₹10000',
    totalSlots: 20,
    remainingSlots: 3,
    bcAmount: '₹10000',
    cardBg: '#ADD8E6',
    cardBgBorder: '#ADD8E6',
    cardBottom: '#ADD8E6',
    cardBottomBorder: '#ADD8E6',
  },
  {
    id: 10015,
    amount: '₹6000',
    totalSlots: 20,
    remainingSlots: 0,
    bcAmount: '₹6000',
    cardBg: '#DA70D6',
    cardBgBorder: '#DA70D6',
    cardBottom: '#DA70D6',
    cardBottomBorder: '#DA70D6',
  },
];

const systemGeneratedData = [
  {
    id: 100002,
    person: '20 Members',
    startDate: '01.01.2024',
    endDate: '01.08.2025',
    amount: '₹20000',
  },
  {
    id: 100003,
    person: '12 Members',
    startDate: '01.04.2024',
    endDate: '01.04.2025',
    amount: '₹60000',
  },
  {
    id: 100004,
    person: '20 Members',
    completedOn: '19.04.2024',
    amount: '₹60000',
  },
];

const ownClubsData = [
  {
    id: 100002,
    person: '20 Members',
    startDate: '01.01.2024',
    endDate: '01.08.2025',
    amount: '₹20000',
  },
  {
    id: 100003,
    person: '12 Members',
    startDate: '01.04.2024',
    endDate: '01.04.2025',
    amount: '₹60000',
  },
  {
    id: 100004,
    person: '20 Members',
    completedOn: '19.04.2024',
    amount: '₹60000',
  },
];

const MainScreen = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardPress = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <FlatList
      data={mainData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card
          cardId={item.id}
          amount={item.amount}
          totalSlots={item.totalSlots}
          remainingSlots={item.remainingSlots}
          bcAmount={item.bcAmount}
          cardBg={item.cardBg}
          cardBgBorder={item.cardBgBorder}
          cardBottom={item.cardBottom}
          cardBottomBorder={item.cardBottomBorder}
          isCardSelected={selectedCard === item.id}
          onPress={() => handleCardPress(item.id)}
          navigation={navigation}
        />
      )}
      contentContainerStyle={styles.list}
    />
  );
};

const SystemGenerated = () => {
  return (
    <FlatList
      data={systemGeneratedData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.text}>Your BC ID: {item.id}</Text>
          <Text style={styles.text}>Person: {item.person}</Text>
          {item.startDate && <Text style={styles.text}>Start Date: {item.startDate}</Text>}
          {item.endDate && <Text style={styles.text}>End Date: {item.endDate}</Text>}
          {item.completedOn && <Text style={styles.text}>Completed On: {item.completedOn}</Text>}
          <Text style={styles.text}>Amount: {item.amount}</Text>
        </View>
      )}
      contentContainerStyle={styles.list1}
    />
  );
};

const OwnClubs = () => {
  return (
    <FlatList
      data={ownClubsData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.text}>Your BC ID: {item.id}</Text>
          <Text style={styles.text}>Person: {item.person}</Text>
          {item.startDate && <Text style={styles.text}>Start Date: {item.startDate}</Text>}
          {item.endDate && <Text style={styles.text}>End Date: {item.endDate}</Text>}
          {item.completedOn && <Text style={styles.text}>Completed On: {item.completedOn}</Text>}
          <Text style={styles.text}>Amount: {item.amount}</Text>
        </View>
      )}
      contentContainerStyle={styles.list1}
    />
  );
};

const Games = () => {
  const [activeTab, setActiveTab] = useState('My Games');

  return (
    <View style={[styles.container, activeTab === 'Own Clubs' && styles.ownClubsContainer]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => console.log('Back pressed')}>
          <Icon name="arrow-left" size={24} color="#FF92CB" style={{left:30}} />
        </TouchableOpacity>
        <Text style={styles.header}>My Games</Text>
        <TouchableOpacity onPress={() => console.log('Profile pressed')}>
          <Icon name="user" size={30} color="#FFFFFF" style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabelStyle: {
            color: activeTab === route.name ? (route.name === 'System Generated' ? '#FF92CB' : '#F0BDCA') : '#FFFFFF',
            fontWeight: 'bold',
          },
          tabBarStyle: {
            backgroundColor: '#2A2E2E',
          },
          tabBarIndicatorStyle: {
            backgroundColor: activeTab === 'System Generated' ? '#FF92CB' : '#F0BDCA',
          },
        })}
        screenListeners={{
          state: (e) => {
            const activeRouteName = e.data.state.routes[e.data.state.index].name;
            setActiveTab(activeRouteName);
          },
        }}
      >
        <Tab.Screen name="My Games" component={MainScreen} />
        <Tab.Screen name="System Generated" component={SystemGenerated} />
        <Tab.Screen name="Own Clubs" component={OwnClubs} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2E2E',
  },
  list1: {
    backgroundColor: '#2A2E2E',
    padding: 20,
    height: "100%",
  },
  list: {
    backgroundColor: '#2A2E2E',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  header: {
    color: '#EA59E4',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  profileIcon: {
    marginRight: 20,
  },
  card: {
    backgroundColor: '#FFCCCB',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: '#000',
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Games;
