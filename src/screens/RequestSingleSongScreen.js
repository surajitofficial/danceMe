/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import TopNavigation from '../components/TopNavigation';
import { BodyHeadTxt, ButtonStyle, InputStyled } from '../ui/Styled';

const RequestSingleSongScreen = ({navigation}) => {
  //
  const [songCat, setSongCat] = useState('');
  const [songName, setSongName] = useState('');
  const [singerNameType, setSingerNameType] = useState('');
  const [vipRequest, setVipRequest] = useState(false);
  const [generalRequest, setGeneralRequest] = useState(false);
  const [errors, setErrors] = useState({});
  const role = useSelector(state => state?.auth?.clientRole);
  // From validation
  const validateForm = () => {
    let formErrors = {};
    // songCat validation
    if (!songCat) {
      formErrors.songCat = 'required*';
    }
    // songName validation
    if (!songName) {
      formErrors.songName = 'required*';
    }
    // singerNameType validation
    if (!singerNameType) {
      formErrors.singerNameType = 'required*';
    }
    if (!vipRequest && !generalRequest) {
      formErrors.requestType = 'required*';
    }
    setErrors(formErrors);
    // Return true if there are no errors
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      console.log({songCat, songName, singerNameType});
      navigation.push('SongRequest', {user: role === 'user'});
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
            <BodyHeadTxt style={{width: 250}}>
              Request a Single Song
            </BodyHeadTxt>
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
          <InputStyled
            placeholder="Song name"
            value={songName}
            onChangeText={setSongName}
            style={{backgroundColor: '#EFEFF4'}}
          />
          {errors.songName && (
            <Text
              style={{
                color: 'red',
                marginRight: 'auto',
                marginLeft: 12,
              }}>
              {errors.songName}
            </Text>
          )}
          <InputStyled
            placeholder="Type singer name"
            value={singerNameType}
            onChangeText={setSingerNameType}
            style={{backgroundColor: '#EFEFF4'}}
          />
          {errors.singerNameType && (
            <Text
              style={{
                color: 'red',
                marginRight: 'auto',
                marginLeft: 12,
              }}>
              {errors.singerNameType}
            </Text>
          )}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '60%',
              paddingVertical: 6,
              alignSelf: 'flex-start',
            }}>
            {/* VIP ST */}
            <View>
              <Text style={styles.btnTitle}>VIP Request</Text>
              <TouchableOpacity
                onPress={() => {
                  setVipRequest(true);
                  setGeneralRequest(false);
                }}
                style={[
                  styles.smallBtn,
                  vipRequest ? {borderColor: '#bd2d51', borderWidth: 2} : '',
                ]}>
                <Text
                  style={[
                    styles.smallBtnText,
                    vipRequest ? {color: '#db1849'} : '',
                  ]}>
                  $5
                </Text>
              </TouchableOpacity>
              {errors.requestType && (
                <Text
                  style={{
                    color: 'red',
                    marginRight: 'auto',
                    marginLeft: 12,
                  }}>
                  {errors.requestType}
                </Text>
              )}
            </View>
            {/* VIP END */}
            <View>
              <Text style={styles.btnTitle}>General Request</Text>
              <TouchableOpacity
                onPress={() => {
                  setGeneralRequest(true);
                  setVipRequest(false);
                }}
                style={[
                  styles.smallBtn,
                  generalRequest
                    ? {borderColor: '#bd2d51', borderWidth: 2}
                    : '',
                ]}>
                <Text
                  style={[
                    styles.smallBtnText,
                    generalRequest ? {color: '#db1849'} : '',
                  ]}>
                  $2
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
  smallBtn: {
    width: 66,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFF4',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D5D5DC',
    gap: 5,
    fontFamily: 'Plus Jakarta Sans',
  },
  smallBtnText: {
    color: '#8A8A8F',

    fontSize: 14,
  },
  btnTitle: {
    color: '#000',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,

    fontWeight: '600',
    paddingBottom: 5,
  },
});

export default RequestSingleSongScreen;
