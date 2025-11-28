import { createContext, useContext, useState } from "react";
import { Appearance } from "react-native";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme() || "light");
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    // Передаємо поточну тему та функцію перемикання в контекст
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme повинен використовуватися всередині ThemeProvider');
  }
  return context;
};