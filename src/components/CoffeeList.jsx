import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import CoffeeItem from "../components/CoffeeItem";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import RequestCofee from "./Requests";
import ScrollTop from "./ScrollTop";
import Button from "./Button";
import { THEMES } from "../constants/themes";
import { ThemeContext } from "../context/ThemeContext";

export default function CoffeList({ searchTerm }) {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const flatListRef = useRef();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const currentTheme = THEMES[theme];
    

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
      setError("Не вдалося завантажити дані. Перевірте з'єднання");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#523308" />
        <Text style={[{ marginTop: 10 }, { color: currentTheme.text }]}>Завантаження меню з MockAPI...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={[styles.errorText, { color: currentTheme.text }]}> Помилка: {error}</Text>
        <Button onPress={fetchData} text="Спробувати ще раз" />
      </View>
    );
  }

  const filteredCoffees = coffees.filter((coffee) => {
    return coffee.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (filteredCoffees.length === 0 && searchTerm) {
    return (
      <View style={styles.centerContainer}>
        <Text style={[styles.errorText, { color: currentTheme.text }]}>
          Каву з назвою "{searchTerm}" не знайдено.
        </Text>
      </View>
    );
  }

  const handleScrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        style={styles.coffeeList}
        data={filteredCoffees}
        renderItem={({ item }) => <CoffeeItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        key={2}
        contentContainerStyle={styles.listContentContainer}
      />
      <ScrollTop onPressScroll={handleScrollToTop} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coffeeList: {
    flex: 1,
    padding: 15,
  },
  listContentContainer: {
    paddingBottom: 24,
  },

  centerContainer: {
    flex: 1,
    justifyContent: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  errorText: {
    fontWeight: 700,
    fontSize: 16,
    marginBottom: 16,
  },
});
