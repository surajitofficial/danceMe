/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Test = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {/* First Row */}
        <View style={styles.row}>
          <View style={styles.leftContent} />
          <Text style={styles.middleContent}>Your Text Here</Text>
          <TouchableOpacity style={styles.rightContent}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>

        {/* Second Row */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text>Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Button 2</Text>
          </TouchableOpacity>
        </View>

        {/* Third Row */}
        <TouchableOpacity style={styles.fullWidthButton}>
          <Text>Apply</Text>
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
    backgroundColor: 'transparent',
  },
  box: {
    width: 300,
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'space-between',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    flex: 1,
  },
  middleContent: {
    flex: 1,
    textAlign: 'center',
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 40,
  },
  fullWidthButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 5,
    height: 40,
  },
});

export default Test;
