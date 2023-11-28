/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userAsyncStorage = [
  {id: 1, name: 'alex', age: '23', about: "let'a dance", role: 'user'},
  {id: 2, name: 'roman', age: '25', about: "let'a dance", role: 'user'},
];
export const dancerAsyncStorage = [
  {
    id: 1,
    name: 'Nikki Bohone',
    age: '30',
    about: "let'a dance",
    role: 'dancer',
  },
  {id: 2, name: 'Jon doe', age: '29', about: "let'a dance", role: 'dancer'},
];
export const djAsyncStorage = [
  {
    id: 1,
    name: 'Joy',
    age: '30',
    about: "let'a dance",
    role: 'dj',
  },
  {id: 2, name: 'Bile', age: '29', about: "let'a dance", role: 'dj'},
];

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('Data stored successfully');
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
};
