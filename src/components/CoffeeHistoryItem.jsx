import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContext } from "react";
import { THEMES } from "../constants/themes";
import { ThemeContext } from "../context/ThemeContext";
import { useDispatch } from "react-redux";

export default function CoffeeHistoryItem({ order }) {
  const dispatch = useDispatch()
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = THEMES[theme];
  const navigation = useNavigation();
  const itemPreview = order.items
    .map((item) => `${item.name} (x${item.quantity})`)
    .slice(0, 2)
    .join(", ");

    const handleGoBag = () => {
      navigation.navigate('HomeTabs', { screen: "Bag" })
    }
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor:
            currentTheme.cardBackground || currentTheme.background,
        },
      ]}
      onPress={handleGoBag}
    >
      <Text
        style={[
          styles.orderDate,
          { color: currentTheme.textSecondary || "#71727A" },
        ]}
      >
        Замовлення від: {order.date}
      </Text>

      <Text style={[styles.previewText, { color: currentTheme.text }]}>
        {itemPreview} {order.items.length > 2 ? "та ін." : ""}
      </Text>

      <View style={styles.footer}>
        <Text style={[styles.totalAmount, { color: currentTheme.text }]}>
          Загальна сума: {order.totalAmount.toFixed(2)}€
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  orderDate: {
    fontSize: 12,
    marginBottom: 8,
  },
  previewText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#523308",
  },
});
