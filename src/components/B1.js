import React, {useLayoutEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const B1 = ({navigation}) => {
  useLayoutEffect(() => {
    const rootNavigation = navigation.dangerouslyGetParent();

    if (typeof rootNavigation !== 'undefined') {
      // Change the title of the root navigation header
      rootNavigation.setOptions({
        title: 'B1 Component: B1',
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
