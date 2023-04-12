import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { fonts } from '../utils/theme'
import Coupon from './Coupon'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const OffersYnos = () => {
  return (
    <View>
      <Text style={styles.offersTitle}>Ofertas Ynos</Text>
      <Coupon viewCheck={false}/>
    </View>
  )
}

const styles = StyleSheet.create({
  offersTitle: {
    fontFamily: fonts.montserrat.medium,
    fontSize: wp('6%'),
    paddingLeft: 20
  }
})

export default OffersYnos