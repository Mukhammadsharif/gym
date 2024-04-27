import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import BackgroundImage from '../assets/backgrounds/fruit-background.png';

import {useNavigation} from '@react-navigation/native';
import {BackIcon} from '../components/Svgs';

const {height} = Dimensions.get('window');

export default function BookDetail({route}) {
  const {fruit} = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.background}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}>
          <BackIcon />
        </TouchableOpacity>

        <Text style={styles?.name}>{fruit.name}</Text>

        <Image
          style={styles?.image}
          source={fruit.image}
          resizeMode={'contain'}
        />

        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <Text style={styles?.description}>{fruit.description}</Text>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    height: height,
    padding: 20,
  },
  image: {
    width: '100%',
    height: height / 4,
    borderRadius: 12,
    marginTop: height / 9,
    marginBottom: height / 10,
  },
  name: {
    color: '#DAD6D6',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
  },
  scrollView: {
    paddingBottom: 100,
  },
  description: {
    textAlign: 'justify',
    fontSize: 14,
    color: '#DAD6D6',
    fontFamily: 'Montserrat-Light',
  },
  data: {
    color: '#FF5050',
  },
  link: {
    color: '#0448D8',
  },
  backIcon: {
    width: 40,
    height: 40,
  },
});
