import React, {useContext, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DoneIcon, LineIcon, NotDoneIcon} from './Svgs';
import {GlobalContext} from '../context/GlobalContext';

const {width} = Dimensions.get('window');

export default function TrainCard({activity}) {
  const [done, setDone] = React.useState(false);
  const {refresh, setRefresh} = useContext(GlobalContext);

  const defineItemFromStorage = async () => {
    const storage = await AsyncStorage.getItem('activities');
    if (!storage) {
      await AsyncStorage.setItem('activities', JSON.stringify([]));
    } else {
      const parsedStorage = JSON.parse(storage);
      if (parsedStorage.includes(activity.id)) {
        setDone(true);
      } else {
        setDone(false);
      }
    }
  };

  useEffect(() => {
    defineItemFromStorage();
  }, [refresh]);

  const check = async () => {
    const storage = await AsyncStorage.getItem('activities');
    let parsedStorage = JSON.parse(storage);
    parsedStorage.push(activity.id);
    await AsyncStorage.setItem('activities', JSON.stringify(parsedStorage));
    setRefresh(!refresh);
  };

  const unCheck = async () => {
    const storage = await AsyncStorage.getItem('activities');
    let parsedStorage = JSON.parse(storage);
    parsedStorage = parsedStorage.filter(item => item !== activity.id);
    await AsyncStorage.setItem('activities', JSON.stringify(parsedStorage));
    setRefresh(!refresh);
  };

  return (
    <TouchableOpacity
      onPress={() => (done ? unCheck() : check())}
      style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.name}>{activity?.time}</Text>
        <LineIcon style={styles.lineIcon} />
      </View>
      <Text style={styles.name}>{activity?.name}</Text>

      <TouchableOpacity style={styles.iconContainer}>
        {done ? <DoneIcon /> : <NotDoneIcon />}
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    backgroundColor: '#080808',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    height: 90,
    shadowColor: '#868686',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
    alignSelf: 'center',
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: '#868686',
    fontFamily: 'Montserrat-Light',
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineIcon: {
    marginLeft: 15,
  },
  iconContainer: {},
});
