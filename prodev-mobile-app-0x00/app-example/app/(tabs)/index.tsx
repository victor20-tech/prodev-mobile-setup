import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>First App Created</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
