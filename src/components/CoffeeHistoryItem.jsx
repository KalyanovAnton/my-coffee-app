import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useContext } from "react";
import { THEMES } from "../constants/themes";
import { ThemeContext } from "../context/ThemeContext";
import { addItemToHistory } from "../store/historySlice";

function CoffeeHistoryItem({ order }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = THEMES[theme];
  const navigation = useNavigation();
  const itemPreview = order.items
    .map((item) => `${item.name} (x${item.quantity})`)
    .join(", ");

  const handleGoBag = useCallback(() => {
    navigation.navigate("DoneOrder");
  });
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor:
            currentTheme.cardBackground || currentTheme.background,
        },
      ]}
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
        {itemPreview}
      </Text>

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleGoBag} style={styles.btnHistoriOrder}>
          <Text style={styles.textBtn}>Замовити знову</Text>
        </TouchableOpacity>
        <Text style={[styles.totalAmount, { color: currentTheme.text }]}>
          Загальна сума: {order.totalAmount.toFixed(2)}€
        </Text>
      </View>
    </View>
  );
}

export default React.memo(CoffeeHistoryItem);

const styles = StyleSheet.create({
  card: {
    width: "90%",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
    marginLeft: "auto",
    marginRight: "auto",
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
    justifyContent: "space-between",
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#523308",
  },
  btnHistoriOrder: {
    width: "45%",
    backgroundColor: "#523308",
    borderRadius: 12,
    padding: 12,
  },

  textBtn: {
    color: "#FFFFFF",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 15,
  },
});
