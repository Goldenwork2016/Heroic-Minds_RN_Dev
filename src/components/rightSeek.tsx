import React from 'react'
import { Image, StyleSheet } from 'react-native'

const RightSeek = () => {
   return <Image source={require('../../assets/forward.png')} style={styles.image} />
}

const styles = StyleSheet.create({
   image: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
   },
})

export default RightSeek
