/* eslint-disable prettier/prettier */
import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  AlertIOS,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import ListItem from '../components/ListItem';
import TopNavigation from '../components/TopNavigation';
import { Style } from '../style/Style';

const History = () => {
  const [requestStatus, setRequestStatus] = useState({
    upcoming: true,
    completed: false,
  });
  // Sample data to be filtered
  const [data, setData] = useState([
    {id: '1', name: 'Jon doe'},
    {id: '2', name: 'Nikki Bhone'},
    {id: '3', name: 'Alex'},
    // Add more items as needed
  ]);
  const role = useSelector(state => state?.auth?.clientRole);
  const {params} = useRoute();
  const [lastPress, setLastPress] = useState(0);
  const [query, setQuery] = useState('');
  const [isShowFilterOption, setIsShowFilterOption] = useState(true);

  function notifyMessage(msg) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  }
  // Function to filter data based on the search query
  const filterData = query
    ? data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
    : data;

  const enableUpcoming = () => {
    setRequestStatus(prv => {
      return {...prv, upcoming: true, completed: false};
    });
  };
  const enableCompleted = () => {
    setRequestStatus(prv => {
      return {...prv, upcoming: false, completed: true};
    });
  };
  const handleDoubleClick = () => {
    // const currentTime = new Date().getTime();
    // const doublePressDelay = 300; // Adjust this value to set the time frame for double click
    // if (currentTime - lastPress <= doublePressDelay) {
    //   // Double click detected
    //   console.log('Double click detected!');
    //   // Perform your action for a double click here

    //   // Reset last press
    //   setLastPress(0);
    // }
    Alert.alert(
      'Confirmation',
      'Do you want to complete this request?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            notifyMessage('SUCCESS');
            setRequestStatus({completed: true, upcoming: false});
          },
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={Style.wrpAll}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TopNavigation
        backBtn={true}
        title={`${params?.songHistory ? 'Songs requested history' : ''}${
          params?.dancersHistory ? 'Dancers requested history' : ''
        }`}
      />
      <ScrollView>
        <View style={[Style.mainBackground, Style.mainBackgroundGray]}>
          {/* SEARCH START*/}
          <View style={styles.searchbox}>
            {/* search icon */}
            <TouchableOpacity>
              <Image source={require('../assets/images/search.png')} />
            </TouchableOpacity>
            <TextInput
              value={query}
              onChangeText={text => {
                setQuery(text);
                if (query) {
                  setIsShowFilterOption(true);
                }
              }}
              style={{flex: 1}}
              placeholder={`${
                // FOR SONG REQUEST
                params?.songHistory ? 'Search requestor name' : ''
                // FOR DANCER REQUEST
              } ${params?.dancersHistory ? 'Search requestor name' : ''}`}
            />
            {/* filter icon */}
            <TouchableOpacity>
              <Image source={require('../assets/images/filter.png')} />
            </TouchableOpacity>
          </View>
          {isShowFilterOption && query && (
            <View style={styles.resultsContainer}>
              {filterData.map((item, index) => (
                <Text
                  onPress={() => {
                    setQuery(item.name);
                    setIsShowFilterOption(false);
                  }}
                  key={index}
                  style={styles.resultItem}>
                  {item.name}
                </Text>
              ))}
            </View>
          )}
          {/* SEARCH END*/}
          {/* UPCOMING / COMPLETED START*/}
          <View style={styles.SlideBtn}>
            <TouchableOpacity
              onPress={enableUpcoming}
              style={
                requestStatus.upcoming
                  ? [styles.btn, styles.activeBtn]
                  : [styles.btn]
              }>
              <Text
                style={requestStatus.upcoming ? [styles.clor] : [styles.txt]}>
                Upcoming
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={enableCompleted}
              style={
                requestStatus.completed
                  ? [styles.btn, styles.activeBtn]
                  : [styles.btn]
              }>
              <Text
                style={requestStatus.completed ? [styles.clor] : [styles.txt]}>
                Completed
              </Text>
            </TouchableOpacity>
          </View>
          {/* UPCOMING / COMPLETED END*/}
          {filterData.map((item, i) => (
            <TouchableOpacity
              onPress={() => console.log('i am calling')}
              key={i}>
              <ListItem
                key={i}
                screen="history"
                image={require('../assets/images/img1.jpg')}
                name={item.name}
                price="100"
                timeInHistory="10 Sep, 2023   07:00 PM"
                duration="3"
                club="NYC Downtown, Tribeca"
                isUser={role === 'user'}
                // handlePress
                handleDoubleClick={handleDoubleClick}
                // HISTORY
                // request status page
                requestStatusOfPage={requestStatus}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  searchItem: {
    backgroundColor: '#ff459f',
  },
  searchbox: {
    borderRadius: 8,
    backgroundColor: '#EFEFF4',
    marginHorizontal: '2%',
    marginTop: 15,
    marginBottom: 3,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '3.5%',
    gap: 5,
  },
  SlideBtn: {
    // borderRadius: 8,
    // backgroundColor: '#EFEFF4',
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
});
