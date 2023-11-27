/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  AlertIOS,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import TopNavigation from '../components/TopNavigation';
import { Style } from '../style/Style';
import { ButtonStyle, InputStyled } from '../ui/Styled';

const ScheduleScreen = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [danceType, setDanceType] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Handle SUCCESS msg
  function notifyMessage(msg) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  }

  // Function to handle duration selection
  const handleSelectDuration = duration => {
    setSelectedDuration(duration);
  };
  // Function to handle time selection
  const handleSelectTime = time => {
    setSelectedTime(time);
  };
  // Function to handle dance type
  const handleDanceType = typeOfDance => {
    setDanceType(typeOfDance);
  };
  // From validation
  const validateForm = () => {
    let formErrors = {};

    // Select duration validation
    if (!selectedDuration) {
      formErrors.selectedDuration = 'required*';
    }
    // Start time validation
    if (!selectedTime) {
      formErrors.selectedTime = 'required*';
    }
    // Dance type validation
    if (!danceType) {
      formErrors.danceType = 'required*';
    }
    // calender validation
    if (!selectedDate) {
      formErrors.selectedDate = 'required*';
    }
    setErrors(formErrors);
    // Return true if there are no errors
    return Object.keys(formErrors).length === 0;
  };
  // handle submit
  const handleSubmit = async () => {
    let timer;
    const isValid = validateForm();
    if (isValid) {
      setIsLoading(true);
      const waitTwoSeconds = () => {
        return new Promise(resolve => {
          timer = setTimeout(() => {
            resolve('Hello after 2 seconds!');
          }, 2000);
        });
      };
      try {
        await waitTwoSeconds();
        notifyMessage('SUCCESS.');
        setIsError(false);
        setIsLoading(false);
        navigation.push('DanceRequestScreen');
        console.log({
          selectedDate,
          startTime: selectedTime,
          duration: selectedDuration,
          danceType,
        });
        clearTimeout(timer);
      } catch (error) {
        setIsError(true);
        clearTimeout(timer);
      }
    }
  };

  return (
    <View style={Style.wrpAll}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TopNavigation backBtn={true} title="Schedule " />

      <ScrollView style={styles.container}>
        <View style={styles.danceTypeSection}>
          <Text style={styles.headerText}>You are booking Nikki Bohne</Text>
        </View>
        <Calendar
          style={[
            errors.selectedDate && styles.calenderError,
            !selectedDate && styles.calenderError,
          ]}
          // ... additional props and styling for Calendar
          // Example prop:
          onDayPress={day => {
            setSelectedDate(day.dateString);
          }}
          markedDates={{
            [selectedDate]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'green',
              selectedColor: 'green',
            },
          }}
        />
        {/* START TIME */}
        <View style={styles.danceTypeSection}>
          {/* START ERROR MSG */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.headerText}>Start Time</Text>
            {errors.selectedTime && (
              <Text
                style={{
                  color: 'red',
                  marginRight: 'auto',
                  marginLeft: 12,
                  marginBottom: 10,
                }}>
                {errors.selectedTime}
              </Text>
            )}
          </View>
          {/* START TIME */}
          <View style={styles.startTimeOptions}>
            {['07:00 PM', '09:00 PM', '10:00 PM'].map((time, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.durationButton,
                  selectedTime === time && styles.selectedDurationButton,
                  !selectedTime && styles.errorBorder,
                ]}
                onPress={() => handleSelectTime(time)}>
                <Text
                  style={[
                    styles.durationText,
                    selectedTime === time && styles.selectedDurationText,
                  ]}>
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* Add Time Picker or custom time selection components here */}
        </View>
        {/* DURATION  */}
        <View style={styles.danceTypeSection}>
          {/* ERROR MSG */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.headerText}>Duration</Text>
            {errors.selectedDuration && (
              <Text
                style={{
                  color: 'red',
                  marginRight: 'auto',
                  marginLeft: 12,
                  marginBottom: 10,
                }}>
                {errors.selectedDuration}
              </Text>
            )}
          </View>
          {/* DURATION TIME */}
          <View style={styles.durationOptions}>
            {['30m', '60m', '90m', '2h', '3h', '4h'].map(duration => (
              <TouchableOpacity
                key={duration}
                style={[
                  styles.durationButton,
                  selectedDuration === duration &&
                    styles.selectedDurationButton,
                  !selectedDuration && styles.errorBorder,
                ]}
                onPress={() => handleSelectDuration(duration)}>
                <Text
                  style={[
                    styles.durationText,
                    selectedDuration === duration &&
                      styles.selectedDurationText,
                  ]}>
                  {duration}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* DANCE TYPE */}
        <View style={styles.danceTypeSection}>
          <Text style={styles.headerText}>Dance type</Text>
          <InputStyled
            onChangeText={handleDanceType}
            placeholder="Dance type"
            value={danceType}
            style={[
              styles.danceTypeText,
              danceType && styles.inputSuccessBorder,
              !danceType && styles.inputErrorBorder,
            ]}
          />
          {/* DANCE TYPE ERROR MSG */}
          {errors.danceType && (
            <Text
              style={{
                color: 'red',
                marginRight: 'auto',
                marginLeft: 12,
                marginBottom: 10,
              }}>
              {errors.danceType}
            </Text>
          )}
        </View>
        <View style={{alignItems: 'center', paddingBottom: 10}}>
          <ButtonStyle onPress={handleSubmit}>
            <Text style={styles.paymentButtonText}>
              {isLoading ? 'sending...' : 'Guest login'}
            </Text>
          </ButtonStyle>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  calenderError: {
    borderWidth: 1,
    borderColor: 'red',
    height: 350,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 2,
    color: '#000',
    fontFamily: 'Plus Jakarta Sans',
  },
  timeSection: {
    // styles for time section
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 16,
  },
  durationSection: {
    // styles for duration section
  },
  startTimeOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  durationOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  durationButton: {
    borderWidth: 1,
    backgroundColor: '#EFEFF4',
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#D9246D00',
    width: 105,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDurationButton: {
    // TODO
    // borderColor: '#D9246D',
    borderColor: 'green',
  },
  errorBorder: {
    // TODO
    // borderColor: '#D9246D',
    borderColor: 'red',
  },
  inputErrorBorder: {
    // TODO
    // borderColor: '#D9246D',
    borderWidth: 1,
    borderColor: 'red',
  },
  inputSuccessBorder: {
    // TODO
    // borderColor: '#D9246D',
    borderWidth: 1,
    borderColor: 'green',
  },
  durationText: {
    fontSize: 16,
  },
  selectedDurationText: {
    // TODO
    // color: 'red',
    color: 'green',
    fontWeight: 'bold',
  },
  danceTypeSection: {
    // styles for dance type section
    paddingHorizontal: 16,
  },
  danceTypeText: {
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#EFEFF4',
    height: 44,
    lineHeight: 44,
    paddingHorizontal: 10,
    marginVertical: 7,
  },
  paymentButton: {
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ScheduleScreen;
