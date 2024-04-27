import React, {useEffect} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen1 from './screens/SplashScreen1';
import SplashScreen3 from './screens/SplashScreen3';
import SplashScreen4 from './screens/SplashScreen4';
import SplashScreen2 from './screens/SplashScreen2';
import HomeScreen from './screens/HomeScreen';
import {BookIcon, GoalIcon, HomeIcon} from './components/Svgs';
import GoalScreen from './screens/GoalScreen';
import TrainingDetail from './screens/TrainingDetail';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BookScreen from './screens/BookScreen';
import BookDetail from './screens/BookDetail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const {height} = Dimensions.get('window');

export default function Navigator() {
  const [initialScreen, setInitialScreen] = React.useState('');

  const defineStorage = async () => {
    const storage = await AsyncStorage.getItem('activities');
    if (storage) {
      setInitialScreen('TabScreen');
    } else {
      setInitialScreen('SplashScreen1');
    }
  };

  useEffect(() => {
    defineStorage();
  }, []);

  if (initialScreen) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialScreen}>
          <Stack.Screen
            options={{headerShown: false}}
            component={SplashScreen1}
            name="SplashScreen1"
          />

          <Stack.Screen
            options={{headerShown: false}}
            component={SplashScreen2}
            name="SplashScreen2"
          />

          <Stack.Screen
            options={{headerShown: false}}
            component={SplashScreen3}
            name="SplashScreen3"
          />

          <Stack.Screen
            options={{headerShown: false}}
            component={SplashScreen4}
            name="SplashScreen4"
          />

          <Stack.Screen
            options={{headerShown: false}}
            component={TabScreen}
            name="TabScreen"
          />

          <Stack.Screen
            options={{headerShown: false}}
            component={TrainingDetail}
            name="TrainingDetail"
          />

          <Stack.Screen
            options={{headerShown: false}}
            component={BookDetail}
            name="BookDetail"
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          flexDirection: 'row',
          height: height * 0.1,
          backgroundColor: '#222529',
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: 'Montserrat-Regular',
        },
        tabBarActiveTintColor: '#F34E3A',
        tabBarInactiveTintColor: '#9F9F9F',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={GoalScreen}
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: ({focused}) => (
            <HomeIcon fill={!focused ? '#9F9F9F' : '#F34E3A'} />
          ),
        }}
      />

      <Tab.Screen
        name="GoalScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'План',
          tabBarIcon: ({focused}) => (
            <GoalIcon fill={!focused ? '#9F9F9F' : '#F34E3A'} />
          ),
        }}
      />

      <Tab.Screen
        name="BookScreen"
        component={BookScreen}
        options={{
          tabBarLabel: 'Справочник',
          tabBarIcon: ({focused}) => (
            <BookIcon fill={!focused ? '#9F9F9F' : '#F34E3A'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
});
