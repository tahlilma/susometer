import React from 'react';
import { TopNavigation, TopNavigationAction, Icon, Divider } from '@ui-kitten/components';
import Constants from 'expo-constants';
import { ThemeContext } from '../../theme-context';

const LeaderBoardNav = ({ onRefresh, disabled }) => {

  const themeContext = React.useContext(ThemeContext);

  const RenderThemeChanger = () => (
    <TopNavigationAction
      onPress={themeContext.toggleTheme}
      icon={(props) => <Icon {...props} name={themeContext.theme === 'light' ? 'moon' : 'moon-outline'} />}
    />
  )

  const RenderRefreshButton = () => (
    <TopNavigationAction
      disabled={disabled ? true : false}
      onPress={onRefresh}
      icon={(props) => <Icon {...props} name='refresh-outline' />}
    />
  )

  const renderActions = () => (
    <>
      <RenderRefreshButton />
      <RenderThemeChanger />
    </>
  )

  return (
    <>
      <TopNavigation
        alignment='center'
        title='Leaderboard'
        subtitle='The sussy leaderboard'
        accessoryRight={renderActions}
        style={{ marginTop: Constants.statusBarHeight }}
      />
      <Divider />
    </>
  )
}

export default LeaderBoardNav;