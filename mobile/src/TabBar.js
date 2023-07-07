/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faMagnifyingGlass, faVideo, faPerson, faHeart } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/Ionicons';

const TabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const changeIcon = () => {
                    if (route.name === 'Home') {
                        return <FontAwesomeIcon icon={faHouse} />;
                    }
                    if (route.name === 'Search') {
                        return <FontAwesomeIcon icon={faMagnifyingGlass} />;
                    }
                    if (route.name === 'Reels') {
                        return <FontAwesomeIcon icon={faVideo} />;
                    }
                    if (route.name === 'Activity') {
                        return <FontAwesomeIcon icon={faHeart} />;
                    }
                    if (route.name === 'Profile') {
                        return <FontAwesomeIcon icon={faPerson} />;
                    }
                    // Return a default icon name in case the route name doesn't match any of the above conditions
                };




                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={styles.tabItem}
                    >
                        {/* {changeIcon()} */}
                        <MaterialCommunityIcons name="home" color="#4F8EF7" size={30} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

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
