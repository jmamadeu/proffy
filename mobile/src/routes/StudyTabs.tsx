import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Favorites from '../pages/Favorites';
import TeacherList from '../pages/TeacherList';

const StudyBottomTabs = createBottomTabNavigator();

const StudyTabs: React.FC = () => {
  return (
    <StudyBottomTabs.Navigator
      tabBarOptions={{
        style: { elevation: 0, shadowOpacity: 64, height: 64 },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <StudyBottomTabs.Screen
        component={TeacherList}
        name='TeacherList'
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name='ios-easel'
              color={focused ? '#8257e5' : color}
              size={size}
            />
          ),
        }}
      />
      <StudyBottomTabs.Screen
        component={Favorites}
        name='Favorites'
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name='ios-heart'
              color={focused ? '#8257e5' : color}
              size={size}
            />
          ),
        }}
      />
    </StudyBottomTabs.Navigator>
  );
};

export default StudyTabs;
