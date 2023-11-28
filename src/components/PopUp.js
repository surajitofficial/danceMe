/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SmallButtonStyle } from '../ui/Styled';

const PopUp = ({onClose, setQuery, setShowFilterOPtion}) => {
  const [danceOption, setDanceOption] = useState({salsa: true, hipHop: false});
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.row}>
          {/* Empty left side */}
          <View style={styles.emptySide} />

          {/* Middle text */}
          <Text style={styles.text}>Filter By</Text>

          {/* Close button */}
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            {/* <Icone style={styles.closeText} name="Close" /> */}
            <Icon name={'close'} color={'#fff'} size={23} />
          </TouchableOpacity>
        </View>
        {/* Second and third rows */}
        <View>
          <Text style={{color: '#fff'}}>Dance type</Text>
          <View style={styles.row2}>
            <SmallButtonStyle
              style={[
                {marginTop: 12},
                danceOption.salsa
                  ? {backgroundColor: '#d9246d'}
                  : {backgroundColor: '#e6e1e1'},
              ]}>
              <Text
                onPress={() => {
                  setDanceOption({hipHop: false, salsa: true});
                }}
                style={[
                  danceOption.salsa ? {color: '#fff'} : {color: '#d9246d'},
                ]}>
                Salsa
              </Text>
            </SmallButtonStyle>
            <SmallButtonStyle
              style={[
                {marginTop: 12},
                danceOption.hipHop
                  ? {backgroundColor: '#d9246d'}
                  : {backgroundColor: '#e6e1e1'},
              ]}>
              <Text
                onPress={() => {
                  setDanceOption({hipHop: true, salsa: false});
                }}
                style={[
                  danceOption.hipHop ? {color: '#fff'} : {color: '#d9246d'},
                ]}>
                Hip Hop
              </Text>
            </SmallButtonStyle>
          </View>
        </View>
        {/* Third Row */}
        <TouchableOpacity
          onPress={() => {
            danceOption.salsa && setQuery('Salsa');
            danceOption.hipHop && setQuery('Hip-Hop');
            setShowFilterOPtion(false);
          }}
          style={styles.fullWidthButton}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    zIndex: 10,
  },
  box: {
    width: 300,
    height: 200,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
    gap: 10,
  },
  emptySide: {
    flex: 1,
  },
  text: {
    flex: 3,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  closeBtn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  closeText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  fullWidthButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f52779',
    borderRadius: 5,
    height: 40,
    marginBottom: 5,
  },
  // Add styles for second and third row as needed
});

export default PopUp;
