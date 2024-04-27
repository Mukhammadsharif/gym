import React, {useEffect} from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import BackgroundImage from '../assets/backgrounds/SplashScreen04.png';
import {useNavigation} from '@react-navigation/native';

const {height} = Dimensions.get('window');

export default function SplashScreen4() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('TabScreen');
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={BackgroundImage}
      />
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
});
