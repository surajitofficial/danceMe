/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';
import { useSelector } from 'react-redux';
import TopNavigation from '../components/TopNavigation';
import { BodyHeadTxt, ButtonStyle, InputStyled } from '../ui/Styled';

const RequestPackSongScreen = ({navigation}) => {
  //
  const [songCat, setSongCat] = useState('');
  const [vipRequest, setVipRequest] = useState(false);
  const [generalRequest, setGeneralRequest] = useState(false);
  const [formData, setFromData] = useState([{songName: '', singerName: ''}]);
  const [errors, setErrors] = useState({});
  const [anyF, setAny] = useState(''); // for re-render this component

  const role = useSelector(state => state?.auth?.clientRole);

  // From validation
  const validateForm = () => {
    let formErrors = {};
    // songCat validation
    if (!songCat) {
      formErrors.songCat = 'required*';
    }
    // songName validation

    if (!vipRequest && !generalRequest) {
      formErrors.requestType = 'required*';
    }

    setErrors(formErrors);
    // Return true if there are no errors
    return Object.keys(formErrors).length === 0;
  };

  const handleSignIn = () => {
    const isValid = validateForm();
    if (isValid) {
      console.log({songCat, formData});
      navigation.push('SongRequest', {packOfSong: true});
    }
  };
  const handleSongNameChange = (v, index) => {
    // console.log(v, formData[index].singerName);
    setFromData(prev => {
      const data = [...prev];
      data[index].songName = v;
      return data;
    });
  };
  const handleSingerChange = (v, index) => {
    setFromData(prev => {
      const data = [...prev];
      data[index].singerName = v;
      return data;
    });
  };
  const addDuplicate = () => {
    // 0 1 2 3 4
    // 1 2 3 4 5
    if (formData.length + 1 <= 5) {
      setFromData(prev => {
        // const data = prev;
        prev.push({songName: '', singerName: ''});
        setAny(uuid.v1());
        return prev;
      });
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
        {/* ST */}
        <View style={{width: '100%', height: '78%', alignItems: 'center'}}>
          <View
            style={{
              display: 'flex',
              width: '94%',
            }}>
            <BodyHeadTxt style={{width: 280}}>
              Request a Pack of Songs
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

          <View style={{padding: 12, alignItems: 'flex-end', width: '100%'}}>
            <TouchableOpacity onPress={addDuplicate}>
              <Image source={require('../assets/images/plus.png')} />
            </TouchableOpacity>
          </View>
          <ScrollView style={{width: '100%'}}>
            {formData.map((v, i) => (
              <View key={i} style={{marginVertical: 10}}>
                <InputStyled
                  placeholder="Song name"
                  value={v.songName}
                  onChangeText={v => handleSongNameChange(v, i)}
                  style={{backgroundColor: '#EFEFF4', marginHorizontal: 'auto'}}
                />
                <InputStyled
                  placeholder="Singer name"
                  value={v.singerName}
                  onChangeText={v => handleSingerChange(v, i)}
                  style={{backgroundColor: '#EFEFF4'}}
                />
              </View>
            ))}
          </ScrollView>
          {/* VIP / GENERAL REQUEST  START */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '60%',
              paddingVertical: 15,
              alignSelf: 'flex-start',
            }}>
            <View>
              <Text style={styles.btnTitle}>VIP Request</Text>
              <TouchableOpacity
                onPress={() => {
                  setGeneralRequest(false);
                  setVipRequest(true);
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
            </View>

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
          {/* VIP / GENERAL REQUEST END */}
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
        {/* EN */}
        <ButtonStyle onPress={handleSignIn}>
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
  wrpInput: {
    borderRadius: 10,
    // backgroundColor: '#efeff4',
    padding: '1%',
    width: '94%',
  },
  hgtInput: {
    backgroundColor: '#EFEFF4',
    height: 26,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'black', // Change the color as needed
    marginVertical: 10, // Adjust spacing if needed
  },
});

export default RequestPackSongScreen;
