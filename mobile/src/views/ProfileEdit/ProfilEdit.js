import React, {useRef, useState} from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import DefaultImage from '../../../assets/images/profil.jpg';

import styles from './ProfilEdit.style';

const ProfilEdit = () => {
  const [name, setName] = useState('Son');
  const [bio, setBio] = useState('Sonlvs');
  const [image, setImage] = useState();
  const navigation = useNavigation();
  const bottomSheet = useRef();

  const chooseFromLibrary = () => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
    }).then(images => {
      setImage(images?.path);
      bottomSheet.current.close();
    });
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={{margin: 10}}>
        <View style={styles.topContainer}>
          <View style={styles.left}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name="window-close" size={32} color="white" />
            </TouchableOpacity>
            <Text style={styles.label}>Chỉnh sửa hồ sơ</Text>
          </View>

          <View style={styles.right}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate({
                  name: 'Account',
                  params: {
                    name: name,
                    bio: bio,
                    image: image,
                  },
                })
              }>
              <AntDesign
                name="check"
                size={32}
                color="#0098fd"
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={image ? {uri: image} : DefaultImage}
          />

          <TouchableOpacity onPress={() => bottomSheet.current.show()}>
            <Text style={styles.change}> Thay đổi ảnh đại diện</Text>
          </TouchableOpacity>

          <BottomSheet
            hasDraggableIcon
            ref={bottomSheet}
            height={350}
            sheetBackgroundColor="#262626">
            <View style={{marginLeft: 10}}>
              <View style={{marginTop: 25, marginBottom: 15}}>
                <Text style={styles.sheetText}>Thay đổi ảnh đại diện</Text>
              </View>

              <View style={styles.lineGrey} />

              <TouchableOpacity
                style={{marginVertical: 20}}
                onPress={chooseFromLibrary}>
                <Text style={styles.sheetText}>Ảnh đại diện mới</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginVertical: 15}}
                onPress={() => {
                  Linking.openURL('https://www.facebook.com/login/');
                }}>
                <Text style={styles.sheetText}>Nhập từ Facebook</Text>
              </TouchableOpacity>
              <View style={{marginVertical: 15}}>
                <Text style={styles.sheetText}>Sử dụng Avatar</Text>
              </View>
              <View style={{marginVertical: 15}}>
                <Text
                  style={{color: '#be363f', fontWeight: '500', fontSize: 18}}>
                  Xóa ảnh đại diện
                </Text>
              </View>
            </View>
          </BottomSheet>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Tên</Text>
          <TextInput style={styles.input} onChangeText={item => setName(item)}>
            {name}
          </TextInput>
          <View style={styles.line} />
          <Text style={styles.inputLabel}>Tên người dùng</Text>
          <Text style={styles.input}>LVS</Text>
          <View style={styles.line} />
          <Text style={styles.inputLabel}>Tiểu sử</Text>
          <TextInput style={styles.input} onChangeText={item => setBio(item)}>
            {bio}
          </TextInput>
          <View style={styles.line} />
        </View>
        <View style={styles.lineGrey}>
          <Text
            style={{
              color: 'white',
              marginTop: 15,
              fontSize: 19,
              marginLeft: 10,
              marginBottom: 5,
            }}>
            Thêm liên kết
          </Text>
        </View>

        <View style={styles.blueContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('OnboardingScreen')}>
            <Text style={styles.blueText}>
              Chuyển đến Tài khoản chuyên nghiệp
            </Text>
          </TouchableOpacity>

          <Text style={styles.blueText}>Chỉnh sửa Avatar</Text>

          <Text style={styles.blueText}>Cài đặt thông tin cá nhân</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilEdit;
