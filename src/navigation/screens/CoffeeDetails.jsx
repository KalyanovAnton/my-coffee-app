import { Text } from "@react-navigation/elements";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { addItemToBag } from "../../store/bagSlice";
import { useContext, useEffect } from "react";
import { THEMES } from "../../constants/themes";
import { ThemeContext } from "../../context/ThemeContext";
import { ThemeToggleButton } from "../../components/ThemeToggleButton";
import Animated , {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export function CoffeeDetails() {
  const AnimatedImage = Animated.createAnimatedComponent(Image);
  const route = useRoute();
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const currentTheme = THEMES[theme];

  const coffeeItem = route.params;

  const handleAddToBag = () => {
    dispatch(addItemToBag(coffeeItem));
    alert(`${coffeeItem.name} додано до кошика!`);
  };

  const translateY = useSharedValue(300);
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateY.value = withTiming(0, { duration: 700 });
    opacity.value = withTiming(1, { duration: 400 });
  }, []);

  const infoAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(1, { duration: 700 }),
      transform: [{ translateY: translateY.value * -0.5 }]
    };
  });

  return (
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}
    >
      <AnimatedImage
        style={[styles.image, imageAnimatedStyle]}
        source={{ uri: route.params.imageUrl }}
      />
      <Animated.View style={[styles.infoContainer, infoAnimatedStyle]}>
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
      </Animated.View>
      <View style={styles.bottomWrapper}>
        <ThemeToggleButton
          theme={theme}
          toggleTheme={toggleTheme}
          currentTheme={currentTheme}
        />
      </View>
      <Button text="Add to bag" onPress={handleAddToBag} />
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
