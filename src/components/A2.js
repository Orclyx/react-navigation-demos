import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const A2 = ({navigation}) => (
  <View style={styles.container}>
    <Text>A2</Text>
    <Button title="B1" onPress={() => navigation.navigate('B1')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default A2;
