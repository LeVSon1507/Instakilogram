import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Container from '../../components/Container/Container';

import styles from './Post.styles';

const SinglePost = ({navigation}) => {
  return (
    <Container insets={{top: true, bottom: true}}>
      <View>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.label}>Bài viết</Text>
        </View>
        <View style={{marginBottom: 10, marginTop: 15}}>
          <View style={styles.top}>
            <View style={styles.topleft}>
              <Image
                source={require('../../storage/images/profil.jpg')}
                style={styles.profilImage}
              />
              <Text style={styles.title}>LVS</Text>
            </View>

            <TouchableOpacity style={{alignSelf: 'center', marginRight: 10}}>
              <Feather name="more-vertical" size={20} color="#F5F5F5" />
            </TouchableOpacity>
          </View>

          <View style={{height: 400}}>
            <Image
              source={require('../../storage/images/post.jpg')}
              style={styles.image}
            />
          </View>

          <View style={styles.iconContainer}>
            <View style={styles.leftIcon}>
              <TouchableOpacity>
                <AntDesign name={'hearto'} size={24} color={'white'} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Feather name="message-circle" size={24} color="white" />
              </TouchableOpacity>
              <Feather name="send" size={24} color="white" />
            </View>

            <View style={{marginRight: 20}}>
              <FontAwesome name="bookmark-o" size={24} color="white" />
            </View>
          </View>

          <Text style={styles.likeText}>700 lượt thích</Text>

          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={styles.postName}>LVS</Text>
            <Text style={{color: 'white', marginTop: 2}}> mỉm cười..</Text>
          </View>

          <Text style={styles.comment}>Xem tất cả 2 bình luận</Text>

          <Text style={styles.time}>10 tháng 10</Text>
        </View>
      </View>
    </Container>
  );
};
export default SinglePost;
