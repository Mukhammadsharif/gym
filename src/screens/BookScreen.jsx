import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
} from 'react-native';
import {Badge} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {fruits} from '../informations/fruits';

export default function BookScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ваш справочник</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}>
        {fruits.map((fruit, index) => (
          <TouchableOpacity
            style={styles.card}
            key={index}
            onPress={() => navigation.navigate('BookDetail', {fruit: fruit})}>
            <Image source={fruit?.image} style={styles.image} />

            <View style={styles.titleContainer}>
              <Text style={styles.cardTitle}>{fruit.name}</Text>
              <Text style={styles.content}>
                {fruit?.description.substring(0, 100)}...
              </Text>

              <Badge style={styles.badge}>Подробнее</Badge>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 6,
    marginLeft: 10,
    fontFamily: 'Montserrat-Bold',
  },
  content: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
    fontFamily: 'Montserrat-Light',
  },
  image: {
    width: '40%',
    height: 130,
    borderRadius: 12,
  },
  titleContainer: {
    width: '60%',
  },
  badge: {
    backgroundColor: '#F34E3A',
  },
});
