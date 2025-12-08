import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import CoffeeDetails from "../navigation/screens/CoffeeDetails";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import React, { useCallback, useContext } from "react";
import { THEMES } from "../constants/themes";
import { ThemeContext } from "../context/ThemeContext";

function CoffeeItem({ item }) {
  const navigation = useNavigation();
  const scale = useSharedValue(1);
  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = THEMES[theme];
  const handlePressIn = useCallback(() => {
    scale.value = withSpring(0.95, { damping: 10, stiffness: 150 });
  }, [scale]);

  const handlePressOut = useCallback(() => {
    scale.value = withSpring(1, { damping: 10, stiffness: 150 });
  }, [scale]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handleNavigation = useCallback(() => {
    navigation.navigate("CoffeeDetails", {
      id: item.id,
      name: item.name,
      imageUrl: item.imageUrl,
      currency: item.currency,
      price: item.price,
      description: item.description,
      options: item.options || {},
    });
  }, [navigation, item]);

  return (
    <AnimatedTouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      onPress={handleNavigation}
      style={[styles.card, animatedStyle]}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.cardImg} />
      <View style={[styles.coffeeInfo, { backgroundColor: currentTheme.background }]}>
        <Text style={[styles.name, { color: currentTheme.text }]}>{item.name}</Text>
        <Text style={[styles.price, { color: currentTheme.text }]}>
          {item.currency} {item.price}
        </Text>
      </View>
    </AnimatedTouchableOpacity>
  );
}

export default React.memo(CoffeeItem);

const styles = StyleSheet.create({
  cardImg: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  card: {
    flex: 1,
    width: "50%",
    backgroundColor: "#F8F9FE",
    borderRadius: 16,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    margin: 6,
  },
  coffeeInfo: {
    padding: 16,
  },

  name: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 12,
    color: "#1F2024",
    marginBottom: 4,
  },
  price: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 17,
    color: "#1F2024",
  },
});
