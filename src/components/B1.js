import React, {useLayoutEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const B1 = ({navigation}) => {
  useLayoutEffect(() => {
    const rootNavigation = navigation.dangerouslyGetParent();

    if (typeof rootNavigation !== 'undefined') {
      // Hide the header of the root navigation stack.
      rootNavigation.setOptions({
        headerShown: false,
      });
    }
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>B1</Text>
      <Button title="B2" onPress={() => navigation.navigate('B2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default B1;
