import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../screen/WelcomeScreen';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';


const Stack = createStackNavigator();


const AuthNavigation = ({handleAuth}) => {
    return (
        <Stack.Navigator 
            mode="modal"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Welcome" component= {WelcomeScreen} />
            <Stack.Screen 
                name="Login" 
                component={LoginScreen}
             />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigation;

