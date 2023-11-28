/* eslint-disable prettier/prettier */
import { AlertIOS, Platform, ToastAndroid } from 'react-native';

export function notifyMessage(msg) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    AlertIOS.alert(msg);
  }
}
