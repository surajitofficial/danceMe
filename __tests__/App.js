/* eslint-disable prettier/prettier */
// import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Chat from './src/screens/Chat';
import DanceRequest from './src/screens/DanceRequest';
import DancerListScreen from './src/screens/DancerListScreen';
import DancerProfileScreen from './src/screens/DancerProflie';
import DjList from './src/screens/DjList';
import DjProfile from './src/screens/DjProfile';
import EditProfileScreen from './src/screens/EditProfileScreen';
import History from './src/screens/History';
import Notification from './src/screens/Notification';
import OnboardingScreen from './src/screens/OnboardingScreen';
import RequestPackSongScreen from './src/screens/RequestPackSongScreen';
import RequestSingleSongScreen from './src/screens/RequestSingleSongScreen';
import RequestSongScreen from './src/screens/RequestSongScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SongRequest from './src/screens/SongRequest';
import WelcomeScreenForDancer from './src/screens/WelcomeScreenForDancer';
import WelcomeScreenForDj from './src/screens/WelcomeScreenForDj';
import WelcomeScreenForUser from './src/screens/WelcomeScreenForUser';


const Stack = createStackNavigator();

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(() => {
    const checkAppFirstLaunch = async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData === null) {
        setIsAppFirstLaunched(true);
        await AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }
    };
    checkAppFirstLaunch();
  }, []);

  if (isAppFirstLaunched === null) {
    return null; // or Loading component if preferred
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* {isAppFirstLaunched && (
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        )} */}
          {/* RequestSongScreen */}
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          {/* <Stack.Screen name="OnboardingScreen" component={DancerListScreen} /> */}
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          {/* WELCOME SCREEN */}
          <Stack.Screen name="WelcomeScreenForUser"component={WelcomeScreenForUser}/>
          <Stack.Screen name="WelcomeScreenForDancer" component={WelcomeScreenForDancer}/>
          <Stack.Screen name="WelcomeScreenForDj" component={WelcomeScreenForDj}/>
          <Stack.Screen name="DancerProfileScreen" component={DancerProfileScreen}/>
          <Stack.Screen name="EditProfileScreen" component={EditProfileScreen}/>
          <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
          <Stack.Screen name="HistoryScreen" component={History} />
          {/* LIST DANCER / DJ */}
          <Stack.Screen name="DancerListScreen" component={DancerListScreen} />
          <Stack.Screen name="DjListScreen" component={DjList} />
          <Stack.Screen name="DjProfileScreen" component={DjProfile} />
          {/* REQUESTED SCREEN */}
          <Stack.Screen name="RequestSongScreen"component={RequestSongScreen}/>
          <Stack.Screen name="DanceRequestScreen"component={DanceRequest}/>
          <Stack.Screen name="SongRequest" component={SongRequest} />
          <Stack.Screen name="RequestSingleSongScreen" component={RequestSingleSongScreen}/>
          <Stack.Screen name="RequestPackSongScreen" component={RequestPackSongScreen}/>
          <Stack.Screen name="notificationScreen" component={Notification}/>
          <Stack.Screen name="ChatScreen" component={Chat}/>

        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
