import { Text } from '@react-navigation/elements';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, View, Image } from 'react-native';

export function CoffeeDetails() {
  const route = useRoute()
  return (
    <View style={styles.container}>
      <Image style = {styles.image} source={{uri: route.params.coffeeImage}}/>
      <Text>{route.params.coffeName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  image: {
    width:100,
    height: 100
  }
});
