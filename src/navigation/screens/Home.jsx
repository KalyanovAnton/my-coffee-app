import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";
import CoffeList from "../../components/CoffeeList";
import ScrollTop from "../../components/ScrollTop";
import { ThemeToggleButton } from "../../components/ThemeToggleButton";
import { THEMES } from "../../constants/themes";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

export function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const currentTheme = THEMES[theme];
  return (
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}
    >
      <CoffeList />
      <ScrollTop />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
