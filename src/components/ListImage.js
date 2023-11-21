import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListImage = ({image}) => {
  return (
    <View style={styles.roundedImg}>
      <Image
        style={styles.imgC}
        source={image}
      />
    </View>
  );
};

export default ListImage;

const styles = StyleSheet.create({
  imgC: {width: '100%', height: '100%'},
  roundedImg: {width: 45, height: 45, borderRadius: 50, overflow:'hidden'},

});
