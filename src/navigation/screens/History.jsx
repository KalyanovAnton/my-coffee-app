import { Text } from '@react-navigation/elements';
import { StaticScreenProps } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { useContext } from "react";
import { THEMES } from "../../constants/themes";
import { ThemeContext } from "../../context/ThemeContext";


export function History({route}) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const currentTheme = THEMES[theme];
  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <Text style = {{ color: currentTheme.text }}>Order will be here soon </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
