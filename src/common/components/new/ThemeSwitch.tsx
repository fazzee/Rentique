import {Switch} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import React from 'react';

interface ThemeSwitchProps {
  setTheme: (theme: boolean) => void;
  handleToggleTheme: () => void;
}

const ThemeSwitch = ({setTheme}: ThemeSwitchProps) => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const handleToggleTheme = () => dispatch(setTheme(!theme));

  setTheme(theme);

  return (
    <Switch
      trackColor={{false: '#767577', true: '#E6E6E6'}}
      thumbColor={theme ? '#004225' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={handleToggleTheme}
      value={theme}
    />
  );
};

export default ThemeSwitch;
