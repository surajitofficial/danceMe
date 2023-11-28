/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  AlertIOS,
  Image,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import DancerRequestList from '../components/DancerReqList';
import { setDancePayment, setDanceReq } from '../redux/slice/authSlice';
import { Style } from '../style/Style';
import { getData } from '../utility/asyncStore';

const DanceRequest = ({navigation}) => {
  const [profileInfo, setProfileInfo] = useState({});
  const danceReqState = useSelector(state => state.auth.danceReq);
  const dancePaymentState = useSelector(state => state.auth.dancePayment);
  const clientRole = useSelector(state => state.auth.clientRole);
  const disPatch = useDispatch();

  useEffect(() => {
    const fetchFun = async () => {
      const result = await getData(`${clientRole}s`);
      setProfileInfo(result[1]);
    };
    fetchFun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const dancerObj = {name: 'alex', age: '23', about: "let'a dance"};
  // const djObj = {name: 'jon doe', age: '33', about: "let's sing a song"};
  // const userObj = {name: 'Nikki ',age: '23',about: 'I love dance & song ',};

  const handleProfile = () => {
    if (clientRole === 'user') {
      navigation.navigate('EditProfileScreen', {info: profileInfo});
    } else if (clientRole === 'dj') {
      navigation.navigate('EditProfileScreen', {info: profileInfo});
    } else if (clientRole === 'dancer') {
      navigation.navigate('EditProfileScreen', {info: profileInfo});
    }
  };

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
    navigation.push('HistoryScreen', {dancersHistory: true});
  };
  const handleAccept = () => {
    disPatch(setDanceReq('Accept'));
    navigation.push('HistoryScreen', {dancersHistory: true});
  };
  const handleReject = () => {
    disPatch(setDanceReq('Reject'));
    // navigation.push('HistoryScreen');
  };
  return (
    <View style={Style.wrpAll}>
      {/* <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TopNavigation backBtn={true} title="Dances Request" /> */}
      <View style={styles.header}>
        {/* BACK BTN */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        {/* PAGE TITLE */}
        <Text style={styles.title}>Dances Request</Text>
        {/* PROFILE ICON */}
        <TouchableOpacity style={styles.profileButton} onPress={handleProfile}>
          <Image
            style={styles.profileTitleImg}
            source={require('../assets/images/avatar.png')}
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View
          style={[
            Style.mainBackground,
            Style.mainBackgroundGray,
            {paddingTop: 15},
          ]}>
          {Array.from({length: 1}).map((v, i) => (
            <React.Fragment key={i}>
              {/* <ListItem
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
              /> */}
              <DancerRequestList
                request="Request by"
                icon={require('../assets/images/iconDance.png')}
                name="Will Smith"
                price="15"
                type="Salsa, Hiphop"
                requestTime="Sep 10, 2023 09:20PM 2 hours"
                solidBtnTxt="Accept"
                outlineBtnTxt="Reject"
                // state
                dancePaymentState={dancePaymentState}
                danceReqState={danceReqState}
                // handle Fun
                handleDancePayment={handleDancePayment}
                handleAccept={handleAccept}
                handleReject={handleReject}
              />
            </React.Fragment>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  backButton: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileButton: {
    justifyContent: 'center',
  },
});
