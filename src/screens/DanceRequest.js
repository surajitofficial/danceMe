/* eslint-disable prettier/prettier */
import React from 'react';
import {
  AlertIOS,
  Platform,
  StatusBar,
  StyleSheet,
  ToastAndroid,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from '../components/ListItem';
import TopNavigation from '../components/TopNavigation';
import { setDancePayment } from '../redux/slice/authSlice';
import { Style } from '../style/Style';

const DanceRequest = ({navigation}) => {
  const role = useSelector(state => state?.auth?.clientRole);
  const disPatch = useDispatch();

  const handleAccept = () => {};
  const handleReject = () => {};
  function notifyMessage(msg) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  }
  const handleDancePayment = () => {
    notifyMessage('Payment success');
    disPatch(setDancePayment(true));
    navigation.push('HistoryScreen');
  };
  return (
    <View style={Style.wrpAll}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TopNavigation backBtn={true} title="Dance Request" />

      <ScrollView>
        <View
          style={[
            Style.mainBackground,
            Style.mainBackgroundGray,
            {paddingTop: 15},
          ]}>
          {Array.from({length: 1}).map((v, i) => (
            <ListItem
              key={i}
              request="Request by"
              icon={require('../assets/images/iconDance.png')}
              name="Will Smith"
              price="15"
              type="Salsa, Hiphop"
              requestTime="Sep 10, 2023 09:20PM 2 hours"
              solidBtnFunc={handleAccept}
              solidBtnTxt="Accept"
              outlineBtnFunc={handleReject}
              outlineBtnTxt="Reject"
              navigation={navigation}
              isUser={role === 'user'}
              isDancerOrDj={role !== 'user'}
              danceReq={true}
              songReq={false}
              handleDancePayment={handleDancePayment}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DanceRequest;

const styles = StyleSheet.create({
  searchbox: {
    borderRadius: 8,
    backgroundColor: '#EFEFF4',
    marginHorizontal: '2%',
    marginTop: 15,
    marginBottom: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '3.5%',
    gap: 5,
  },
});
