import { useTheme } from "../context/ThemeContext";
import React from 'react';
import { Switch, Text, View, StyleSheet } from 'react-native';



export default function ThemeToggle(){
    const {theme, toggleTheme} = useTheme()
    const isDark = theme === 'dark';

    return (
    <View style={styles.container}>
      <Text style={{ color: isDark ? '#FFFFFF' : '#000000' }}>
        {isDark ? 'Темна тема' : 'Світла тема'}
      </Text>
      <Switch
        onValueChange={toggleTheme}
        value={isDark}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 8,
  },
});