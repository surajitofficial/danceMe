/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
  BoxRoundedConerStyled,
  SmallButtonStyle,
  SmallOutlineButtonStyle,
} from '../ui/Styled';

const DancerRequestList = ({
  playLive,
  icon,
  price,
  request,
  name,
  type,
  requestTime,
  outlineBtnTxt,
  solidBtnTxt,
  // state
  dancePaymentState,
  danceReqState,
  // handle Fun
  handleReject,
  handleAccept,
  handleDancePayment,
}) => {
  const clientRole = useSelector(state => state.auth.clientRole);

  const liveIcon = playLive
    ? require('../assets/images/liveIconOn.png')
    : require('../assets/images/liveIcon.png');
  return (
    <BoxRoundedConerStyled>
      {icon && <Image source={icon} />}
      <View style={{flex: 1, gap: 5}}>
        <View style={styles.positionLeft}>
          {price && <Text style={styles.font12}>&nbsp; ${price}</Text>}
        </View>
        {request && (
          <Text style={[styles.font12, {color: '#8A8A8F'}]}> {request} </Text>
        )}
        {/* NAME */}
        {name && (
          <Text style={styles.itemHeading}>
            <TouchableOpacity>
              <Text>{name}</Text>
            </TouchableOpacity>
          </Text>
        )}
        {/* TYPE OF DANCE */}
        {type && (
          <Text style={styles.font12}>
            <Text style={{color: '#8A8A8F'}}>Type:</Text> {type}
          </Text>
        )}
        {/* REQUEST DATE */}
        {requestTime && (
          <Text style={[styles.font12, {color: '#000'}]}>{requestTime}</Text>
        )}
        <View style={styles.btnrow}>
          {/* FOR USER START */}
          <>
            {/* Pending */}
            {clientRole === 'user' && danceReqState === '' && (
              <SmallOutlineButtonStyle>
                <Text style={([styles.fontWhite], {color: '#D9246D'})}>
                  pending
                </Text>
              </SmallOutlineButtonStyle>
            )}
            {/* Reject */}
            {clientRole === 'user' && danceReqState === 'Reject' && (
              <SmallOutlineButtonStyle>
                <Text style={([styles.fontWhite], {color: '#D9246D'})}>
                  rejected
                </Text>
              </SmallOutlineButtonStyle>
            )}
            {/* Buy Now */}
            {clientRole === 'user' &&
              danceReqState === 'Accept' &&
              !dancePaymentState && (
                <SmallButtonStyle>
                  <Text onPress={handleDancePayment} style={[styles.fontWhite]}>
                    Buy Now
                  </Text>
                </SmallButtonStyle>
              )}
            {/* Payment Success */}
            {clientRole === 'user' &&
              danceReqState === 'Accept' &&
              dancePaymentState && (
                <SmallOutlineButtonStyle>
                  <Text style={([styles.fontWhite], {color: '#D9246D'})}>
                    Payment Success
                  </Text>
                </SmallOutlineButtonStyle>
              )}
          </>
          {/* FOR USER END */}
          {/* DANCER/DJ START */}
          <>
            {/* FOR DANCER OR DJ ACCEPT REJECT  */}
            {(clientRole === 'dj' || clientRole === 'dancer') &&
              danceReqState === '' && (
                <>
                  <SmallOutlineButtonStyle onPress={handleReject}>
                    <Text style={[styles.fontWhite, {color: '#D9246D'}]}>
                      {outlineBtnTxt}
                    </Text>
                  </SmallOutlineButtonStyle>
                  <SmallButtonStyle onPress={handleAccept}>
                    <Text style={styles.fontWhite}>{solidBtnTxt}</Text>
                  </SmallButtonStyle>
                </>
              )}
            {/* FOR DANCER OR DJ REJECT  */}
            {(clientRole === 'dj' || clientRole === 'dancer') &&
              danceReqState === 'Reject' && (
                <SmallOutlineButtonStyle>
                  <Text style={([styles.fontWhite], {color: '#D9246D'})}>
                    you reject this
                  </Text>
                </SmallOutlineButtonStyle>
              )}
            {/* FOR DANCER OR DJ ACCEPT AND BEFORE PAYMENT  */}
            {(clientRole === 'dj' || clientRole === 'dancer') &&
              danceReqState === 'Accept' &&
              !dancePaymentState && (
                <SmallButtonStyle>
                  <Text style={[styles.fontWhite]}>wait for payment</Text>
                </SmallButtonStyle>
              )}
            {/* FOR DANCER OR DJ AFTER PAYMENT  */}
            {(clientRole === 'dj' || clientRole === 'dancer') &&
              danceReqState === 'Accept' &&
              dancePaymentState && (
                <SmallOutlineButtonStyle>
                  <Text style={([styles.fontWhite], {color: '#D9246D'})}>
                    already payment
                  </Text>
                </SmallOutlineButtonStyle>
              )}
          </>
          {/* DANCER/DJ END */}
        </View>
      </View>
    </BoxRoundedConerStyled>
  );
};

export default DancerRequestList;

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
