import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";
import { THEMES } from "../../constants/themes";
import { ThemeContext } from "../../context/ThemeContext";
import { ThemeToggleButton } from "../../components/ThemeToggleButton";

export default function SettingsScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = THEMES[theme];

  return (
    <View style={[styles.bottomWrapper, { backgroundColor: currentTheme.background }]}>
      <ThemeToggleButton
        theme={theme}
        toggleTheme={toggleTheme}
        currentTheme={currentTheme}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  bottomWrapper: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
});