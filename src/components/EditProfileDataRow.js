import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BodyHeadTxt, InputStyled, TopSubText, ButtonStyle} from '../ui/Styled';

const EditProfileDataRow = ({title, value}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.labelText}>{title} :</Text>
      <InputStyled value={value} style={[styles.hgtInput, {marginBottom: 0}]} />
    </View>
  );
};

export default EditProfileDataRow;

const styles = StyleSheet.create({
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
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    alignItems: 'center',
  },
  labelText: {
    color: '#000',

    fontSize: 16,
    width:'28%'
  },
});
