import React, {useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {Linking} from 'react-native';
import {TextInput} from 'react-native-paper';

import Container from '../../components/Container/Container';
import Content from '../../components/Content/Content';
import Register from '../Register/Register';

import styles from './Login.styles';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
const trueEmail = 'E';
const truePassword = '1';

const Login = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigations = useNavigation();
  const handleNavigateToRegister = () => {
    navigations.navigate('Register');
  };
  const onLogin = async () => {
    try {
      const data = await axios.post('http://10.0.2.2:8080/auth/login', {
        email,
        password,
      });
      console.log('🚀 ~ file: Login.js:31 ~ onLogin ~ data:', data);
      handleCheckLogin(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckLogin = data => {
    console.log('🚀 ~ file: Login.js:39 ~ handleCheckLogin ~ data:', data);
    if (data?.message === 'oke!') {
      navigation.reset({
        index: 0,
        routes: [{email: 'BottomTab'}],
      });
    } else {
      Alert.alert('Sai tên đăng nhập hoặc mật khẩu');
    }
  };

  return (
    <Container insets={{top: true, bottom: true}}>
      <Content>
        <View style={{flex: 1}}>
          <View style={styles.topContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: 'white', opacity: 0.6, fontSize: 14}}>
                Ngôn Ngữ (Tiếng Việt)
              </Text>
              <Image
                source={require('../../../assets/images/down.png')}
                style={{width: 12, height: 12}}
              />
            </View>
            <Image
              style={styles.logo}
              source={require('../../../assets/images/instagram_text_logo.png')}
            />
          </View>

          <View style={styles.keyboardView}>
            <TextInput
              theme={{colors: {text: 'white'}}}
              placeholder="Tên đăng nhập"
              onChangeText={item => setEmail(item)}
              placeholderTextColor="grey"
              selectionColor="grey"
              style={styles.textInput}
              activeOutlineColor="grey"
              activeUnderlineColor="#3a3a3a"
            />

            <TextInput
              theme={{colors: {text: 'white'}}}
              placeholder="Mật khẩu"
              placeholderTextColor="grey"
              onChangeText={itemP => setPassword(itemP)}
              style={styles.textInput}
              selectionColor="grey"
              secureTextEntry={passwordVisible}
              activeUnderlineColor="#3a3a3a"
              activeOutlineColor="#3a3a3a"
              right={
                <TextInput.Icon
                  color={'grey'}
                  email={passwordVisible ? 'eye-off' : 'eye'}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
            />
            {/* <TouchableOpacity
              onPress={() => {
                trueEmail === email && truePassword === password
                  ? navigation.reset({
                      index: 0,
                      routes: [{email: 'BottomTab'}],
                    })
                  : Alert.alert('Sai tên đăng nhập hoặc mật khẩu');
              }}
              style={styles.login}
              disabled={email === null && password === null ? true : false}> */}
            <TouchableOpacity
              onPress={() => onLogin()}
              style={styles.login}
              disabled={email === null && password === null ? true : false}>
              <Text style={styles.loginText}>Đăng Nhập</Text>
            </TouchableOpacity>

            <View style={{alignItems: 'center', padding: 10}}>
              <View style={styles.text}>
                <Text style={{fontSize: 12, color: 'grey'}}>
                  Bạn chưa có Tài Khoản?{' '}
                </Text>
                <Text style={styles.help} onPress={handleNavigateToRegister}>
                  Tạo tài khoản mới.
                </Text>
              </View>

              <View style={styles.seperatorStyle}>
                <View style={styles.seperator} />
                <Text style={{color: 'grey'}}> Hoặc </Text>
                <View style={styles.seperator} />
              </View>

              <View style={styles.facebook}>
                <Image
                  source={require('../../../assets/images/facebook.png')}
                />
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL('https://www.facebook.com/login/');
                  }}>
                  <Text style={styles.faceText}>Đăng nhập với Facebook</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.bottom}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 12, color: 'grey', marginTop: 15}}>
                  Chưa có tài khoản?{' '}
                </Text>
                <Text style={{...styles.help, marginTop: 15}}> Đăng ký. </Text>
              </View>

              <View style={styles.line} />
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};
export default Login;
