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
          {Array.from({length: 1}).map((v, i) => (
            <NotificationRow  key={i}>
              {' '}
              You have booked 2 hours of Dance with Taylor Swift.{' '}
            </NotificationRow>
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
