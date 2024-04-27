import React, {useCallback, useContext, useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {GYMLogo} from '../components/Svgs';
import DayCard from '../components/DayCard';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {trainingPlan} from '../informations/trainingPlan';
import CommonButton from '../components/CommonButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from '../context/GlobalContext';

export default function GoalScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const {refresh, setRefresh} = useContext(GlobalContext);

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

  const scrollViewRef = useRef(null);

  // Function to handle the scroll to top action
  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({
      y: 0,
      animated: true,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <GYMLogo style={styles.logo} />

      <Text style={styles.title}>Ежедневные цели</Text>

      <ScrollView contentContainerStyle={styles.scrollView} ref={scrollViewRef}>
        <DayCard
          text={'Понедельник'}
          icon={
            <Image
              style={styles.monday}
              source={require('../assets/icons/m-icon.png')}
            />
          }
          onPress={() =>
            navigation.navigate('TrainingDetail', {
              day: trainingPlan.weekly_schedule[0],
            })
          }
        />

        <DayCard
          text={'Вторник'}
          icon={
            <Image
              style={styles.monday}
              source={require('../assets/icons/t-icon.png')}
            />
          }
          onPress={() =>
            navigation.navigate('TrainingDetail', {
              day: trainingPlan.weekly_schedule[1],
            })
          }
        />

        <DayCard
          text={'Среда'}
          icon={
            <Image
              style={styles.monday}
              source={require('../assets/icons/wed-icon.png')}
            />
          }
          onPress={() =>
            navigation.navigate('TrainingDetail', {
              day: trainingPlan.weekly_schedule[2],
            })
          }
        />

        <DayCard
          text={'Четверг'}
          icon={
            <Image
              style={styles.thursday}
              source={require('../assets/icons/th-icon.png')}
            />
          }
          onPress={() =>
            navigation.navigate('TrainingDetail', {
              day: trainingPlan.weekly_schedule[3],
            })
          }
        />

        <DayCard
          text={'Пятница'}
          icon={
            <Image
              style={styles.friday}
              source={require('../assets/icons/f-icon.png')}
            />
          }
          onPress={() =>
            navigation.navigate('TrainingDetail', {
              day: trainingPlan.weekly_schedule[4],
            })
          }
        />

        {data?.length ? (
          <View style={styles.buttonContainer}>
            <CommonButton
              text={'Начать новую неделю'}
              textColor={'#FFFFFF'}
              borderColor={'#F34E3A'}
              backgroundColor={'#F34E3A'}
              onPress={async () => {
                await AsyncStorage.clear();
                scrollToTop();
                setRefresh(!refresh);
              }}
            />
          </View>
        ) : (
          ''
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141516',
  },
  title: {
    color: '#DAD6D6',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
    marginTop: 20,
  },
  logo: {
    alignSelf: 'center',
  },
  scrollView: {
    paddingBottom: 50,
  },
  monday: {
    position: 'absolute',
    width: 150,
    height: 135,
    right: 0,
    bottom: 0,
  },
  thursday: {
    position: 'absolute',
    width: 150,
    height: 90,
    right: 10,
    bottom: 10,
  },
  friday: {
    position: 'absolute',
    width: 110,
    height: 120,
    right: 10,
    bottom: 10,
  },
  buttonContainer: {
    marginTop: 30,
  },
});
