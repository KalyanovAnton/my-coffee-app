import { useCallback } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function Button({ text, onPress }) {
  const scale = useSharedValue(1);
  const handlePressIn = useCallback(() => {
    scale.value = withSpring(0.95, { damping: 10, stiffness: 150 });
  }, [scale]);
  const handlePressOut = useCallback(() => {
    scale.value = withSpring(1, { damping: 10, stiffness: 150 });

    if (onPress) {
      onPress();
    }
  }, [scale]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
        style={styles.button}
      >
        <Text style={styles.textBtn}>{text}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 48,
    backgroundColor: "#523308",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 4,
    marginBottom: 36,
  },

  textBtn: {
    color: "#FFFFFF",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 15,
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});
