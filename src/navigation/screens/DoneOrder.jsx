import { Text, View, StyleSheet } from "react-native";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function DoneOrder() {
  const navigation = useNavigation();

  const handleGoHome = () => {
    navigation.navigate("HomeTabs", { screen: "Home" });
  };
  return (
    <View style={styles.container}>
      <View style={styles.doneInfo}>
        <View style={styles.doneIconBac}>
          <Ionicons name="checkmark-sharp" style={styles.doneIcon} size={100} />
        </View>
        <Text style={styles.doneText}>Зачекайте приблизно 5хв</Text>
        <Text>Тут незабаром з'явиться місцезнаходження кав'ярні</Text>
      </View>
      <Button text="Home" onPress={handleGoHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#ffffff'
  },

  doneInfo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  doneIconBac: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#523308",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  doneIcon: {
    color: "#ffffff",
  },

  doneText: {
    fontFamily: "Inter",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 15,
    color: "#000000",
    marginBottom: 16

  },
});
