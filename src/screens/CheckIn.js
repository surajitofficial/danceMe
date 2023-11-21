import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {Style} from '../style/Style';
import TopNavigation from '../components/TopNavigation';
import {ButtonStyle} from '../ui/Styled';

const CheckIn = () => {
  return (
    <View style={Style.wrpAll}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TopNavigation backBtn={true} title=" Check In" />

      <View style={[Style.mainBackground, Style.mainBackgroundGray]}>
        <View style={styles.checkinBtn}>
          <Image source={require('../assets/images/downaro.png')} />
          <Text style={styles.chkTxt}>Check In</Text>
        </View>

        <Image
          source={require('../assets/images/banner.png')}
          style={styles.banner}
        />

        <Text style={styles.title}>The Grand</Text>
        <Text style={styles.location}>
          {' '}
          <Image source={require('../assets/images/location.png')} /> San
          Francisco, USA{' '}
        </Text>

        <Text style={styles.titleOnBtn}>Checking in as a </Text>

        <ButtonStyle>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
            Sign Up
          </Text>
        </ButtonStyle>

        <TouchableOpacity
          style={[Style.faceBookWrp, {marginBottom: 0}]}
          onPress={() => {
            // Handle Sign in with Facebook
          }}>
          <Text style={[Style.faceBookTxt, {color: '#D9246D'}]}>Dancer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Style.faceBookWrp]}
          onPress={() => {
            // Handle Sign in with Facebook
          }}>
          <Text style={[Style.faceBookTxt, {color: '#D9246D'}]}>DJ</Text>
        </TouchableOpacity>

        <Text style={styles.lastTxt}>
          "You are checking into Club Best Dance studio as a DJ."
        </Text>
      </View>
    </View>
  );
};

export default CheckIn;

const styles = StyleSheet.create({
  title: {
    color: '#000',
    marginVertical: 5,
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 20,
    fontWeight: '600',
    width: '96%',
    paddingHorizontal: '2%',
  },
  checkinBtn: {
    width: 180,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D9246D',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 10,
    marginTop: 12,
    marginBottom: 20,
  },
  chkTxt: {
    color: '#FFF',

    fontFamily: 'Plus Jakarta Sans',
    fontSize: 20,
    fontWeight: '600',
  },
  location: {
    width: '95%',
    color: '#979797',

    fontFamily: 'Plus Jakarta Sans',
    fontSize: 13,
    fontWeight: '500',
  },
  titleOnBtn: {
    color: '#000',

    fontFamily: 'Plus Jakarta Sans',
    fontSize: 17,
    fontWeight: '600',
    paddingVertical: 16,
  },
  lastTxt: {
    color: '#000',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: '4%',
  },
});
