/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, Text, View } from 'react-native';

import TopNavigation from '../components/TopNavigation';
import { Style } from '../style/Style';
import { BodyHeadTxt, ButtonStyle, DjButtonStyle } from '../ui/Styled';

const WelcomeScreenForUser = ({navigation}) => {
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
          I am DJ or Dancer
        </BodyHeadTxt>
        <ButtonStyle
          onPress={() => navigation.push('DanceRequestScreen')}
          style={{height: 70}}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
            Requested Dancer
          </Text>
        </ButtonStyle>

        <DjButtonStyle
          onPress={() => navigation.push('SongRequest', {dancerOrDj: true})}
          style={{height: 70}}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
            Requested DJ Song
          </Text>
        </DjButtonStyle>

        {/* <TouchableOpacity
          style={[Style.faceBookWrp, {height: 70}]}
          onPress={() => navigation.push('DancerListScreen')}>
          <Text style={[Style.faceBookTxt, {color: '#D9246D'}]}>
            Guest (Seeking to Dance)
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default WelcomeScreenForUser;
