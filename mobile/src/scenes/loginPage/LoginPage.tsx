import {
   Text,
   View,
   TextInput,
   TouchableOpacity,
   ScrollView,
   Image,
   SafeAreaView,
   Alert,
} from 'react-native';
import React from 'react';
import { Color } from '../../database/Database';
import { useNavigation } from '@react-navigation/native';
import { isEmpty } from 'lodash';
import { styles } from './AuthStyles';

const LoginPage = () => {
   const navigation = useNavigation();
   const [userName, onChangeUserName] = React.useState('');
   const [password, onChangePassword] = React.useState('');

   const onCheckAccount = () => {
      const userNameDefault = 'sondeptrai';
      const passwordDefault = '123';
      if (userName === userNameDefault && password === passwordDefault) {
         navigation.navigate('Home' as never);
      } else {
         Alert.alert('Lỗi', 'Tên đăng nhập hoặc mật khẩu sai', [
            {
               text: 'Thử lại',
               onPress: () => console.log('Thử lại'),
               style: 'cancel',
            },
            { text: 'Huỷ', onPress: () => console.log('Cancel Pressed') },
         ]);
      }
   };
   return (
      <SafeAreaView style={{ backgroundColor: Color.White, flex: 1, paddingTop: '20%' }}>
         <ScrollView>
            <View style={styles.logo}>
               <Image style={styles.tinyLogo} source={require('../../../assets/img/logo.png')} />
            </View>
            <Text style={styles.title}>Login</Text>
            <View>
               <TextInput
                  style={isEmpty(userName) ? styles.input : styles.inputFocus}
                  onChangeText={onChangeUserName}
                  value={userName}
                  placeholder='UserName'
                  placeholderTextColor={Color.BackgroundItemDropdown}
                  returnKeyType='next'
               />
               <TextInput
                  style={isEmpty(password) ? styles.input : styles.inputFocus}
                  onChangeText={onChangePassword}
                  placeholderTextColor={Color.BackgroundItemDropdown}
                  value={password}
                  placeholder='Password'
                  returnKeyType='done'
                  secureTextEntry={true}
               />
            </View>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
               <TouchableOpacity style={styles.loginBtn} onPress={() => onCheckAccount()}>
                  <Text style={{ color: Color.Black }}>Login</Text>
               </TouchableOpacity>
            </View>
            <Text
               style={{
                  color: Color.Orange,
                  fontSize: 25,
                  textAlign: 'center',
                  marginVertical: 15,
               }}
            >
               Welcome to Instakilogram!
            </Text>

            <Text
               style={{
                  color: Color.Orange,
                  fontSize: 16,
                  textAlign: 'center',
                  paddingBottom: 10,
               }}
            >
               Do not have an account?
            </Text>
            <TouchableOpacity
               style={{
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
               onPress={() => navigation.navigate('Register' as never)}
            >
               <Text
                  style={{
                     color: Color.YellowDisable,
                     fontSize: 20,
                     textAlign: 'center',
                  }}
               >
                  Please register
               </Text>
            </TouchableOpacity>
         </ScrollView>
      </SafeAreaView>
   );
};

export default LoginPage;
