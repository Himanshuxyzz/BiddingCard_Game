// ProgressBar.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ totalSlots, remainingSlots }) => {
  const progress = ((totalSlots - remainingSlots) / totalSlots) * 100;

  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 10,
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FF0000',
    borderRadius: 5,
  },
});

export default ProgressBar;
