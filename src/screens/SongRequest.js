/* eslint-disable prettier/prettier */
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  AlertIOS,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import SongRequestList from '../components/SongReqList';
import { setSongPayment, setSongReq } from '../redux/slice/authSlice';
import { Style } from '../style/Style';
import { getData } from '../utility/asyncStore';

const SongRequest = ({navigation}) => {
  const songReq = useSelector(state => state.auth.songReq);
  const songPayment = useSelector(state => state.auth.songPayment);
  const clientRole = useSelector(state => state.auth.clientRole);
  const {params} = useRoute();
  const disPatch = useDispatch();
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    const fetchFun = async () => {
      const result = await getData(`${clientRole}s`);
      setProfileInfo(result[1]);
    };
    fetchFun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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
  const songList = [
    {
      id: '1',
    },

    {
      id: '2',
    },
    {
      id: '3',
    },
    {
      id: '4',
    },
    {
      id: '5',
    },
  ];
  // Handle Fun
  const handleSongPayment = () => {
    notifyMessage('Payment success');
    disPatch(setSongPayment(true));
    navigation.push('HistoryScreen', {songHistory: true});
  };
  const handleAccept = () => {
    disPatch(setSongReq('Accept'));
    navigation.push('HistoryScreen', {songHistory: true});
  };
  const handleReject = () => {
    disPatch(setSongReq('Reject'));
    // navigation.push('HistoryScreen');
  };
  return (
    <View style={Style.wrpAll}>
      {/* <View style={[styles.headerTitle]}>
        <StatusBar
          animated={true}
          backgroundColor="#fff"
          barStyle={'dark-content'}
        />
        <TopNavigation
          backBtn={true}
          title={`${
            // FOR SINGLE SONG
            params?.singleSong
              ? 'Single of songs'
              : // PACK OF SONG
              params?.packOfSong
              ? 'Pack of songs'
              : 'Songs request'
          }`}
        />
        <Image
          style={styles.profileTitleImg}
          source={require('../assets/images/img1.jpg')}
        />
      </View> */}
      <View style={styles.header}>
        {/* BACK BTN */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        {/* PAGE TITLE */}
        <Text style={styles.title}>
          {`${
            // FOR SINGLE SONG
            params?.singleSong
              ? 'Single songs'
              : // PACK OF SONG
              params?.packOfSong
              ? 'Pack of songs'
              : 'Songs request'
          }`}
        </Text>
        {/* PROFILE ICON */}
        <TouchableOpacity style={styles.profileButton} onPress={handleProfile}>
          <Image
            style={styles.profileTitleImg}
            source={require('../assets/images/avatar.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={[Style.mainBackground, Style.mainBackgroundGray]}>
        <FlatList
          data={songList}
          keyExtractor={item => item.id}
          style={{width: '100%', marginTop: 15}}
          renderItem={({item, index}) => {
            const isOdd = index % 2 === 0;
            const itemStyle = isOdd ? 'odd' : '';
            return (
              <React.Fragment>
                {/* <ListItem
                  screen="songRequestOrder"
                  alterColor={itemStyle}
                  icon={require('../assets/images/iconTune1.png')}
                  price="15"
                  name="Taylor Swift"
                  type="Salsa, Hiphop"
                  request="Cruel Summer"
                  requestedBy="Selena"
                  requestTimeBy="Sep 10, 2023"
                  solidBtnFunc={''}
                  solidBtnTxt="Accept"
                  outlineBtnFunc={''}
                  outlineBtnTxt="Reject"
                  isUser={params?.user}
                  isDancerOrDj={params?.dancerOrDj}
                  payNowForDancer={danceReq === 'Accept'}
                  payNowForSong={songReq === 'Accept'}
                  navigation={navigation}
                  songReq={true}
                  danceReq={false}
                  handleSongPayment={handleSongPayment}
                /> */}
                <SongRequestList
                  screen="songRequestOrder"
                  alterColor={itemStyle}
                  icon={require('../assets/images/iconTune1.png')}
                  price="15"
                  name="Taylor Swift"
                  type="Salsa, Hiphop"
                  request="Cruel Summer"
                  requestedBy="Selena"
                  requestTimeBy="Sep 10, 2023"
                  solidBtnTxt="Accept"
                  outlineBtnTxt="Reject"
                  navigation={navigation}
                  // state
                  songPaymentState={songPayment}
                  songReqState={songReq}
                  // Handler Fun
                  handleSongPayment={handleSongPayment}
                  handleAccept={handleAccept}
                  handleReject={handleReject}
                />
              </React.Fragment>
            );
          }}
        />
      </View>
    </View>
  );
};

export default SongRequest;

const styles = StyleSheet.create({
  profileTitleImg: {width: 30, height: 30, borderRadius: 50},
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
  },
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
  //
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
