import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ThemeToggleButton = ({ theme, toggleTheme, currentTheme }) => (
    <TouchableOpacity
      style={[
        toggleStyles.button,
        { backgroundColor: currentTheme.buttonBackground || "#D3D3D3" },
      ]}
      onPress={toggleTheme}
    >
      <Text
        style={[
          toggleStyles.text,
          { color: currentTheme.buttonText || "#1F2024" },
        ]}
      >
        Перемкнути на {theme === "light" ? "DARK" : "LIGHT"}
      </Text>
    </TouchableOpacity>
  );

  const toggleStyles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});