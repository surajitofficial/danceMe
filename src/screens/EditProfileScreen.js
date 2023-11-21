/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import EditProfileDataRow from '../components/EditProfileDataRow';
import TopNavigation from '../components/TopNavigation';
import { ButtonStyle, InputStyled } from '../ui/Styled';

const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [adress, setAdress] = useState('');

  const handleSignIn = () => {
    // Handle sign-in functionality
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };
  const galleryImages = [
    require('../assets/images/img1.jpg'),
    require('../assets/images/img1.jpg'),
    require('../assets/images/img1.jpg'),
  ];
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TopNavigation backBtn={true} title="Edit Profile" />

      <ScrollView style={{height: '93%'}}>
        <View
          style={{
            paddingHorizontal: '1%',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            backgroundColor: '#F8F8F8',
            paddingBottom: 20,
          }}>
          <View style={{width: '100%', height: '78%', alignItems: 'center'}}>
            <Text style={styles.label}>Name</Text>
            <InputStyled
              placeholder="Name"
              value={name}
              onChangeText={setName}
              style={{backgroundColor: '#EFEFF4'}}
            />

            <Text style={styles.label}>Age</Text>
            <InputStyled
              placeholder="Age"
              value={age}
              onChangeText={setAge}
              style={{backgroundColor: '#EFEFF4'}}
            />

            <Text style={styles.label}>About</Text>
            <InputStyled
              placeholder="Address"
              value={adress}
              multiline={true}
              numberOfLines={4}
              onChangeText={setAdress}
              style={{backgroundColor: '#EFEFF4'}}
              row={12}
            />

            <View
              style={{
                paddingVertical: 12,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '92%',
              }}>
              <Text style={[styles.label, {width: 'auto', paddingLeft: 0}]}>
                Dance Expertise
              </Text>
              <TouchableOpacity style={{marginRight: 10}}>
                <Image source={require('../assets/images/plusBox.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.wrpInput}>
              <EditProfileDataRow title="Tap dance" value="Expert" />
              <EditProfileDataRow title="Ballet" value="Well versed" />
              <EditProfileDataRow title="Jazz dance" value="Beginner" />
              <EditProfileDataRow title="Ballroom" value="Beginner" />
            </View>

            <View
              style={{
                paddingVertical: 12,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '92%',
              }}>
              <Text style={[styles.label, {width: 'auto', paddingLeft: 0}]}>
                Gallery
              </Text>
              <TouchableOpacity style={{marginRight: 10}}>
                <Image source={require('../assets/images/plusBox.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.gallery}>
              {galleryImages.map((image, index) => (
                <Image key={index} source={image} style={styles.galleryImage} />
              ))}
            </View>
          </View>

          <View
            style={{
              paddingVertical: 12,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '92%',
            }}>
            <Text style={[styles.label, {width: 'auto', paddingLeft: 0}]}>
              Clubs I dance
            </Text>
            <TouchableOpacity style={{marginRight: 10}}>
              <Image source={require('../assets/images/plusBox.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.wrpInput}>
            <InputStyled
              placeholder="Song name"
              value="The Grand"
              style={[styles.hgtInput, {marginBottom: 0}]}
            />
            <InputStyled
              placeholder="Type singer name"
              value="Pura Club"
              style={[styles.hgtInput, {marginBottom: 7}]}
            />
          </View>

          <ButtonStyle onPress={handleSignIn}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
              Update
            </Text>
          </ButtonStyle>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  smallBtn: {
    width: 66,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFF4',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D5D5DC',
    gap: 5,
    fontFamily: 'Plus Jakarta Sans',
  },
  smallBtnText: {
    color: '#8A8A8F',

    fontSize: 14,
  },

  btnTitle: {
    color: '#000',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,

    fontWeight: '600',
    paddingBottom: 5,
  },
  wrpInput: {
    borderRadius: 10,
    backgroundColor: '#efeff4',
    padding: '1%',
    width: '94%',
  },
  hgtInput: {
    backgroundColor: '#EFEFF4',
    height: 24,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  label: {
    color: '#8A8A8F',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    letterSpacing: 1,
    width: '100%',
    paddingHorizontal: '4%',
    marginTop: 10,
  },
  title: {
    color: '#000',
    marginTop: 5,
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 15,
    fontWeight: '700',
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
});

export default EditProfileScreen;
