import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { Linking } from 'react-native';
import { TextInput } from 'react-native-paper';

import Container from '../../components/Container/Container';
import Content from '../../components/Content/Content';

import styles from './Register.styles';
import { validateInputs } from '../../utils/validateInput';

const Register = ({ navigation }) => {
   const [passwordVisible, setPasswordVisible] = useState(true);
   const [name, setName] = useState(null);
   const [password, setPassword] = useState(null);
   const [email, setEmail] = useState(null);
   const [confirmPassword, setConfirmPassword] = useState(null);

   return (
      <Container insets={{ top: true, bottom: true }}>
         <Content>
            <View style={{ flex: 1 }}>
               <View style={styles.topContainer}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                     <Text style={{ color: 'white', opacity: 0.6, fontSize: 14 }}>
                        Ngôn Ngữ (Tiếng Việt)
                     </Text>
                     <Image
                        source={require('../../../assets/images/down.png')}
                        style={{ width: 12, height: 12 }}
                     />
                  </View>
                  <Image
                     style={styles.logo}
                     source={require('../../../assets/images/instagram_text_logo.png')}
                  />
               </View>

               <View style={styles.keyboardView}>
                  <TextInput
                     theme={{ colors: { text: 'white' } }}
                     placeholder='Tên đăng nhập '
                     onChangeText={item => setName(item)}
                     placeholderTextColor='grey'
                     selectionColor='grey'
                     style={styles.textInput}
                     activeOutlineColor='grey'
                     activeUnderlineColor='#3a3a3a'
                  />

                  <TextInput
                     theme={{ colors: { text: 'white' } }}
                     placeholder='Email của bạn'
                     onChangeText={item => setEmail(item)}
                     placeholderTextColor='grey'
                     selectionColor='grey'
                     style={styles.textInput}
                     activeOutlineColor='grey'
                     activeUnderlineColor='#3a3a3a'
                  />

                  <TextInput
                     theme={{ colors: { text: 'white' } }}
                     placeholder='Mật khẩu của bạn'
                     placeholderTextColor='grey'
                     onChangeText={item => setPassword(item)}
                     style={styles.textInput}
                     selectionColor='grey'
                     secureTextEntry={passwordVisible}
                     activeUnderlineColor='#3a3a3a'
                     activeOutlineColor='#3a3a3a'
                     right={
                        <TextInput.Icon
                           color={'grey'}
                           name={passwordVisible ? 'eye-off' : 'eye'}
                           onPress={() => setPasswordVisible(!passwordVisible)}
                        />
                     }
                  />
                  <TextInput
                     theme={{ colors: { text: 'white' } }}
                     placeholder='Xác nhận lại mật khẩu'
                     placeholderTextColor='grey'
                     onChangeText={item => setConfirmPassword(item)}
                     style={styles.textInput}
                     selectionColor='grey'
                     secureTextEntry={passwordVisible}
                     activeUnderlineColor='#3a3a3a'
                     activeOutlineColor='#3a3a3a'
                     right={
                        <TextInput.Icon
                           color={'grey'}
                           name={passwordVisible ? 'eye-off' : 'eye'}
                           onPress={() => setPasswordVisible(!passwordVisible)}
                        />
                     }
                  />
                  <TouchableOpacity
                     onPress={() => {
                        validateInputs(name, email, password, confirmPassword);
                     }}
                     style={styles.login}
                     // disabled={name === null && password === null ? true : false}>
                  >
                     <Text style={styles.loginText}>Đăng Kí</Text>
                  </TouchableOpacity>

                  <View style={{ alignItems: 'center', padding: 10 }}>
                     <View style={styles.text}>
                        <Text style={{ fontSize: 12, color: 'grey' }}>Bạn đã có Tài Khoản? </Text>
                        <Text style={styles.help}> Trở về đăng nhập</Text>
                     </View>

                     <View style={styles.seperatorStyle}>
                        <View style={styles.seperator} />
                        <Text style={{ color: 'grey' }}> Hoặc </Text>
                        <View style={styles.seperator} />
                     </View>

                     <View style={styles.facebook}>
                        <Image source={require('../../../assets/images/facebook.png')} />
                        <TouchableOpacity
                           onPress={() => {
                              Linking.openURL('https://www.facebook.com/login/');
                           }}
                        >
                           <Text style={styles.faceText}>Đăng nhập với Facebook</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>

               <View style={styles.bottomContainer}>
                  <View style={styles.bottom}>
                     <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 12, color: 'grey', marginTop: 15 }}>
                           Chưa có tài khoản?{' '}
                        </Text>
                        <Text style={{ ...styles.help, marginTop: 15 }}> Đăng ký.</Text>
                     </View>

                     <View style={styles.line} />
                  </View>
               </View>
            </View>
         </Content>
      </Container>
   );
};
export default Register;
