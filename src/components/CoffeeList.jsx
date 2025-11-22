import { StyleSheet, FlatList } from "react-native";
import coffee from "../../coffee.json";
import CoffeeItem from "../components/CoffeeItem";

export default function CoffeList() {
  return (
    <FlatList
      style={styles.coffeeList}
      data={coffee}
      renderItem={({ item }) => <CoffeeItem item={item} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
      key={2}
    />
  );
}

const styles = StyleSheet.create({
  coffeeList: {
    flex: 1,
    padding: 15,
  },
});
