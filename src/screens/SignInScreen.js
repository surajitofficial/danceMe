/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { setClientRole } from '../redux/slice/authSlice';
import { Style } from '../style/Style';
import { BodyHeadTxt, ButtonStyle, InputStyled, TopSubText } from '../ui/Styled';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [customError, setCustomError] = useState(false);
  // redux hooks
  const user = useSelector(state => state.auth.user);
  const disPatch = useDispatch();
  // From validation
  const validateForm = () => {
    let formErrors = {};
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      formErrors.email = 'Valid email is required';
    }
    // Password validation
    if (password.length < 6) {
      formErrors.password = 'Password should be at least 6 characters';
    }
    // Password validation
    if (!rememberMe) {
      formErrors.rememberMe = 'required*';
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
        setIsError(false);
        setIsLoading(false);
        setCustomError(false);
        if (email === 'user@test.com') {
          disPatch(setClientRole(email.split('@')[0]));
          navigation.push('WelcomeScreenForUser');
        } else if (email === 'dancer@test.com') {
          disPatch(setClientRole(email.split('@')[0]));
          navigation.push('WelcomeScreenForDancer');
        } else if (email === 'dj@test.com') {
          disPatch(setClientRole(email.split('@')[0]));
          navigation.push('WelcomeScreenForDj');
        } else {
          setCustomError(true);
        }
      } catch (error) {
        setIsError(true);
      }
    }
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
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
          marginBottom: 40,
        }}>
        <BodyHeadTxt>Welcome Back </BodyHeadTxt>
        <TopSubText>Sign in to continue</TopSubText>
      </View>
      <InputStyled placeholder="Email" value={email} onChangeText={setEmail} />
      {errors.email && (
        <Text
          style={{
            color: 'red',
            marginRight: 'auto',
            marginLeft: 12,
          }}>
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
        <Text
          style={{
            color: 'red',
            marginRight: 'auto',
            marginLeft: 12,
          }}>
          {errors.password}
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
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
          <Text style={{marginLeft: 10}}>Remember me</Text>
        </TouchableOpacity>

        <Text style={{marginLeft: 10, color: '#D9246D'}}>Forgot password</Text>
      </View>
      {errors.rememberMe && (
        <Text
          style={{
            color: 'red',
            marginRight: 'auto',
            marginLeft: 12,
            marginVertical: 8,
          }}>
          {errors.rememberMe}
        </Text>
      )}
      <ButtonStyle onPress={handleSubmit} style={{marginTop: 12}}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 15,
          }}>
          {isLoading ? 'wait...' : 'Sign In'}
        </Text>
      </ButtonStyle>
      {customError && (
        <Text
          style={{
            color: 'red',
            marginHorizontal: 'auto',
            marginVertical: 8,
          }}>
          {'Email not accepted'}
        </Text>
      )}
      <TouchableOpacity
        style={Style.faceBookWrp}
        onPress={() => {
          // Handle Sign in with Facebook
        }}>
        <Icon
          name="facebook-official"
          size={20}
          color="white"
          style={{marginRight: 10}}
        />
        <Text style={Style.faceBookTxt}>Sign in with Facebook</Text>
      </TouchableOpacity>

      <View style={{flexGrow: 0.48, justifyContent: 'flex-end'}}>
        <TopSubText>
          Don't have an account?{' '}
          <Text
            style={{color: '#D9246D'}}
            onPress={() => navigation.push('SignUpScreen')}>
            SignUp
          </Text>
        </TopSubText>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
