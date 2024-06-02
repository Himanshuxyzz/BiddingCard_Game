// Card.jsx
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import WhiteText from '../WhiteText/WhiteText';
import GradientTextnBorder from './GradientTextnBorder';
import ProgressBar from './ProgressBar';


const Card = ({
  cardId,
  amount,
  totalSlots,
  remainingSlots,
  bcAmount,
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
      style={[
        styles.card,
        { backgroundColor: cardBg, borderColor: cardBgBorder },
        isCardSelected && { marginBottom: 35, height: 200 },
      ]}
      onPress={onPress}
    >
      <View style={styles.cardHeader}>
        <WhiteText style={styles.cardHeaderText}>Start your BC</WhiteText>
        <WhiteText style={styles.cardHeaderText}>ID: {cardId}</WhiteText>
        <GradientTextnBorder btnText={amount} />
      </View>

      <View style={styles.cardContent}>
        <WhiteText style={styles.personText}>Person:</WhiteText>

        <ProgressBar totalSlots={totalSlots} remainingSlots={remainingSlots} />

        <View style={styles.slotsInfo}>
          <WhiteText style={styles.remainingSlotsText}>
            {remainingSlots} Slots left
          </WhiteText>
          <WhiteText style={styles.totalSlotsText}>
            {totalSlots} slots
          </WhiteText>
        </View>
      </View>

      <View
        style={[
          styles.cardFooter,
          { backgroundColor: cardBottom, borderColor: cardBottomBorder },
        ]}
      >
        <View style={styles.footerLeft}>
          <Feather name="arrow-left" size={24} color={cardBgBorder} />
          <WhiteText style={[styles.footerText, { color: cardBg }]}>
            ₹{bcAmount}
          </WhiteText>
        </View>

        <TouchableOpacity
          style={[styles.playButton, { backgroundColor: cardBg }]}
          onPress={() =>
            navigation.navigate('Startbc', {
              bcAmount: bcAmount,
              totalAmount: amount,
            })
          }
        >
          <WhiteText style={styles.playButtonText}>Play</WhiteText>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    height: 150, // Default height
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  cardHeaderText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 15,
  },
  cardContent: {
    paddingHorizontal: 10,
    gap: 10,
  },
  personText: {
    color: 'black',
    fontWeight: '600',
  },
  slotsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  remainingSlotsText: {
    color: '#FF0000',
    fontWeight: '600',
  },
  totalSlotsText: {
    color: 'black',
    fontWeight: '600',
  },
  cardFooter: {
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    fontWeight: '600',
    fontSize: 15,
  },
  playButton: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  playButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default Card;
