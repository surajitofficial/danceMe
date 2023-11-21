import { Image, Text, StyleSheet, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import BackBtn from './BackBtn';

const TopNavigation = ({ backBtn, title }) => {
  const navigation = useNavigation();

  const goBack = () => {  if (navigation.canGoBack()) {
      navigation.goBack();
    } else { navigation.navigate('OnboardingScreen');
    }
  };

  return (
    <View style={styles.wrapNavi}>
      {backBtn && (
        <TouchableOpacity onPress={goBack}>
          <BackBtn />
        </TouchableOpacity>
      )}
        {title && (
        <Text
          style={{
            fontFamily: 'Plus Jakarta Sans',
            fontSize: 16,
            fontWeight: '800',
            color: '#000',
          }}>
          {title}
        </Text>
      )}
      <Text></Text>
      {/* Empty Text component can be removed if not needed */}
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  wrapNavi: {
    backgroundColor: '#fff',
    width: '100%',
    height: 44,
    paddingHorizontal: '4%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
