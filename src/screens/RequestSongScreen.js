/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TopNavigation from '../components/TopNavigation';
import { BodyHeadTxt, ButtonStyle, InputStyled } from '../ui/Styled';

const RequestSongScreen = ({navigation}) => {
  //
  const [songCat, setSongCat] = useState('');
  const [singlSong, setSingleSong] = useState(false);
  const [packSong, setPackSong] = useState(false);
  const [errors, setErrors] = useState({});

  // From validation
  const validateForm = () => {
    let formErrors = {};
    // songCat validation
    if (!songCat) {
      formErrors.songCat = 'required*';
    }
    if (!packSong && !singlSong) {
      formErrors.song = 'required*';
    }
    setErrors(formErrors);
    // Return true if there are no errors
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid && (singlSong || packSong)) {
      if (singlSong) {
        return navigation.push('RequestSingleSongScreen');
      }
      if (packSong) {
        return navigation.push('RequestPackSongScreen');
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TopNavigation backBtn="" title="" />
      <View
        style={{
          paddingHorizontal: '3%',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          backgroundColor: '#F8F8F8',
        }}>
        {/* START */}
        <View style={{width: '100%', height: '78%', alignItems: 'center'}}>
          <View
            style={{
              display: 'flex',
              width: '94%',
            }}>
            <BodyHeadTxt>Request &nbsp; &nbsp; a Song</BodyHeadTxt>
          </View>
          <InputStyled
            placeholder="Song category"
            value={songCat}
            onChangeText={setSongCat}
            style={{backgroundColor: '#EFEFF4'}}
          />
          {errors.songCat && (
            <Text
              style={{
                color: 'red',
                marginRight: 'auto',
                marginLeft: 12,
              }}>
              {errors.songCat}
            </Text>
          )}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              paddingVertical: 12,
            }}>
            <TouchableOpacity
              onPress={() => {
                setSingleSong(true);
                setPackSong(false);
              }}
              style={[
                styles.bigBtn,
                singlSong ? {borderColor: '#bd2d51', borderWidth: 2} : '',
              ]}>
              <Image
                style={{width: 60, height: 60}}
                source={require('../assets/images/iconTune1.png')}
              />
              <Text
                style={[
                  styles.bigBtnText,
                  singlSong ? {color: '#db1849'} : '',
                ]}>
                Single Song
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setSingleSong(false);
                setPackSong(true);
              }}
              style={[
                styles.bigBtn,
                packSong ? {borderColor: '#bd2d51', borderWidth: 2} : '',
              ]}>
              <Image
                style={{width: 60, height: 60}}
                source={require('../assets/images/iconTune2.png')}
              />
              <Text
                style={[styles.bigBtnText, packSong ? {color: '#db1849'} : '']}>
                Pack Song
              </Text>
            </TouchableOpacity>
          </View>
          {errors.song && (
            <Text
              style={{
                color: 'red',
                marginRight: 'auto',
                marginLeft: 12,
              }}>
              {errors.song}
            </Text>
          )}
        </View>
        {/* END */}

        <ButtonStyle onPress={handleSubmit}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
            Request Song
          </Text>
        </ButtonStyle>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  bigBtn: {
    width: 153,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFF4',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D5D5DC',
    gap: 5,
  },
  bigBtnText: {
    color: '#8A8A8F',

    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
  },
});

export default RequestSongScreen;
