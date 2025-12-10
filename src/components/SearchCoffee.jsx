import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchCoffee({ searchTerm, setSearchTerm }) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={20} style={styles.searchIcon} />
        </TouchableOpacity>
        <TextInput
          style={styles.coffeeInput}
          placeholder="Шукати каву за назвою..."
          placeholderTextColor="#0b0b0bff"
          value={searchTerm} 
          onChangeText={setSearchTerm}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 56,
    marginBottom: 10,
  },

  innerContainer: {
    width: "90%",
    height: 50,
    borderRadius: 24,
    backgroundColor: "#F8F9FE",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#c3c0bbff",
  },

  coffeeInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 0,
  },
  searchIcon: {
    marginLeft: 20,
  },
});
