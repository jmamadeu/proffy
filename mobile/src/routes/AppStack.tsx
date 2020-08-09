import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';

import StudyBottomTabs from './StudyTabs';

const AppStackNavigator = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator.Navigator screenOptions={{ headerShown: false }}>
        <AppStackNavigator.Screen component={Landing} name='Landing' />
        <AppStackNavigator.Screen component={GiveClasses} name='GiveClasses' />

        <AppStackNavigator.Screen component={StudyBottomTabs} name='Study' />
      </AppStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
