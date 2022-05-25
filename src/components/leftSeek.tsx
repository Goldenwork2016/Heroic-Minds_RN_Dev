import React from 'react'
import { Image, StyleSheet } from 'react-native'

const LeftSeek = () => {
   return <Image source={require('../../assets/backward.png')} style={styles.image} />
}

const styles = StyleSheet.create({
   image: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
   },
})

export default LeftSeek
