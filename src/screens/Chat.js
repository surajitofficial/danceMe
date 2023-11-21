/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TopNavigation from '../components/TopNavigation';
import { Style } from '../style/Style';

const Chat = () => {
  return (
    <View style={Style.wrpAll}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />

      <View style={{position: 'relative'}}>
        <TopNavigation
          backBtn={true}
          title=""
          status={true}
          whoChat="Nikki Bohne"
          whoChatImg=""
        />
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileTitleImg}
            source={require('../assets/images/img1.jpg')}
          />
          <View style={{marginLeft: 4}}>
            <Text style={{color: 'black'}}>Nikki Bohne</Text>
            <Text style={{color: 'green'}}>Online</Text>
          </View>
        </View>
      </View>
      {/* TODO */}
      <View style={[Style.mainBackground, Style.mainBackgroundGray]}>
        <Text style={styles.chatDate}>Today, 06:00 PM</Text>

        <View style={[styles.chatBox, styles.guest]}>
          <Text style={styles.txtGuest}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. the printing and typesetting industry.
          </Text>
          <View style={styles.djPic}>
            <Image
              style={styles.img}
              source={require('../assets/images/img1.jpg')}
            />
          </View>
        </View>
        <Text style={{marginLeft: 'auto', marginRight: 38, fontSize: 12}}>
          Guest
        </Text>

        <View style={[styles.chatBox, styles.dance]}>
          <View style={styles.djPic}>
            <Image
              style={styles.img}
              source={require('../assets/images/img1.jpg')}
            />
          </View>
          <Text style={styles.txtDance}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </Text>
        </View>
        <Text style={{marginRight: 'auto', marginLeft: 38, fontSize: 12}}>
          Dancer
        </Text>
      </View>
      <View style={styles.typeboxWrp}>
        <View style={styles.typebox}>
          <TouchableOpacity>
            <Image source={require('../assets/images/attach.png')} />
          </TouchableOpacity>
          <TextInput style={styles.typeInput} placeholder="Type here..." />
          <TouchableOpacity>
            <Image source={require('../assets/images/send.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  img: {width: '100%', height: '100%'},
  djPic: {width: 34, height: 34, overflow: 'hidden', borderRadius: 71},

  profileContainer: {
    position: 'absolute',
    display: '1',
    alignItems: 'center',
    flexDirection: 'row',
    top: 2,
    left: '12%',
  },
  profileTitleImg: {width: 30, height: 30, borderRadius: 50},
  chatBox: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: '1%',
    paddingVertical: 10,
    alignItems: 'flex-end',
  },
  title: {display: 'flex', justifyContent: 'flex-end'},
  guest: {justifyContent: 'flex-end'},
  txtGuest: {
    width: '80%',
    backgroundColor: '#D9246D',
    color: '#fff',
    borderRadius: 11,
    borderBottomRightRadius: 0,
    padding: '3%',
    textAlign: 'justify',
  },
  dance: {justifyContent: 'flex-start'},
  txtDance: {
    width: '80%',
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 11,
    borderBottomLeftRadius: 0,
    padding: '3%',
    textAlign: 'justify',
  },
  typeboxWrp: {
    height: 79,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 5,
  },
  typebox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 22.5,
    borderWidth: 1,
    borderColor: '#D2D4E4',
    width: '85%',
    paddingHorizontal: 15,
  },
  typeInput: {
    width: '75%',
  },
  chatDate: {
    color: '#717599',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontWeight: '500',
    marginVertical: 8,
  },
});
