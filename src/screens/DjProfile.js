/* eslint-disable prettier/prettier */
import React from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TopNavigation from '../components/TopNavigation';
import { Style } from '../style/Style';

const DjProfile = ({navigation}) => {
  const galleryImages = [
    require('../assets/images/img2.png'),
    require('../assets/images/img2.png'),
    require('../assets/images/img2.png'),
    require('../assets/images/img2.png'),
  ];
  const songList = [
    {id: 1, songName: 'Cruel Summer1'},
    {id: 2, songName: 'Cruel Summer2'},
    {id: 3, songName: 'Cruel Summer3'},
    {id: 4, songName: 'Cruel Summer4'},
    {id: 5, songName: 'Cruel Summer5'},
    {id: 6, songName: 'Cruel Summer6'},
    {id: 7, songName: 'Cruel Summer7'},
  ];
  const ListSong = ({item}) => {
    return (
      <View key={item.index} style={styles.listRow}>
        <Image
          style={styles.songIcon}
          source={require('../assets/images/iconTune1.png')}
        />
        <Text style={styles.songName}>Cruel Summer</Text>
      </View>
    );
  };
  const handleOnClick = path => {
    navigation.push(path);
  };

  return (
    <View style={Style.wrpAll}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TopNavigation backBtn={true} title="DJ" />

      <View style={[Style.mainBackground, Style.mainBackgroundGray]}>
        {/* <View style={styles.djProfile}>
          <View style={styles.djPic}>
            <Image
              style={styles.img}
              source={require('../assets/images/img1.jpg')}
            />
          </View>
          <Text style={styles.djNam}>Nikki Bohne</Text>
          <Text style={styles.djLocation}>San Francisco, USA</Text>
        </View> */}
        <View style={styles.container}>
          {/* Left side (Blank) */}
          <View style={styles.left} />

          {/* Middle portion with avatar, title, and location */}
          <View style={styles.middle}>
            {/* Avatar */}
            <Image
              source={require('../assets/images/img1.jpg')} // Replace with actual avatar URL
              style={styles.avatar}
            />

            {/* Title */}
            <Text style={styles.title}>Nikki Bohne</Text>

            {/* Location */}
            <Text style={styles.location}>Sen Francisco, USA</Text>
          </View>

          {/* Right side with buttons */}
          <View style={styles.right}>
            {/* Request button */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleOnClick('DancerListScreen')}>
              <Text style={styles.buttonText}>Request</Text>
            </TouchableOpacity>
            {/* Chat button */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleOnClick('ChatScreen')}>
              <Text style={styles.buttonText}>Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.subtitle}>Associated Clubs</Text>
        <ScrollView horizontal>
          <View style={styles.gallery}>
            {galleryImages.map((image, index) => (
              <View key={index} style={styles.galWrp}>
                <Image key={index} source={image} style={styles.galleryImage} />
                <Text style={styles.galTxt}>The Grand</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <Text style={styles.title}>Song List</Text>
        <FlatList
          style={{width: '100%'}}
          data="songList"
          renderItem={items => <ListSong item={items} />}
        />
      </View>
    </View>
  );
};

export default DjProfile;

const styles = StyleSheet.create({
  subtitle: {
    color: '#000',
    marginVertical: 5,
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 15,
    fontWeight: '700',
    width: '100%',
  },
  gallery: {
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 6,

    width: '100%',
  },
  galleryImage: {
    width: 147,
    height: 147,
    marginRight: 10,
    borderRadius: 10,
  },
  djProfile: {alignItems: 'center', marginVertical: 15},
  img: {width: '100%', height: '100%'},
  djPic: {width: 71, height: 71, overflow: 'hidden', borderRadius: 71},
  djNam: {
    color: '#000',

    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: '700',
  },
  djLocation: {
    color: '#979797',

    fontFamily: 'Plus Jakarta Sans',
    fontSize: 13,
    fontWeight: '500',
  },
  galTxt: {
    position: 'absolute',
    color: '#FFF',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 15,
    fontWeight: '600',
    paddingBottom: 10,
  },
  galWrp: {justifyContent: 'flex-end', alignItems: 'center'},

  txtCat: {
    color: '#D9246D',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    width: '100%',
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 9,
    borderRadius: 6,
  },
  songName: {
    color: '#000',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 15,
    fontWeight: '500',
  },
  //
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    // borderWidth: 1,
    // borderColor: '#ccc',
  },
  left: {
    flex: 1, // Takes one-third of the space
  },
  middle: {
    flex: 1, // Takes one-third of the space
    alignItems: 'center',
  },
  right: {
    flex: 1, // Takes one-third of the space
    alignItems: 'flex-end',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  location: {
    fontSize: 12,
    color: '#888',
  },
  button: {
    backgroundColor: '#ff2b80',
    width: 95,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
