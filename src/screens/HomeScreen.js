import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('OnboardingScreen')}>
        <Text>Go back to Onboarding</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
