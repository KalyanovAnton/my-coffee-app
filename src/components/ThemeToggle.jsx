import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import { THEMES } from '../constants/themes';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  

  const currentTheme = THEMES[theme];

  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: currentTheme.buttonBackground }]} 
      onPress={toggleTheme}
    >
      <Text style={[styles.text, { color: currentTheme.buttonText }]}>
        {theme === 'light' ? 'Перейти на Dark' : 'Перейти на Light'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});