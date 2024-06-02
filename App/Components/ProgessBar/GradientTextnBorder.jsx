// GradientTextnBorder.jsx
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const GradientTextnBorder = ({ btnText }) => {
  return <Text style={styles.gradientText}>{btnText}</Text>;
};

const styles = StyleSheet.create({
  gradientText: {
    background: 'linear-gradient(45deg, #FF6B6B, #FFCC00)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    fontWeight: '600',
    fontSize: 15,
  },
});

export default GradientTextnBorder;
