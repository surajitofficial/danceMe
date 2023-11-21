/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListItem from '../components/ListItem';
import TopNavigation from '../components/TopNavigation';
import { Style } from '../style/Style';

const DanceRequest = () => {
  const handleAccept = () => {};
  const handleReject = () => {};
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
          {Array.from({length: 12}).map((v, i) => (
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
