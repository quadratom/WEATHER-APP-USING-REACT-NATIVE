import React from 'react';
import CurrentWheather from '../screens/CurrentWheather';
import UpcomingWheather from '../screens/UpcomingWheather';
import City from '../screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return(
        <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabInactiveTintColor: 'grey',
          tabBarStyle: {
            backgroundColor: 'lightblue'
          },
          headerStyle: {
            backgroundColor: 'lightblue'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            color: 'tomato'
          }
        }}
      >
          <Tab.Screen 
            name={'Current'} 
            component={CurrentWheather} 
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather 
                  name={'droplet'}
                  size={25}
                  color={focused ? 'tomato' : 'black'}
                />
              )
              
            }}
          />
          <Tab.Screen 
            name={'Upcoming'} 
            component={UpcomingWheather} 
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather 
                  name={'clock'}
                  size={25}
                  color={focused ? 'tomato' : 'black'}
                />
              )
              
            }}
          />
          <Tab.Screen 
            name={'City'} 
            component={City} 
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather 
                  name={'home'}
                  size={25}
                  color={focused ? 'tomato' : 'black'}
                />
              )
            }}
          />
      </Tab.Navigator>

    )
}

export default Tabs