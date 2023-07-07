import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ProfileBody, ProfileButtons } from '../screenComponents/ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabView from '../screenComponents/BottomTabView';
import { Icon } from '@rneui/themed';


const Profile = () => {
  let circuls = [];
  let numberofcircels = 10;

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Entypo name="plus" style={{ fontSize: 40, color: 'black' }} /> */}
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'black',
              opacity: 0.1,
              marginHorizontal: 5,
            }}></View>
        )}
      </View>,
    );
  }

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <View style={{ width: '100%', padding: 10 }}>
        <ProfileBody
          name="Son Dep Trai"
          accountName="mr_lvs"
          profileImage={require('../../storage/images/userProfile.png')}
          followers="6.9M"
          following="69"
          post="456"
        />
        <ProfileButtons
          id={0}
          name="Son Dep Trai"
          accountName="mr_lvs"
          profileImage={require('../../storage/images/userProfile.png')}
        />
      </View>
      <View>
        <Text
          style={{
            padding: 10,
            letterSpacing: 1,
            fontSize: 14,
          }}>
          Story Highlights
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          {circuls}
        </ScrollView>
      </View>
      <BottomTabView />
    </View>
  );
};

export default Profile;
