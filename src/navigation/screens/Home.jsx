import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import CoffeList from '../../components/CoffeeList';
import ScrollTop from '../../components/ScrollTop';

export function Home() {
  return (
    <View style = {styles.container}>
      <CoffeList />
      <ScrollTop />
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    
  },
});
