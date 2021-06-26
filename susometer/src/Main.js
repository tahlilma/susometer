import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IdentityStack from './stacks/IdentityStack';
import HomeStack from './stacks/HomeStack';

const Stack = createStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IdentityStack" >
        <Stack.Screen name="IdentityStack" component={IdentityStack} options={{ headerShown: false }} />
        <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default Main;