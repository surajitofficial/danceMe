/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  BoxRoundedConerStyled,
  SmallButtonStyle,
  SmallOutlineButtonStyle,
} from '../ui/Styled';
import ListImage from './ListImage';

const ListItem = ({
  screen,
  alterColor,
  name,
  age,
  type,
  club,
  playLive,
  outlineBtn,
  price,
  hrs,
  request,
  image,
  icon,
  requestTime,
  pinkColor,
  duration,
  timeInHistory,
  requestedBy,
  requestTimeBy,
  solidBtnFunc,
  solidBtnTxt,
  outlineBtnFunc,
  outlineBtnTxt,
  navigateFunc,
  djProfileNavigationFun,
  navigation,
}) => {
  const liveIcon = playLive
    ? require('../assets/images/liveIconOn.png')
    : require('../assets/images/liveIcon.png');

  return (
    <BoxRoundedConerStyled
      style={
        screen === 'songRequestOrder' &&
        alterColor === 'odd' && {backgroundColor: '#F5E3EA'}
      }>
      {image && (
        <TouchableOpacity
          onPress={djProfileNavigationFun ? djProfileNavigationFun : () => {}}>
          <ListImage image={image} />
        </TouchableOpacity>
      )}
      {icon && <Image source={icon} />}

      <View style={{flex: 1, gap: 5}}>
        <View style={styles.positionLeft}>
          {/* {screen == 'djlist'  ? <Image source={require('../assets/images/liveIcon.png')} /> :
       <> {price && <Text style={styles.font12}>{ pinkColor && <Image source={require('../assets/images/tikred.png')} /> } $ {price}</Text>}
          {hrs && <Text style={styles.font10}>Min {hrs} hr</Text>}</>
           } */}
          {screen == 'djlist' && <Image source={liveIcon} />}
          {price && (
            <Text style={styles.font12}>
              {screen === 'history' && (
                <Image source={require('../assets/images/tikred.png')} />
              )}{' '}
              &nbsp; ${price}
            </Text>
          )}
          {hrs && <Text style={styles.font10}>Min {hrs} hr</Text>}
        </View>

        {request && (
          <Text style={[styles.font12, {color: '#8A8A8F'}]}> {request} </Text>
        )}
        {name && (
          <Text style={styles.itemHeading}>
            <TouchableOpacity
              onPress={
                djProfileNavigationFun ? djProfileNavigationFun : () => {}
              }>
              <Text>{name}</Text>
            </TouchableOpacity>
            {''}
            {age && (
              <Text style={[styles.font10, {paddingLeft: 10}]}>
                <Text style={{color: '#8A8A8F'}}> Age:</Text> {age}
              </Text>
            )}
          </Text>
        )}
        {timeInHistory && (
          <Text style={[styles.font12, {color: '#8A8A8F'}]}>
            {timeInHistory}
          </Text>
        )}
        {type && (
          <Text style={styles.font12}>
            <Text style={{color: '#8A8A8F'}}>Type:</Text> {type}
          </Text>
        )}

        {screen == 'djlist' && (
          <View style={styles.btnRow}>
            <TouchableOpacity style={styles.smallBtn}>
              <Text style={styles.smallBtnText}>$5</Text>
              <Text style={styles.btnTitle}>Single Song</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.smallBtn}>
              <Text style={styles.smallBtnText}>$15</Text>
              <Text style={styles.btnTitle}>Pack of 5</Text>
            </TouchableOpacity>
          </View>
        )}

        {requestedBy && (
          <View>
            <Text
              style={[
                styles.font12,
                pinkColor ? {color: '#D9246D'} : {color: '#000'},
              ]}>
              <Text style={{color: '#8A8A8F'}}>Requested By: </Text>{' '}
              {requestedBy}{' '}
              <Text style={{color: '#8A8A8F'}}> {requestTimeBy} </Text>
            </Text>

            {/* {duration && (
              <Text
                style={[
                  styles.font12,
                  screen === 'history' ? {color: '#D9246D'} : {color: '#000'},
                ]}>
                <Text style={{color: '#8A8A8F'}}>Duration11: </Text> {duration}
              </Text>
            )} */}
          </View>
        )}

        {club && (
          <View style={{flexDirection: 'row', gap: 5}}>
            <Text
              style={[
                styles.font12,
                screen === 'history' ? {color: '#D9246D'} : {color: '#000'},
              ]}>
              <Text style={{color: '#8A8A8F'}}>Clubs: </Text> {club}
            </Text>

            {duration && (
              <Text
                style={[
                  styles.font12,
                  screen === 'history' ? {color: '#D9246D'} : {color: '#000'},
                ]}>
                <Text style={{color: '#8A8A8F'}}>Duration: </Text> {duration}
              </Text>
            )}
          </View>
        )}

        {requestTime && (
          <Text style={[styles.font12, {color: '#000'}]}>{requestTime}</Text>
        )}

        <View style={styles.btnrow}>
          {outlineBtnFunc && (
            <SmallOutlineButtonStyle>
              <Text style={[styles.fontWhite, {color: '#D9246D'}]}>
                {outlineBtnTxt}
              </Text>
            </SmallOutlineButtonStyle>
          )}
          {solidBtnFunc && (
            <SmallButtonStyle
              onPress={
                navigateFunc
                  ? () => navigateFunc(1223343)
                  : () => {
                      if (solidBtnTxt === 'Request Song') {
                        navigation.push('RequestSongScreen');
                      }
                    }
              }>
              <Text style={styles.fontWhite}>{solidBtnTxt}</Text>
            </SmallButtonStyle>
          )}
        </View>
      </View>
    </BoxRoundedConerStyled>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  odd: {backgroundColor: '#F5E3EA', borderColor: 'red', borderWidth: 1},
  font12: {
    color: '#D9246D',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 13,
    fontWeight: '600',
  },
  font10: {
    color: '#000',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 11,
    fontWeight: '600',
  },
  positionLeft: {position: 'absolute', right: 5, top: 0},
  btnrow: {flexDirection: 'row', gap: 16},
  fontWhite: {
    color: '#FFF',

    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontWeight: '700',
  },
  itemHeading: {
    color: '#000',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 20,
    letterSpacing: 0.7,
  },
  smallBtn: {
    width: 72,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFF4',
    borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#D5D5DC',

    fontFamily: 'Plus Jakarta Sans',
  },
  smallBtnText: {
    color: '#D9246D',
    fontWeight: '600',
    fontSize: 14,
  },
  btnTitle: {
    color: '#000',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 10,

    fontWeight: '600',
    paddingBottom: 0,
  },
  btnRow: {flexDirection: 'row', gap: 15, marginVertical: 8},
});
