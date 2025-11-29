import { Text } from "@react-navigation/elements";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { addItemToBag } from "../../store/bagSlice";
import { useContext } from "react";
import { THEMES } from "../../constants/themes";
import { ThemeContext } from "../../context/ThemeContext";
import {ThemeToggleButton} from '../../components/ThemeToggleButton'

export function CoffeeDetails() {
  const route = useRoute();
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const currentTheme = THEMES[theme];

  const coffeeItem = route.params;

  const handleAddToBag = () => {
    console.log(coffeeItem);
    dispatch(addItemToBag(coffeeItem));
    alert(`${coffeeItem.name} додано до кошика!`);
  };

  

  return (
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}
    >
      <Image style={styles.image} source={{ uri: route.params.imageUrl }} />
      <View style={styles.infoContainer}>
        <Text style={[styles.name, { color: currentTheme.text }]}>
          {route.params.name}
        </Text>
        <Text style={[styles.price, { color: currentTheme.text }]}>
          {route.params.currency}
          {route.params.price}
        </Text>
        <Text
          style={[
            styles.description,
            { color: currentTheme.textSecondary || currentTheme.text },
          ]}
        >
          {route.params.description}
        </Text>
      </View>
      <View style={styles.bottomWrapper}>
        <ThemeToggleButton
          theme={theme}
          toggleTheme={toggleTheme}
          currentTheme={currentTheme}
        />
        <Button text="Add to bag" onPress={handleAddToBag} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  infoContainer: {
    flex: 1,
    padding: 24,
  },

  bottomWrapper: {
    padding: 24,
    paddingTop: 10,
  },

  description: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 16,
    color: "#71727A",
  },

  price: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 22,
    color: "#1F2024",
    marginBottom: 24,
  },

  name: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 20,
    lineHeight: 22,
    color: "#1F2024",
    marginBottom: 8,
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: "100%",
    height: "40%",
  },
});


