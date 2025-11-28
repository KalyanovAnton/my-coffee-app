import { StyleSheet, View, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import CoffeeBagItem from "../../components/CoffeeBagItem";
import Button from "../../components/Button";

export function Bag() {
  const bagItem = useSelector((state) => state.bag.items);
  const totalAmount = useSelector((state) => state.bag.totalAmount);
  const hendleCoffeeBuy = () => {
    alert('good')
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.coffeeList}
        data={bagItem}
        renderItem={({ item }) => <CoffeeBagItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={1}
        key={2}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalAmount}>{totalAmount.toFixed(2)}€</Text>
      </View>
      <Button text='Checkout' onPress={hendleCoffeeBuy} />
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
    paddingBottom: 0
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
});
