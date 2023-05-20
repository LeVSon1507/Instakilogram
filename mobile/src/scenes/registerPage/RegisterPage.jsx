import React, { useState } from 'react';
import {
   View,
   Button,
   Text,
   TextInput,
   TouchableOpacity,
   ScrollView,
   Image,
   SafeAreaView,
   Platform,
} from 'react-native';
import { styles } from '../loginPage/AuthStyles';
import Color from '../../database/Database';
import * as ImagePicker from 'expo-image-picker';

const RegisterPage = () => {
   const initialValuesRegister = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      location: '',
      occupation: '',
      picture: null,
   };

   const [values, setValues] = useState(initialValuesRegister);

   const handleChange = (field, value) => {
      setValues({ ...values, [field]: value });
   };

   const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      });

      if (!result.canceled) {
         setValues({ ...values, picture: result.assets[0] });
      }
   };

   const handleSubmit = async () => {
      try {
         const formData = new FormData();
         formData.append('firstName', values.firstName);
         formData.append('lastName', values.lastName);
         formData.append('email', values.email);
         formData.append('password', values.password);
         formData.append('location', values.location);
         formData.append('occupation', values.occupation);

         if (values.picture) {
            formData.append('picture', {
               name: values.picture.fileName,
               type: values.picture.type,
               uri:
                  Platform.OS === 'android'
                     ? values.picture.uri
                     : values.picture.uri.replace('file://', ''),
            });
         }

         const savedUserResponse = await fetch('http://localhost:3001/auth/register', {
            method: 'POST',
            body: formData,
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         });

         if (savedUserResponse.ok) {
            console.log('Đăng ký thành công!');
         } else {
            console.log('Đăng ký thất bại.');
         }
      } catch (error) {
         console.log('Đã xảy ra lỗi:', error);
      }
   };

   return (
      <ScrollView>
         <View style={styles.containerRP}>
            <View style={styles.logoRP}>
               <Image style={styles.tinyLogo} source={require('../../../assets/img/logo.png')} />
            </View>
            <TextInput
               style={styles.inputRP}
               placeholder='First Name'
               value={values.firstName}
               onChangeText={text => handleChange('firstName', text)}
            />
            <TextInput
               style={styles.inputRP}
               placeholder='Last Name'
               value={values.lastName}
               onChangeText={text => handleChange('lastName', text)}
            />
            <TextInput
               style={styles.inputRP}
               placeholder='Email'
               value={values.email}
               onChangeText={text => handleChange('email', text)}
            />
            <TextInput
               style={styles.inputRP}
               placeholder='Password'
               secureTextEntry
               value={values.password}
               onChangeText={text => handleChange('password', text)}
            />
            <TextInput
               style={styles.inputRP}
               placeholder='Location'
               value={values.location}
               onChangeText={text => handleChange('location', text)}
            />
            <TextInput
               style={styles.inputRP}
               placeholder='Occupation'
               value={values.occupation}
               onChangeText={text => handleChange('occupation', text)}
            />
            <Button title='Choose Image' onPress={pickImage} style={{ marginVertical: 30 }} />
            {values.picture && (
               <Image
                  source={{ uri: values.picture.uri }}
                  style={{ width: 200, height: 200, marginVertical: 10, borderRadius: 50 }}
               />
            )}
            <TouchableOpacity style={styles.regiterBtn} onPress={() => handleSubmit()}>
               <Text style={{ color: Color.Black }} title='Register'>
                  Register
               </Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
   );
};

export default RegisterPage;
