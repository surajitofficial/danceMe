import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BackBtn = () => {
  return (
    <TouchableOpacity>
      <Image source={require('../assets/images/Group.png')} />
    </TouchableOpacity>
  );
};

export default BackBtn;

const styles = StyleSheet.create({});
