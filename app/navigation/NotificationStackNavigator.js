import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import NotificationsScreen from '../screen/NoficationsScreen'

const Stack = createStackNavigator()

const NotificationStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Notifications" component={NotificationsScreen} />
        </Stack.Navigator>
    )
}

export default NotificationStackNavigator

