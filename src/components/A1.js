import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const A1 = ({navigation}) => (
  <View style={styles.container}>
    <Text>A1</Text>
    <Button title="A2" onPress={() => navigation.navigate('A2')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default A1;
