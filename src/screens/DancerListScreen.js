/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { } from 'react-native-gesture-handler';
import ListItem from '../components/ListItem';
import TopNavigation from '../components/TopNavigation';
import { Style } from '../style/Style';

const DancerList = ({navigation}) => {
  const handleBook = dancerId => {
    navigation.navigate('DancerProfileScreen', {dancerId});
    // console.log('i am calling...', dancerId);
  };

  return (
    <View style={Style.wrpAll}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TopNavigation backBtn={true} title="Dancer List" />

      <ScrollView>
        <View style={[Style.mainBackground, Style.mainBackgroundGray]}>
          <View style={{...styles.searchbox, marginBottom: 2}}>
            <TouchableOpacity>
              <Image source={require('../assets/images/search.png')} />
            </TouchableOpacity>
            <TextInput style={{flex: 1}} placeholder="Search Dancers" />
            <TouchableOpacity>
              <Image source={require('../assets/images/filter.png')} />
            </TouchableOpacity>
          </View>
          {/* <View style={{marginLeft: 'auto', paddingVertical: 5}}>
            <TouchableOpacity onPress={()=> navigation.push('DjListScreen')}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/images/ButtonNext.png')}
              />
            </TouchableOpacity>
          </View> */}
          {Array.from({length: 12}).map((v, i) => (
            <ListItem
              key={i}
              image={require('../assets/images/img1.jpg')}
              name="Nikki Bohne"
              age="24"
              price="40"
              hrs="1"
              type="Salsa, Hiphop"
              club="NYC Downtown, Tribeca"
              solidBtnFunc={handleBook}
              solidBtnTxt="Book"
              navigateFunc={handleBook}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DancerList;

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
