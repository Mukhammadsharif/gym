import React, {useCallback, useContext, useState} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import {GYMLogo} from '../components/Svgs';
import {useFocusEffect} from '@react-navigation/native';
import Illustration from '../assets/icons/Ilustration.png';
import {GlobalContext} from '../context/GlobalContext';

const {width} = Dimensions.get('window');

export default function HomeScreen() {
  const [data, setData] = useState(null);
  const {refresh} = useContext(GlobalContext);

  const defineStorage = async () => {
    const storage = await AsyncStorage.getItem('activities');
    if (storage) {
      setData(JSON.parse(storage));
    }
  };

  useFocusEffect(
    useCallback(() => {
      // Perform side effects here
      defineStorage();
      return () => {
        // Optional cleanup actions
        setData(null);
      };
    }, [refresh]),
  );

  return (
    <SafeAreaView style={styles.container}>
      <GYMLogo style={styles.logo} />

      <Text style={styles.title}>Ваш результат</Text>

      <AnimatedProgressWheel
        max={30}
        showProgressLabel={true}
        rotation={'-90deg'}
        labelStyle={styles.progressLabel}
        subtitle={'Выполнено из 30'}
        subtitleStyle={styles.subtitle}
        backgroundColor={'#3C3C3C'}
        color={'#F34E3A'}
        size={width / 1.5}
        width={30}
        progress={data?.length ? data?.length + 1 : 0}
        delay={5}
      />

      <Image style={styles.image} source={Illustration} resizeMode="cover" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141516',
    alignItems: 'center',
  },
  title: {
    color: '#DAD6D6',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
    marginTop: 20,
    marginBottom: 40,
  },
  progressLabel: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Montserrat-Light',
    marginTop: 15,
  },
});
