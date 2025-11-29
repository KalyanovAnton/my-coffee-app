import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import CoffeeDetails from "../navigation/screens/CoffeeDetails";
import { useNavigation } from "@react-navigation/native";

export default function CoffeeBagItem({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CoffeeDetails", {
          id: item.id,
          name: item.name,
          imageUrl: item.imageUrl,
          currency: item.currency,
          price: item.price,
          description: item.description,
          quantity: item.quantity,
          totalPrice: item.totalPrice,
        })
      }
      style={styles.card}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.cardImg} />
      <View style={styles.detailsWrapper}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.coffeeInfo}>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <Text style={styles.totalPrice}>{item.totalPrice}€</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardImg: {
    width: "30%",
    height: 100,
    resizeMode: "cover",
    borderRadius: 16,
    marginRight: 16,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    overflow: "hidden",
    marginBottom: 24,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#d1cdcdff",
    marginBottom: 10,
  },
  coffeeInfo: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsWrapper: {
    flex: 1,
    justifyContent: "space-between",
    padding: 12,
  },

  name: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 15,
    color: "#1F2024",
  },
  totalPrice: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 17,
    color: "#1F2024",
  },
  quantity: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 20,
    color: "#1F2024",
  },
});
