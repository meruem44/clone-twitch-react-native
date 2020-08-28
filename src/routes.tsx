import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Fallowing from './pages/Fallowing';
import ComingSoon from './pages/ComingSoon';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => {

  const { colors } = useContext(ThemeContext);

  return (
    <NavigationContainer>
    <Navigator 
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: colors.primary,
          borderTopWidth: 0
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle: {
          fontFamily: 'roboto_400',
          fontSize: 11,
          marginTop: 5
        },
        inactiveTintColor: colors.black,
        activeTintColor: colors.purple
      }}
    >
      <Screen name="Following" component={Fallowing} options={{
        tabBarIcon: ({ size, focused }) => (
          <Ionicons 
            name="md-heart"
            size={size}
            color={focused ? colors.purple : colors.black}
          />
        )
      }}/>
      <Screen name="Discover" component={ComingSoon}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons 
              name="compass-outline"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          )
        }}
      />
      <Screen name="Browse" component={View} 
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Ionicons 
              name="md-browsers"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          )
        }}
      />
      <Screen name="Esports" component={View} 
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons 
              name="trophy-outline"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          )
        }}
      />
    </Navigator>
  </NavigationContainer>
  );
};

export default Routes;
