import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import BackgroundImage from '../assets/backgrounds/SplashScreen01.png';
import CommonButton from '../components/CommonButton';
import {useNavigation} from '@react-navigation/native';

const {height} = Dimensions.get('window');

export default function SplashScreen1() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={BackgroundImage}>
        <View style={styles.buttonContainer}>
          <CommonButton
            text={'Следующий'}
            onPress={() => navigation.navigate('SplashScreen2')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    height: height,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  buttonContainer: {
    marginBottom: 30,
  },
});
