import { Text, View } from "react-native";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function DoneOrder() {
  const navigation = useNavigation();

  const handleGoHome = () => {
    navigation.navigate("HomeTabs", { screen: 'Home' });
  };
  return (
    <View>
      <Text>Done</Text>
      <Button text="Home" onPress={handleGoHome}/>
    </View>
  );
}
