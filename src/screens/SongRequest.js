/* eslint-disable prettier/prettier */
import React from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import ListItem from '../components/ListItem';
import TopNavigation from '../components/TopNavigation';
import { Style } from '../style/Style';

const SongRequest = () => {
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
  const handleAccept = () => {};
  const handleReject = () => {};
  return (
    <View style={Style.wrpAll}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TopNavigation backBtn={true} title="Song Requested" />

      <View style={[Style.mainBackground, Style.mainBackgroundGray]}>
        <FlatList
          data={songList}
          keyExtractor={item => item.id}
          style={{width: '100%', marginTop: 15}}
          renderItem={({item, index}) => {
            const isOdd = index % 2 === 0;
            const itemStyle = isOdd ? 'odd' : '';
            return (
              <ListItem
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
                outlineBtnFunc={handleReject}
                outlineBtnTxt="Pending"
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default SongRequest;

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
