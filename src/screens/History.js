/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { } from 'react-native-gesture-handler';
import ListItem from '../components/ListItem';
import TopNavigation from '../components/TopNavigation';
import { Style } from '../style/Style';

const History = () => {
  return (
    <View style={Style.wrpAll}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TopNavigation backBtn={true} title="History" />

      <ScrollView>
        <View style={[Style.mainBackground, Style.mainBackgroundGray]}>
          <View style={styles.SlideBtn}>
            <TouchableOpacity style={[styles.btn, styles.activeBtn]}>
              <Text style={[styles.txt, styles.clor]}>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={[styles.txt]}>Complated</Text>
            </TouchableOpacity>
          </View>
          {Array.from({length: 12}).map((v, i) => (
            <ListItem
            key={i}
              screen="history"
              image={require('../assets/images/img1.jpg')}
              name="Nikki Bohne"
              price="100"
              timeInHistory="10 Sep, 2023   07:00 PM"
              duration="3"
              club="NYC Downtown, Tribeca"
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  SlideBtn: {
    borderRadius: 8,
    backgroundColor: '#EFEFF4',
    marginHorizontal: '2%',
    marginTop: 15,
    marginBottom: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    gap: 5,
    borderRadius: 22.5,
    backgroundColor: 'rgba(217, 36, 109, 0.10)',
    height: 45,
  },
  btn: {
    borderRadius: 22.5,

    width: 172,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: '#D9246D',
  },
  activeBtn: {
    backgroundColor: '#D9246D',
  },

  clor: {
    color: '#fff',
  },
});
