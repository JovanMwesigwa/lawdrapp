import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OrdersScreen from '../screen/OrdersScreen'


const Stack = createStackNavigator()


const OrdersStackNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="Orders" component={OrdersScreen} />
        </Stack.Navigator>
    )
}

export default OrdersStackNavigator

