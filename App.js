import React from 'react';
import { NavigationContainer } from '@react-navigation/native'


import AuthNavigation from './app/navigation/AuthNavigation'
import Screen from './app/components/Screen'
import MainNavigation from './app/navigation/MainNavigation';



 
export default function App() {

  const [ auth, setAuth ] = React.useState(false);
 
  return (
    <NavigationContainer>
      {
        !auth ?  
        <AuthNavigation /> :
        <Screen>
          <MainNavigation />
        </Screen>
      }
    </NavigationContainer>
  );
}


