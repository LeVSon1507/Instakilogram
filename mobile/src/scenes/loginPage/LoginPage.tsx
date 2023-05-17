import {
   StyleSheet,
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

const LoginPage = () => {
   const navigation = useNavigation();
   const [userName, onChangeUserName] = React.useState('');
   const [password, onChangePassword] = React.useState('');

   const onCheckAccount = () => {
      const userNameDefault = 'nghiamoideptrai';
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
      <SafeAreaView style={{ backgroundColor: Color.Green, flex: 1 }}>
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
                  <Text style={{ color: Color.Black }}>Đăng Nhập</Text>
               </TouchableOpacity>
            </View>
            <Text
               style={{
                  color: Color.Orange,
                  fontSize: 25,
                  textAlign: 'center',
                  marginVertical: 30,
               }}
            >
               Welcome to Instakilogram!
            </Text>
            <Text
               style={{
                  color: Color.Orange,
                  fontSize: 16,
                  textAlign: 'center',
               }}
            >
               No. 1 social media in Asia
            </Text>
         </ScrollView>
      </SafeAreaView>
   );
};
const styles = StyleSheet.create({
   input: {
      height: 50,
      margin: 12,
      borderWidth: 2,
      borderColor: Color.Orange,
      padding: 10,
      borderRadius: 10,
   },
   inputFocus: {
      height: 50,
      margin: 12,
      borderWidth: 2,
      borderColor: Color.Orange,
      padding: 10,
      borderRadius: 10,
      backgroundColor: Color.White,
   },
   title: {
      color: Color.OveralRateBackground,
      fontSize: 40,
      textAlign: 'center',
      justifyContent: 'center',
      marginVertical: 20,
   },
   tinyLogo: {
      width: 200,
      height: 200,
      borderRadius: 50,
   },
   logo: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
   },
   loginBtn: {
      backgroundColor: Color.Yellow,
      height: 50,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: Color.Orange,
      borderWidth: 1,
      borderRadius: 10,
   },
});
export default LoginPage;
