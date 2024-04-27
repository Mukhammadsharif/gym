import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BackIcon} from '../components/Svgs';
import TrainCard from '../components/TrainCard';

export default function TrainingDetail({route}) {
  const navigation = useNavigation();
  const {day} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.title}>{day?.day}</Text>
        <TouchableOpacity />
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {day?.activities.map((activity, index) => (
          <TrainCard key={index} activity={activity} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141516',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingHorizontal: 30,
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  scrollView: {},
});
