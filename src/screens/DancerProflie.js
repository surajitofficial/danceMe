/* eslint-disable prettier/prettier */
import { useRoute } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TopNavigation from '../components/TopNavigation';
import { ButtonStyle } from '../ui/Styled';

const DancerProfileScreen = ({navigation}) => {
  const route = useRoute();
  // TODO
  console.log(route.params);
  // Replace with your actual image paths
  const profileImage = require('../assets/images/Mask.png');
  const galleryImages = [
    require('../assets/images/img1.jpg'),
    require('../assets/images/img1.jpg'),
  ];

  return (
    <ScrollView style={styles.container}>
      <TopNavigation backBtn={true} title="Dancer Profile" />
      <Image source={profileImage} style={styles.profileImage} />
      <View style={styles.profileDetails}>
        <Text style={styles.name}>Nikki Bohne</Text>
        <Text style={styles.age}>
          Age: <Text style={{color: '#000'}}>24</Text>
        </Text>
        <View style={styles.aboutReviews}>
          <Text style={styles.about}>About</Text>
          <Text style={[styles.about, styles.reviews]}>Reviews</Text>
        </View>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
        </Text>
        <Text style={styles.title}>Dance Category</Text>
        <View style={styles.danceCategory}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text>Tap dance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text>Ballet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text>Jazz dance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text>Ballroom</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Clubs I dance</Text>
        <View style={styles.clubs}>
          <Text style={styles.textBx}>The Grand: Salsa</Text>
          <Text style={styles.textBx}>Pura Club: Hip-hop</Text>
        </View>
        <Text style={styles.title}>Gallery</Text>
        <View style={styles.gallery}>
          {galleryImages.map((image, index) => (
            <Image key={index} source={image} style={styles.galleryImage} />
          ))}
        </View>

        <ButtonStyle onPress={() => navigation.push('ScheduleScreen')}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
            Schedule a dance
          </Text>
        </ButtonStyle>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  profileDetails: {
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  age: {
    fontSize: 13,
    color: '#979797',
  },
  aboutReviews: {
    flexDirection: 'row',
    marginTop: 10,
  },
  about: {
    fontWeight: 'bold',
    marginRight: 20,
    color: '#000',

    fontFamily: 'Plus Jakarta Sans',
    fontSize: 15,
    lineHeight: 17,
    marginTop: 7,
  },
  reviews: {},
  description: {
    // marginTop: 10,
    color: '#868698',
    marginTop: 5,
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 13,
    lineHeight: 17,
    marginBottom: 10,
  },
  danceCategory: {
    flexDirection: 'row',
    marginTop: 6,
    justifyContent: 'space-between',
    width: '100%',
  },
  categoryButton: {
    marginRight: 10,
    backgroundColor: '#F3F3F3',
    padding: 5,
    borderRadius: 25,
    paddingHorizontal: 13,
  },
  catText: {
    color: '#666',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 10,
    fontWeight: '500',
  },
  clubs: {
    marginTop: 0,
  },
  gallery: {
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 6,
    justifyContent: 'space-between',
  },
  galleryImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  scheduleButton: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  scheduleText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    color: '#000',
    marginTop: 5,
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 15,
    fontWeight: '700',
  },
  textBx: {
    color: '#000',
    marginTop: 5,
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default DancerProfileScreen;
