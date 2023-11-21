/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';

import TopNavigation from '../components/TopNavigation';
import { Style } from '../style/Style';
import { BodyHeadTxt, ButtonStyle, DjButtonStyle } from '../ui/Styled';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={Style.wrpAll}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TopNavigation backBtn={true} title="I am a " />

      <View style={[Style.mainBackground, Style.mainBackgroundGray]}>
        <BodyHeadTxt
          style={{width: '100%', textAlign: 'center', marginBottom: 30}}>
          I am a
        </BodyHeadTxt>
        <ButtonStyle
          onPress={() => navigation.push('DancerProfileScreen')}
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

        <TouchableOpacity
          style={[Style.faceBookWrp, {height: 70}]}
          onPress={() => navigation.push('DancerListScreen')}>
          <Text style={[Style.faceBookTxt, {color: '#D9246D'}]}>
            Guest (Seeking to Dance)
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
