/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TopNavigation from '../components/TopNavigation';
import { Style } from '../style/Style';

const Notification = () => {

  const notificationArray = [
    {id: 1, body: 'You have booked 2 hours of Dance with Taylor Swift.'},
    {
      id: 2,
      body: 'Your dance booking with Taylor Swift for Oct 10th, at 5pm is confirmed.',
    },
    {
      id: 3,
      body: 'You have requested DJ Jacky for the song Jump in the air for $5, Oct 20, 6pm.',
    },
    {id: 4, body: 'DJ Jacky has accepted your song request.'},
  ];

  const NotificationRow = ({children}) => {
    return (
      <View style={styles.listRow}>
        <Image
          style={styles.songIcon}
          source={require('../assets/images/notification.png')}
        />
        <Text style={styles.songName}>{children}</Text>
      </View>
    );
  };

  return (
    <View style={Style.wrpAll}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TopNavigation backBtn={true} title="Notification" />

      <ScrollView>
        <View style={[Style.mainBackground, Style.mainBackgroundGray]}>
          {notificationArray.map(v => (
            <NotificationRow key={v.id}>{v.body}</NotificationRow>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 9,
    borderRadius: 6,
    width: '98%',
    marginVertical: 10,
  },
  songName: {
    color: '#000',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontWeight: '500',
    width: '70%',
  },
});
