import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import HomeScreen from '../screen/HomeScreen'



const Stack = createStackNavigator()



const HomeStackNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator

