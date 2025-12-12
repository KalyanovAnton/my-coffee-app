import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import CoffeeDetails from "../navigation/screens/CoffeeDetails";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useContext } from "react";
import { THEMES } from "../constants/themes";
import { ThemeContext } from "../context/ThemeContext";
import { useDispatch } from "react-redux";
import { deleteItem } from "../store/bagSlice";
import { Ionicons } from '@expo/vector-icons';

function CoffeeBagItem({ item }) {
  const navigation = useNavigation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = THEMES[theme];
  const dispatch = useDispatch();

  const handleDaleteItem = useCallback(() => {
    dispatch(deleteItem());
  });
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
        <View style={styles.nameContainer}>
          <Text style={[styles.name, { color: currentTheme.text }]}>
            {item.name}
          </Text>
          <TouchableOpacity onPress={handleDaleteItem}>
            <Ionicons name="trash-outline" style={styles.trashIcon} size={18} color="#423e3dff" />
          </TouchableOpacity>
        </View>
        <View style={styles.coffeeInfo}>
          <Text style={[styles.quantity, { color: currentTheme.text }]}>
            {item.quantity}
          </Text>
          <Text style={[styles.totalPrice, { color: currentTheme.text }]}>
            {item.totalPrice}€
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(CoffeeBagItem);

const styles = StyleSheet.create({
  nameContainer: {
     flexDirection: 'row',
     justifyContent: 'space-between'
  },
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
