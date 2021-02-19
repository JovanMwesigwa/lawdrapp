import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {  AntDesign,  Ionicons } from '@expo/vector-icons';




import HomeStackNavigator from './HomeStackNavigator'
import OrdersStackNavigator from './OrdersStackNavigator'
import CreateOrderStackNavigator from './CreateOrderStackNavigator'
import colors from '../config/colors';
import ProfileStackNavigator from './ProfileStackNavigator';
import NotificationStackNavigator from './NotificationStackNavigator';
import TabBarButton from '../components/TabBarButton';



const Tabs = createBottomTabNavigator()

const MainNavigation = () => {
    return (
        <Tabs.Navigator
            tabBarOptions={{
                activeTintColor: colors.secondary,
                inactiveTintColor: colors.medium,
                showLabel: false,
            }}
            
        >
            <Tabs.Screen 
                name="Home" 
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ size, color }) => <AntDesign name="home" size={size} color={color} />
                }}
             />
            <Tabs.Screen 
                name="Orders" 
                component={OrdersStackNavigator} 
                options={{
                    tabBarIcon: ({ size, color }) => <AntDesign name="profile" size={size} color={color} />
                }}
            />
            <Tabs.Screen 
                name="Add" 
                component={CreateOrderStackNavigator}
                options={{
                    tabBarIcon: ({ size, color }) => <TabBarButton />
                }}
             />
             <Tabs.Screen 
                name="Notifications" 
                component={NotificationStackNavigator}
                options={{
                    tabBarIcon: ({ size, color }) => <AntDesign name="bells" size={size} color={color} />
                }}
             />
            <Tabs.Screen 
                name="Profile" 
                component={ProfileStackNavigator}
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="ios-person-outline" size={size} color={color} />
                }}
             />
        </Tabs.Navigator>
    )
}

export default MainNavigation

