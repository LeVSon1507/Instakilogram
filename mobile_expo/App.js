import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Router from './src/navigation/Router';
AppRegistry.registerComponent(appName, () => App);

const App = () => {
   return (
      <SafeAreaProvider>
         <StatusBar backgroundColor='black' />
         <NavigationContainer>
            <Router />
         </NavigationContainer>
      </SafeAreaProvider>
   );
};
export default App;
