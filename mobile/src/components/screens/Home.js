import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';


const Home = () => {
   return (
      <View style={{backgroundColor: 'white', height: '100%'}}>
         <StatusBar
            backgroundColor="white"
            barStyle="dark-content"
            animated={true}
         />
         <View
            style={{
               justifyContent: 'space-between',
               flexDirection: 'row',
               paddingHorizontal: 15,
               alignItems: 'center',
            }}
         >
            <AntDesign name="home" style={{fontSize: 24}} />
            <Text
               style={{
                  fontFamily: 'Lobster-Regular',
                  fontSize: 25,
                  fontWeight: '500',
               }}
            >
               Instakilogram
            </Text>
            <Feather name="navigation" style={{fontSize: 24}} />
         </View>

         <ScrollView>
            <Stories />
            <Post />
            <View
               style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 20,
               }}
            ></View>
         </ScrollView>
      </View>
   )
}

export default Home;
