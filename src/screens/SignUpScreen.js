/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slice/authSlice';
import { Style } from '../style/Style';
import { BodyHeadTxt, ButtonStyle, InputStyled, TopSubText } from '../ui/Styled';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // redux hooks
  const disPatch = useDispatch();
  // handleRememberMe
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };
  // From validation
  const validateForm = () => {
    let formErrors = {};

    // Name validation
    if (!name.trim()) {
      formErrors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      formErrors.email = 'Valid email is required';
    }

    // Age validation
    if (!age || isNaN(age) || age < 1) {
      formErrors.age = 'Valid age is required';
    }

    // Gender validation
    if (!gender.trim()) {
      formErrors.gender = 'Gender is required';
    }

    // Password validation
    if (password.length < 6) {
      formErrors.password = 'Password should be at least 6 characters';
    }
    // Password validation
    if (!rememberMe) {
      formErrors.rememberMe = 'terms & service accepted';
    }

    setErrors(formErrors);

    // Return true if there are no errors
    return Object.keys(formErrors).length === 0;
  };
  // handle submit
  const handleSubmit = async () => {
    const isValid = validateForm();
    if (isValid) {
      setIsLoading(true);
      const waitTwoSeconds = () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('Hello after 2 seconds!');
          }, 2000);
        });
      };
      try {
        await waitTwoSeconds();
        disPatch(setUser({name, email, age, password, gender}));
        setIsError(false);
        setIsLoading(false);
        navigation.push('SignInScreen');
      } catch (error) {
        setIsError(true);
      }
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[
        Style.mainBackground,
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: '6%',
        },
      ]}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <View
        style={{
          display: 'flex',
          width: '94%',
          marginBottom: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <BodyHeadTxt>Join &nbsp; &nbsp; &nbsp; Dance Me</BodyHeadTxt>
          <Image source={require('../assets/images/Mask.png')} />
        </View>
        <TopSubText>Sign up to join</TopSubText>
      </View>

      <InputStyled placeholder="Name" value={name} onChangeText={setName} />
      {errors.name && (
        <Text style={{color: 'red', marginRight: 'auto', marginLeft: 12}}>
          {errors.name}
        </Text>
      )}
      <InputStyled placeholder="Email" value={email} onChangeText={setEmail} />
      {errors.email && (
        <Text style={{color: 'red', marginRight: 'auto', marginLeft: 12}}>
          {errors.email}
        </Text>
      )}
      <InputStyled
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {errors.password && (
        <Text style={{color: 'red', marginRight: 'auto', marginLeft: 12}}>
          {errors.password}
        </Text>
      )}
      <InputStyled placeholder="Age" value={age} onChangeText={setAge} />
      {errors.age && (
        <Text style={{color: 'red', marginRight: 'auto', marginLeft: 12}}>
          {errors.age}
        </Text>
      )}
      <InputStyled
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      {errors.gender && (
        <Text style={{color: 'red', marginRight: 'auto', marginLeft: 12}}>
          {errors.gender}
        </Text>
      )}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 15,
          justifyContent: 'space-between',
          alignContent: 'space-between',

          width: '92%',
        }}>
        <TouchableOpacity
          onPress={handleRememberMe}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {rememberMe ? (
            <Icon name="check" size={20} color="#D9246D" />
          ) : (
            <Icon name="check" size={20} color="#000" />
          )}
          <Text style={{marginLeft: 10}}>
            I agree to the{' '}
            <Text style={{fontWeight: 800}}>Terms of Service</Text> {'\n'}
            {errors.rememberMe && (
              <Text
                style={{
                  color: 'red',
                  marginRight: 'auto',
                  marginLeft: 12,
                }}>
                {errors.rememberMe}
              </Text>
            )}
          </Text>
        </TouchableOpacity>
      </View>

      <ButtonStyle onPress={handleSubmit}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
          {isLoading ? 'subming..' : 'Sign Up'}
        </Text>
      </ButtonStyle>

      <View style={{flexGrow: 0.48, justifyContent: 'flex-end'}}>
        <TopSubText>
          Have an account?{' '}
          <Text
            style={{color: '#D9246D'}}
            onPress={() => navigation.push('SignInScreen')}>
            Sign In
          </Text>
        </TopSubText>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
