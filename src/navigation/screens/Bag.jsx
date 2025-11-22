import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';

export function Bag() {
  return (
    <View style={styles.container}>
      <Text>Content coming soon Bag</Text>
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
});
