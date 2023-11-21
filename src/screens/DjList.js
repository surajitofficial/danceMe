/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListItem from '../components/ListItem';
import TopNavigation from '../components/TopNavigation';
import { Style } from '../style/Style';

const DjList = ({navigation}) => {
  const handleRequest = () => {};
  return (
    <View style={Style.wrpAll}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TopNavigation backBtn={true} title="DJ List" />

      <ScrollView>
        <View style={[Style.mainBackground, Style.mainBackgroundGray]}>
          <View style={styles.searchbox}>
            <TouchableOpacity>
              <Image source={require('../assets/images/search.png')} />
            </TouchableOpacity>
            <TextInput style={{flex: 1}} placeholder="Search Dancers" />
            <TouchableOpacity>
              <Image source={require('../assets/images/filter.png')} />
            </TouchableOpacity>
          </View>
          {Array.from({length: 12}).map((v, i) => (
            <ListItem
              key={i}
              screen="djlist"
              playLive={true}
              image={require('../assets/images/img1.jpg')}
              name="Nikki Bohne"
              type="Salsa, Hiphop"
              solidBtnFunc={handleRequest}
              solidBtnTxt="Request Song"
              djProfileNavigationFun={()=>navigation.push('DjProfileScreen')}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DjList;

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
