import { StyleSheet, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ScrollTop() {
  return (
      <TouchableOpacity style={styles.scrollTop}>
        <Ionicons 
        name="chevron-up"
        size={32}      
        color="#FFF"     
      />
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  scrollTop: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: "#523308",
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    bottom: 30,
    right: 50, 
    zIndex: 1000
  }
});