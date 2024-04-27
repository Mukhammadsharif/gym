import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions, Text} from 'react-native';

const {width} = Dimensions.get('window');

export default function CommonButton({
  text = '',
  backgroundColor = '#140702',
  borderColor = '#F34E3A',
  textColor = '#F34E3A',
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor, borderColor}]}>
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.75,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    height: 50,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});
