import { Text } from '@react-navigation/elements';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, View, Image } from 'react-native';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { addItemToBag } from '../../store/bagSlice';

export function CoffeeDetails() {
  const route = useRoute()
  const dispatch = useDispatch()

  const coffeeItem = route.params
  
  
  const handleAddToBag = () => {
    console.log(coffeeItem);
    dispatch(addItemToBag(coffeeItem))
    alert(`${coffeeItem.name} додано до кошика!`);
  }


  return (
    <>
      <Image style = {styles.image} source={{uri: route.params.imageUrl}}/>
      <Text>{route.params.name}</Text>
      <Button text='add to bag' onPress={handleAddToBag}/>
    </>
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
