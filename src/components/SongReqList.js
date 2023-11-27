/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
  BoxRoundedConerStyled,
  SmallButtonStyle,
  SmallOutlineButtonStyle,
} from '../ui/Styled';

const SongRequestList = ({
  screen,
  alterColor,
  icon,
  price,
  name,
  type,
  request,
  requestedBy,
  requestTimeBy,
  solidBtnTxt,
  outlineBtnTxt,
  // state
  songPaymentState,
  songReqState,
  //   Handler Fun
  handleReject,
  handleAccept,
  handleSongPayment,
}) => {
  const clientRole = useSelector(state => state.auth.clientRole);
  return (
    <BoxRoundedConerStyled
      style={
        screen === 'songRequestOrder' &&
        alterColor === 'odd' && {backgroundColor: '#F5E3EA'}
      }>
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
        {requestedBy && (
          <View>
            <Text style={([styles.font12], {color: '#000'})}>
              <Text style={{color: '#8A8A8F'}}>Requested By: </Text>{' '}
              {requestedBy}{' '}
              <Text style={{color: '#8A8A8F'}}> {requestTimeBy} </Text>
            </Text>
          </View>
        )}
        <View style={styles.btnrow}>
          {/* FOR USER START */}
          <>
            {/* Pending */}
            {clientRole === 'user' && songReqState === '' && (
              <SmallOutlineButtonStyle>
                <Text
                  style={([styles.fontWhite], {color: '#D9246D'})}>
                  pending
                </Text>
              </SmallOutlineButtonStyle>
            )}
            {/* Reject */}
            {clientRole === 'user' && songReqState === 'Reject' && (
              <SmallOutlineButtonStyle>
                <Text
                  style={([styles.fontWhite], {color: '#D9246D'})}>
                  rejected
                </Text>
              </SmallOutlineButtonStyle>
            )}
            {/* Buy Now */}
            {clientRole === 'user' &&
              songReqState === 'Accept' &&
              !songPaymentState && (
                <SmallButtonStyle>
                  <Text onPress={handleSongPayment} style={[styles.fontWhite]}>
                    Buy Now
                  </Text>
                </SmallButtonStyle>
              )}
            {/* Payment Success */}
            {clientRole === 'user' &&
              songReqState === 'Accept' &&
              songPaymentState && (
                <SmallOutlineButtonStyle>
                  <Text
                    style={([styles.fontWhite], {color: '#D9246D'})}>
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
              songReqState === '' && (
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
              songReqState === 'Reject' && (
                <SmallOutlineButtonStyle>
                  <Text
                    style={([styles.fontWhite], {color: '#D9246D'})}>
                    you reject this
                  </Text>
                </SmallOutlineButtonStyle>
              )}
            {/* FOR DANCER OR DJ ACCEPT AND BEFORE PAYMENT  */}
            {(clientRole === 'dj' || clientRole === 'dancer') &&
              songReqState === 'Accept' &&
              !songPaymentState && (
                <SmallButtonStyle>
                  <Text style={[styles.fontWhite]}>
                    wait for payment
                  </Text>
                </SmallButtonStyle>
              )}
            {/* FOR DANCER OR DJ AFTER PAYMENT  */}
            {(clientRole === 'dj' || clientRole === 'dancer') &&
              songReqState === 'Accept' &&
              songPaymentState && (
                <SmallOutlineButtonStyle>
                  <Text
                    style={([styles.fontWhite], {color: '#D9246D'})}>
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

export default SongRequestList;

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
