import React from 'react'
import { Image, StyleSheet } from 'react-native'

const HomeBulbLogo = () => {
   return <Image source={require('../../assets/home_bulb.png')} style={styles.image} />
}
const styles = StyleSheet.create({
   image: {
      width: 32,
      height: 32,
      resizeMode: 'contain',
   },
})

export default HomeBulbLogo
