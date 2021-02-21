import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import A1 from './src/components/A1';
import A2 from './src/components/A2';
import B1 from './src/components/B1';
import B2 from './src/components/B2';
import CustomHeader from './src/components/CustomHeader';

const Stack = createStackNavigator();

const BStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="B1"
      component={B1}
      options={({route}) => ({title: `B Stack: ${route.name}`})}
    />
    <Stack.Screen
      name="B2"
      component={B2}
      options={({route}) => ({title: `B Stack: ${route.name}`})}
    />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        header: CustomHeader,
      }}>
      <Stack.Screen
        name="A1"
        component={A1}
        options={({route}) => ({title: `A Stack: ${route.name}`})}
      />
      <Stack.Screen
        name="A2"
        component={A2}
        options={({route}) => ({title: `A Stack: ${route.name}`})}
      />
      <Stack.Screen
        name="B1"
        component={BStack}
        options={({route}) => ({title: `A Stack: ${route.name}`})}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
