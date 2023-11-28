/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import ListItem from '../components/ListItem';
import TopNavigation from '../components/TopNavigation';
import {Style} from '../style/Style';

const DjList = ({navigation}) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const handleRequest = () => {};
  return (
    <View style={Style.wrpAll}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TopNavigation backBtn={true} title="DJ List" />

      <ScrollView>
        <View style={[Style.mainBackground, Style.mainBackgroundGray]}>
          <View style={styles.searchbox}>
            <TouchableOpacity>
              <Image source={require('../assets/images/search.png')} />
            </TouchableOpacity>
            <TextInput style={{flex: 1}} placeholder="Search Dancers" />
            <TouchableOpacity onPress={() => setFilterVisible(true)}>
              <Image source={require('../assets/images/filter.png')} />
            </TouchableOpacity>
          </View>
          {Array.from({length: 12}).map((v, i) => (
            <ListItem
              key={i}
              screen="djlist"
              playLive={true}
              image={require('../assets/images/img1.jpg')}
              name="Nikki Bohne"
              type="Salsa, Hiphop"
              solidBtnFunc={handleRequest}
              solidBtnTxt="Request Song"
              djProfileNavigationFun={() => navigation.push('DjProfileScreen')}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
      <Modal
  animationType="slide"
  transparent={true}
  visible={filterVisible}
  onRequestClose={() => setFilterVisible(false)}>
  <View style={modalStyles.centeredView}>
    <View style={modalStyles.modalView}>
      <Text style={modalStyles.modalTitle}>Filter By</Text>
      <TouchableOpacity
        style={modalStyles.closeButton}
        onPress={() => setFilterVisible(false)}>
        <Icon name="close" size={24} color="#000" />
      </TouchableOpacity>

      {/* Modal Content */}
      <View style={{ alignSelf: 'stretch', alignItems: 'center' }}>
        {/* Live filter option */}
        <View style={modalStyles.filterOption}>
          <Text style={modalStyles.filterLabel}>Live</Text>
          <View style={modalStyles.toggleButtons}>
            <TouchableOpacity style={modalStyles.toggleButton}>
              <Text style={modalStyles.toggleText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyles.toggleButton}>
              <Text style={modalStyles.toggleText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Song Category filter option */}
        <View style={modalStyles.filterOption}>
          <Text style={modalStyles.filterLabel}>Song Category</Text>
          <View style={modalStyles.toggleButtons}>
            <TouchableOpacity style={modalStyles.toggleButton}>
              <Text style={modalStyles.toggleText}>Tap Dance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyles.toggleButton}>
              <Text style={modalStyles.toggleText}>Ballet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyles.toggleButton}>
              <Text style={modalStyles.toggleText}>Jazz Dance</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Apply Filter button */}
      <TouchableOpacity
        style={modalStyles.applyButton}
        onPress={() => {
          // Implement the logic to apply filters here
          setFilterVisible(false);
        }}>
        <Text style={modalStyles.applyButtonText}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

    </View>
  );
};


export default DjList;
const styles = StyleSheet.create({
  searchbox: {
    borderRadius: 8,
    backgroundColor: '#EFEFF4',
    marginHorizontal: '2%',
    marginTop: 15,
    marginBottom: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '3.5%',
    gap: 5,
  },
});

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  filterOption: {
    marginBottom: 10,
    alignSelf: 'stretch',
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  toggleButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  toggleButton: {
    backgroundColor: '#E91E63',
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 12,
    width: '30%', // Smaller buttons, adjust as needed
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  applyButton: {
    backgroundColor: '#E91E63',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: 'stretch',
    marginTop: 10,
  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});




