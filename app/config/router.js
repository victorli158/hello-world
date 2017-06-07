import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import CreateTripContainer from '../screens/CreateTripContainer';
import Home from '../screens/Home';

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'PlanIt',
    })
  },
  CreateTrip: {
    screen: CreateTripContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Create Trip',
    })
  }
});
