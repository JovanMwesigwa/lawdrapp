import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import CreateOrder from '../screen/CreateOrder'
import WashingPreferences from '../screen/WashingPreferences'
import DeliveryDetailsScreen from '../screen/DeliveryDetailsScreen'

const Stack = createStackNavigator()


const CreateOrderStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="CreateOrder" component={CreateOrder} />
            <Stack.Screen name="WashPreferences" component={WashingPreferences} />
            <Stack.Screen name="DeliveryDetails" component={DeliveryDetailsScreen} />
        </Stack.Navigator>
    )
}

export default CreateOrderStackNavigator

