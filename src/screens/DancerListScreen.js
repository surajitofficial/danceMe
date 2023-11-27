/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { } from 'react-native-gesture-handler';
import ListItem from '../components/ListItem';
import TopNavigation from '../components/TopNavigation';
import { Style } from '../style/Style';

const DancerList = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [showFilterOption, setShowFilterOPtion] = useState(false);
  const [isShowFilterOption, setIsShowFilterOption] = useState(true);
  const [filterKey, setFilterKey] = useState({danceType: true, name: false});

  const data = [
    {id: '1', danceType: 'Hip-Hop', name: 'Nikki Bohne'},
    {id: '2', danceType: 'Classic', name: 'Alex'},
    {id: '3', danceType: 'Slow-Motion', name: 'Mark'},
  ];
  const key = filterKey.danceType ? 'danceType' : 'name';
  // Function to filter data based on the search query
  const filterData = query
    ? data.filter(item => item[key].toLowerCase().includes(query.toLowerCase()))
    : data;

  const handleBook = dancerId => {
    navigation.navigate('DancerProfileScreen', {dancerId});
    // console.log('i am calling...', dancerId);
  };
  const onChangeSearch = text => {
    if (query) {
      setIsShowFilterOption(true);
    }
    setQuery(text);
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
          <View style={{...styles.searchbox, marginBottom: 18}}>
            <TouchableOpacity>
              <Image source={require('../assets/images/search.png')} />
            </TouchableOpacity>
            <TextInput
              value={query}
              onChangeText={onChangeSearch}
              style={{flex: 1}}
              placeholder="Search dance type"
            />
            {/* filter icon */}
            <TouchableOpacity
              style={styles.optionCon}
              onPress={() => {
                setShowFilterOPtion(prv => !prv);
              }}>
              <Image source={require('../assets/images/filter.png')} />
            </TouchableOpacity>
          </View>
          {/* FILTER TYPES  */}
          {showFilterOption && (
            <View style={styles.optionChild}>
              <Text
                style={styles.optionChildTxt}
                onPress={() => {
                  setFilterKey(prv => (prv = {name: false, danceType: true}));
                  setShowFilterOPtion(false);
                  setIsShowFilterOption(true);
                }}>
                {' '}
                Dance Type{' '}
              </Text>
              <View style={styles.horizontalLine} />
              <Text
                style={styles.optionChildTxt}
                onPress={() => {
                  setFilterKey(prv => (prv = {name: true, danceType: false}));
                  setShowFilterOPtion(false);
                  setIsShowFilterOption(true);
                }}>
                {' '}
                Name{' '}
              </Text>
            </View>
          )}
          {query && isShowFilterOption && (
            <View style={styles.resultsContainer}>
              {filterData.map((item, index) => (
                <Text
                  onPress={() => {
                    setQuery(item[key]);
                    setIsShowFilterOption(false);
                  }}
                  key={index}
                  style={styles.resultItem}>
                  {item[key]}
                </Text>
              ))}
            </View>
          )}
          {filterData.map((item, i) => (
            <ListItem
              key={i}
              image={require('../assets/images/img1.jpg')}
              name={item.name}
              age="24"
              price="40"
              hrs="1"
              type={`Salsa, ${item.danceType}`}
              club="NYC Downtown, Tribeca"
              solidBtnFunc={handleBook}
              solidBtnTxt="Book"
              navigateFunc={handleBook}
              dancerProfileNavigationFun={() =>
                navigation.push('DancerProfileScreen')
              }
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
  //
  //
  container: {
    padding: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 5,
  },
  resultsContainer: {
    marginTop: 10,
    backgroundColor: 'rgba(217, 36, 109, 0.10)',
    width: '100%',
    borderRadius: 10,
    marginBottom: 18,
  },
  resultItem: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(217, 36, 109, 0.2)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    color: '#fff',
    paddingVertical: 5,
    textAlign: 'center',
  },
  optionCon: {
    position: 'relative',
  },
  optionChild: {
    position: 'absolute',
    top: 6,
    right: 25,
    backgroundColor: '#D9246D',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#fff',
    display: 'flex',
    gap: 6,
  },
  optionChildTxt: {
    color: '#fff',
  },
  horizontalLine: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
});
