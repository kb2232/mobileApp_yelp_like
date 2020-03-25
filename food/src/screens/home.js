import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Home() {
  return (
    <View style={styles.container}>
      <Text>this is the page</Text>
      <Button title="awesome" onPress={()=>console.log("i")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;