import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions, Text} from 'react-native';

const {width} = Dimensions.get('window');

export default function DayCard({text, icon, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    backgroundColor: '#292929',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    height: 120,
    alignSelf: 'center',
    marginTop: 25,
    position: 'relative',
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    marginTop: 10,
    marginLeft: 20,
  },
});
