import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import CoffeeDetails from "../navigation/screens/CoffeeDetails";
import { useNavigation } from "@react-navigation/native";

export default function CoffeeItem({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CoffeeDetails", {
          coffeeId: item.id,
          coffeName: item.name,
          coffeeImage: item.imageUrl,
          coffeeCurrency: item.currency,
          coffeePrice: item.price
        })
      }
      style={styles.card}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.cardImg} />
      <View style={styles.coffeeInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>
          {item.currency} {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

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
