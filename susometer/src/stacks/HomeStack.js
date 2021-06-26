import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

import SusScreen from './screens/SusScreen';
import LeaderBoardScreen from './screens/LeaderBoardScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='SUS Meter' icon={(props) => <Icon name='activity-outline' {...props} />}/>
    <BottomNavigationTab title='Board' icon={(props) => <Icon name='trending-up-outline' {...props} />}/>
  </BottomNavigation>
);

function HomeStack({ route }) {
  return (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Screen name='SusMeter' component={SusScreen} initialParams={{ name: route.params.name }}/>
      <Screen name='LeaderBoard' component={LeaderBoardScreen} />
    </Navigator>
  )
}


export default HomeStack;