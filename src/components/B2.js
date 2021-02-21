import React, {useLayoutEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const B2 = ({navigation}) => {
  useLayoutEffect(() => {
    const rootNavigation = navigation.dangerouslyGetParent();

    if (typeof rootNavigation !== 'undefined') {
      // Change the title of the root navigation header
      rootNavigation.setOptions({
        title: 'B2 Component: B2',
      });
    }
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>B2</Text>
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

export default B2;
