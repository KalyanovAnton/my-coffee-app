import { Text } from "@react-navigation/elements";
import { StaticScreenProps } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";
import { useContext, useRef } from "react";
import { THEMES } from "../../constants/themes";
import { ThemeContext } from "../../context/ThemeContext";
import { useSelector } from "react-redux";
import CoffeeHistoryItem from "../../components/CoffeeHistoryItem";
import ScrollTop from "../../components/ScrollTop";

export function History({ route }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = THEMES[theme];
  const historyItem = useSelector((state) => state.history.orders);
  const totalQuantity = useSelector((state) => state.history.totalQuantity);
  const flatListRef = useRef();

  if (!historyItem || historyItem.length === 0) {
    return (
      <View
        style={[
          styles.centerContainer,
          { backgroundColor: currentTheme.background },
        ]}
      >
        <Text style={[styles.emptyText, { color: currentTheme.text }]}>
          Історія замовлень порожня.
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
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}
    >
      <View style={styles.totalContainer}>
        <Text style={[styles.totalLabel, { color: currentTheme.text }]}>
          Total orders:
        </Text>
        <Text style={[styles.totalAmount, { color: currentTheme.text }]}>
          {totalQuantity}
        </Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          ref={flatListRef}
          style={styles.coffeeList}
          data={historyItem}
          renderItem={({ item }) => <CoffeeHistoryItem order={item} />}
          numColumns={1}
          key={2}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContentContainer}
        />
        <ScrollTop onPressScroll={handleScrollToTop} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  coffeeList: {
    width: "100%",
  },

  listContentContainer: {
    marginTop: 15,
    paddingBottom: 30,
  },

  totalContainer: {
    flexDirection: "row",
    padding: 24,
    paddingTop: 15,
    paddingBottom: 3,
    marginLeft: "auto",
    marginRight: "auto",
  },

  totalLabel: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 20,
    color: "#71727A",
    marginRight: 10,
  },

  totalAmount: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 16,
    lineHeight: 19,
    color: "#1F2024",
  },
  listContainer:{
    flex: 1
  },
  centerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },

  emptyText: {
     fontWeight: 600,
     fontSize: 18
  }
});
