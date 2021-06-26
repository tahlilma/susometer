import React, { useContext } from 'react';
import { TopNavigation, TopNavigationAction, Icon, Divider } from '@ui-kitten/components';
import Constants from 'expo-constants';
import { ThemeContext } from '../../theme-context';

const HomeNav = ({ name }) => {
  const themeContext = useContext(ThemeContext);

  const renderThemeChanger = () => (
    <TopNavigationAction
      onPress={themeContext.toggleTheme}
      icon={(props) => <Icon {...props} name={themeContext.theme === 'light' ? 'moon' : 'moon-outline'} />}
    />
  )

  return (
    <>
      <TopNavigation
        alignment='center'
        title='Susometer'
        style={{ marginTop: Constants.statusBarHeight }}
        subtitle={`${name} Test Your SUS`}
        accessoryRight={renderThemeChanger}
      />
      <Divider />
    </>
  )
}

export default HomeNav;