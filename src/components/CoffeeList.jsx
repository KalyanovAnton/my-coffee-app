import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import CoffeeItem from "../components/CoffeeItem";
import React, { useEffect, useState } from "react";
import RequestCofee from "./Requests";

export default function CoffeList() {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await RequestCofee();
      if (data && data.length > 0) {
        setCoffees(data);
      } else {
        setError("Меню не знайдено або порожнє.");
      }
    } catch (e) {
      console.error("Критична помилка завантаження:", e);
      setError(
        "Не вдалося завантажити дані. Перевірте з'єднання"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#523308" />
        <Text style={{ marginTop: 10 }}>Завантаження меню з MockAPI...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}> Помилка: {error}</Text>
        <TouchableOpacity style={{ color: "blue", marginTop: 10 }} onPress={fetchData}>
          <Text>Спробувати ще раз</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.coffeeList }
      data={coffees}
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
