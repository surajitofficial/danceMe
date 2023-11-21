import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#fff'};

const slides = [
  {
    id: '1',
    slider: '01.',
    image: require('../assets/images/onboarding-01.png'),
    title: 'Find Dance club',
    title1: 'Near You',
    subtitle: 'Discover the best dance club you want by your location.',
    tnc: 'By joining you agree to ours Terms of Service and Privacy Policy',
  },
  {
    id: '2',
    slider: '02.',
    image: require('../assets/images/onboarding-02.png'),
    title: 'Find Your',
    title1: 'Favorite Dancer',
    subtitle:
      'Save the favorite dance club and easily have your own instructor',
    tnc: 'By joining you agree to ours Terms of Service and Privacy Policy',
  },
  {
    id: '3',
    slider: '03.',
    image: require('../assets/images/onboarding-03.png'),
    title: 'Reserve a',
    title1: 'Dancing Time',
    subtitle:
      'Excite your heart and your mind and feel the pleasure within yourself',
    tnc: 'By joining you agree to ours Terms of Service and Privacy Policy',
  },
  {
    id: '4',
    slider: '04.',
    image: require('../assets/images/onboarding-04.png'),
    title: 'Enjoy your',
    title1: 'dance',
    subtitle:
      'Excite your heart and your mind and feel the pleasure within yourself',
    tnc: 'By joining you agree to ours Terms of Service and Privacy Policy',
  },
];

const OnboardingScreen = ({navigation}) => {
  const user = useSelector(state => state.auth.user);
  // console.log(user);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex < slides.length) {
      setCurrentSlideIndex(nextSlideIndex);
    } else {
      navigation.push('SignInScreen');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <ImageBackground
        source={slides[currentSlideIndex].image}
        style={styles.imageBackground}>
        <View style={styles.centeredView}>
          <Text style={styles.sliderStyle}>
            {slides[currentSlideIndex].slider}
          </Text>
          <Text style={styles.title}>{slides[currentSlideIndex].title}</Text>
          <Text style={styles.title1Style}>
            {slides[currentSlideIndex].title1}
          </Text>

          <Text style={styles.subtitle}>
            {slides[currentSlideIndex].subtitle}
          </Text>
          {currentSlideIndex !== slides.length && (
            <TouchableOpacity onPress={goToNextSlide}>
              <Image
                source={require('../assets/images/ButtonNext.png')}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          )}
          <Text style={styles.tncStyle}>{slides[currentSlideIndex].tnc}</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: 'rgba(40, 37, 52, 0.2)',
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 17,
    marginTop: 22,
    maxWidth: '70%',
    textAlign: 'left',
    lineHeight: 23,
    // marginBottom: 70,
    marginLeft: 25,
    marginRight: 30,
  },
  tncStyle: {
    color: COLORS.white,
    fontSize: 13,
    maxWidth: '80%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 30,
    marginRight: 25,

    marginTop: 80,
  },
  title1Style: {
    color: COLORS.white,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 25,
    marginRight: 30,
  },
  sliderStyle: {
    color: COLORS.white,
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'left',
    marginLeft: 25,
    marginRight: 30,
    marginTop: '60%',
  },
  title: {
    color: COLORS.white,
    fontSize: 35,
    fontWeight: 'bold',
    // marginTop: 20,
    textAlign: 'left',
    marginLeft: 25,
    marginRight: 30,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnboardingScreen;
