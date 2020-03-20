/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import Home from './src/containers/home';
import SavedPhrases from './src/containers/savedPhrases';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen
            name="SavedPhrases"
            component={SavedPhrases}
            options={{title: 'Saved Phrases'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
