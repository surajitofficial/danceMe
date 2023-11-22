/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';

import { useSelector } from 'react-redux';
import TopNavigation from '../components/TopNavigation';
import { Style } from '../style/Style';
import { BodyHeadTxt, ButtonStyle, DjButtonStyle } from '../ui/Styled';

const WelcomeScreenForUser = ({navigation}) => {
  const role = useSelector(state => state.auth);
  // console.log(role);
  return (
    <View style={Style.wrpAll}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TopNavigation backBtn={true} title="Welcome" />

      <View style={[Style.mainBackground, Style.mainBackgroundGray]}>
        <BodyHeadTxt
          style={{width: '100%', textAlign: 'center', marginBottom: 30}}>
          {/* I am a */}I Looking for
        </BodyHeadTxt>
        <ButtonStyle
          onPress={() => navigation.push('DancerListScreen')}
          style={{height: 70}}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
            Dancer
          </Text>
        </ButtonStyle>

        <DjButtonStyle
          onPress={() => navigation.push('DjListScreen')}
          style={{height: 70}}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
            DJ
          </Text>
        </DjButtonStyle>
        <DjButtonStyle
          style={[Style.faceBookWrp, {height: 70}]}
          onPress={() => navigation.push('notificationScreen')}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
            Notification
          </Text>
        </DjButtonStyle>
        <TouchableOpacity
          style={[Style.faceBookWrp, {height: 70}]}
          onPress={() => navigation.push('DancerListScreen')}>
          <Text style={[Style.faceBookTxt, {color: '#D9246D'}]}>
            Guest (Seeking to Dance)
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    // notificationScreen
  );
};

export default WelcomeScreenForUser;
