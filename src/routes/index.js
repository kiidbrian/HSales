import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Sales from './../screens/Sales';
import SaleDetail from './../screens/SaleDetail';
import Profile from './../screens/Profile';

export const SalesStack = StackNavigator({
  Sales: {
    screen: Sales,
    navigationOptions: {
      title: 'Sales',
    },
  },
  Details: {
    screen: SaleDetail,
    navigationOptions: '',
  },
});

export const Tabs = TabNavigator({
  Sales: {
    screen: SalesStack,
    navigationOptions: {
      tabBar: {
        label: 'Sales',
        icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      },
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBar: {
        label: 'Profile',
        icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
      },
    },
  },
});

