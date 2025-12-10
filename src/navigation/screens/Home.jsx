import { Text } from "@react-navigation/elements";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import CoffeList from "../../components/CoffeeList";
import ScrollTop from "../../components/ScrollTop";
import { ThemeToggleButton } from "../../components/ThemeToggleButton";
import { THEMES } from "../../constants/themes";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useEffect, useState } from "react";
import SearchCoffee from "../../components/SearchCoffee";

export function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState("");
  
  const currentTheme = THEMES[theme];
  return (
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}
    >
      <SearchCoffee searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <CoffeList searchTerm={searchTerm}/>
      <ScrollTop />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
