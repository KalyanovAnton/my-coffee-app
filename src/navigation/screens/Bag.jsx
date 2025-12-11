import { StyleSheet, View, FlatList, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CoffeeBagItem from "../../components/CoffeeBagItem";
import Button from "../../components/Button";
import { THEMES } from "../../constants/themes";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { clearBag } from "../../store/bagSlice";
import { addItemToHistory } from "../../store/historySlice";

export function Bag() {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const bagItem = useSelector((state) => state.bag.items);
  const totalAmount = useSelector((state) => state.bag.totalAmount);
  const hendleCoffeeBuy = () => {
    navigation.navigate('DoneOrder')
    dispatch(clearBag())
    dispatch(addItemToHistory({
      items: bagItem,
      totalAmount: totalAmount
    }))
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  const currentTheme = THEMES[theme];

  if (!bagItem || bagItem.length === 0) {
    return (
      <View
        style={[styles.bagNoItem, { backgroundColor: currentTheme.background }]}
      >
        <Text style={[styles.bagEmpty, {color: currentTheme.text}]}>Кошик пустий</Text>
      </View>
    );
  }

  return (
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}
    >
      <FlatList
        style={styles.coffeeList}
        data={bagItem}
        renderItem={({ item }) => <CoffeeBagItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={1}
        key={2}
      />
      <View style={styles.totalContainer}>
        <Text style={[styles.totalLabel, { color: currentTheme.text }]}>
          Total
        </Text>
        <Text style={[styles.totalAmount, { color: currentTheme.text }]}>
          {totalAmount.toFixed(2)}€
        </Text>
      </View>
      <Button text="Checkout" onPress={hendleCoffeeBuy} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#ffffff",
  },
  coffeeList: {
    flex: 1,
    padding: 15,
  },

  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
    paddingTop: 3,
    paddingBottom: 0,
  },

  totalLabel: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    color: "#71727A",
  },

  totalAmount: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 16,
    lineHeight: 19,
    color: "#1F2024",
  },

  bagNoItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  bagEmpty: {
    fontSize: 18,
    fontWeight: 400,
  },
});
