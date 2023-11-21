import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';
import {BodyHeadTxt, InputStyled} from '../ui/Styled';
import TopNavigation from '../components/TopNavigation';

const RequestSong2 = () => {
  const [songCat, setSongCat] = useState('');
  const [songName, setSongName] = useState('');
  const [singerNamrType, setSingerNamrType] = useState(false);

  const handleSignIn = () => {
    // Handle sign-in functionality
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
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
        <View style={{width: '100%', height: '78%', alignItems: 'center'}}>
          <View
            style={{
              display: 'flex',
              width: '94%',
            }}>
            <BodyHeadTxt style={{width: 280}}>Requested Songs</BodyHeadTxt>
          </View>

          <InputStyled
            placeholder="Song category"
            value={songCat}
            onChangeText={setSongCat}
            style={{backgroundColor: '#EFEFF4'}}
          />

          <View style={styles.wrpInput}>
            <InputStyled
              placeholder="Song name"
              value={songName}
              onChangeText={setSongName}
            />
            <InputStyled
              placeholder="Type singer name"
              value={singerNamrType}
              onChangeText={setSingerNamrType}
              style={[styles.hgtInput, {marginBottom: 7}]}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: '60%',
              paddingVertical: 15,
              paddingLeft: 10,
              alignSelf: 'flex-start',
            }}>
            <View>
              <Text style={styles.btnTitle}>VIP Request</Text>
              <TouchableOpacity style={styles.smallBtn}>
                <Text style={styles.smallBtnText}>$5</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
    borderColor: '#D9246D',
    gap: 5,
    fontFamily: 'Plus Jakarta Sans',
  },
  smallBtnText: {
    color: '#D9246D',

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
    backgroundColor: '#efeff4',
    padding: '1%',
    width: '94%',
  },
  hgtInput: {
    backgroundColor: '#EFEFF4',
    height: 26,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
});

export default RequestSong2;
