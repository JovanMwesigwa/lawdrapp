import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import ProfileScreen from '../screen/ProfileScreen'


const Stack = createStackNavigator()


const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default ProfileStackNavigator
