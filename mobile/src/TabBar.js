/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const TabBar = ({state, descriptors, navigation}) => {
   return (
      <View style={styles.container}>
         {state.routes.map((route, index) => {
            const isFocused = state.index === index
            const onPress = () => {
               const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
               })

               if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name)
               }
            }

            let iconName
            if (route.name === 'Home') {
               iconName = 'home'
            } else if (route.name === 'Search') {
               iconName = 'search1'
            } else if (route.name === 'Video') {
               iconName = 'videocamera'
            } else if (route.name === 'Profile') {
               iconName = 'home'
            } else if (route.name === 'Favorites') {
               iconName = 'home'
            }

            return (
               <TouchableOpacity
                  key={route.key}
                  onPress={onPress}
                  style={styles.tabItem}
               >
                  <AntDesign name={iconName} style={{fontSize: 24}} />
               </TouchableOpacity>
            )
         })}
      </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        borderTopWidth: 1,
        borderTopColor: '#DDDDDD',
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TabBar;
