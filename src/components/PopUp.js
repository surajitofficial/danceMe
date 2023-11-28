import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SmallButtonStyle } from '../ui/Styled';

const PopUp = ({ onClose, setQuery, setShowFilterOption }) => {
  const [danceOption, setDanceOption] = useState({ salsa: true, hipHop: false });

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
            <Icon name={'close'} color={'#10132D'} size={23} />
          </TouchableOpacity>
        </View>

        {/* Second and third rows */}
        <View>
          <Text style={{ color: '#10132D', fontFamily:"Plus Jakarta Sans" }}>Dance type</Text>
          <View style={styles.row2}>
            <SmallButtonStyle
              style={[
                { marginTop: 12 },
                danceOption.salsa
                  ? { backgroundColor: '#d9246d' }
                  : { backgroundColor: '#e6e1e1' },
              ]}>
              <Text
                onPress={() => {
                  setDanceOption({ hipHop: false, salsa: true });
                }}
                style={[
                  danceOption.salsa ? { color: '#fff' } : { color: '#d9246d' },
                ]}>
                Salsa
              </Text>
            </SmallButtonStyle>
            <SmallButtonStyle
              style={[
                { marginTop: 12 },
                danceOption.hipHop
                  ? { backgroundColor: '#d9246d' }
                  : { backgroundColor: '#e6e1e1' },
              ]}>
              <Text
                onPress={() => {
                  setDanceOption({ hipHop: true, salsa: false });
                }}
                style={[
                  danceOption.hipHop ? { color: '#fff' } : { color: '#d9246d' },
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
            setShowFilterOption(false);
          }}
          style={styles.fullWidthButton}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Apply</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  box: {
    width: 300,
    height: 200,
    backgroundColor: '#FFFFFF', // Background color set to white
    borderRadius: 10,
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 20, // Shadow radius
    elevation: 5, // For Android shadow effect
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
    color: '#10132D',
  },
  closeBtn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  fullWidthButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f52779',
    borderRadius: 5,
    height: 40,
    marginBottom: 5,
  },
});

export default PopUp;
