import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//internal navigation
import HomePage from './src/scenes/homePage/HomePage';
import LoginPage from './src/scenes/loginPage/LoginPage';

const App = () => {
   return (
      <NavigationContainer >
         <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={HomePage} />
            <Stack.Screen name='Login' component={LoginPage} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default App;
