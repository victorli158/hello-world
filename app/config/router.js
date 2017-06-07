import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import CreateTripContainer from '../screens/CreateTripContainer';
import Home from '../screens/Home';
import Base from '../screens/userHandling/Base';
import Login from '../screens/userHandling/Login';
import SignUp from '../screens/userHandling/SignUp';

export const HomeStack = StackNavigator({
  Base: {
    screen: Base,
    navigationOptions: ({ navigation }) => ({
      title: 'PlanIt',
    })
  },
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: 'Login',
    })
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: ({ navigation }) => ({
      title: 'Sign Up',
    })
  },
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
