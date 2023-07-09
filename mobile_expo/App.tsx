import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation/Router';
import { AppRegistry } from 'react-native';
const name = 'mobile_expo';

AppRegistry.registerComponent(name, () => App);

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
// import React from 'react';
// import { StatusBar } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';
// import { AppRegistry } from 'react-native';
// import Router from './src/navigation/Router';
// import { name as appName } from './app.json';
// import { createBrowserApp } from '@react-navigation/web';

// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <StatusBar backgroundColor='black' />
//       <NavigationContainer>
//         <Router />
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// };

// // Wrap the app component with createBrowserApp to make it compatible with React Native Web
// const AppContainer = createBrowserApp(App);

// // Register the app component with the provided app name
// AppRegistry.registerComponent(appName, () => AppContainer);

// export default AppContainer;
