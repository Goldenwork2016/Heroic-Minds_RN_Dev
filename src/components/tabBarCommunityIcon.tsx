import React from 'react'
import { Image, StyleSheet } from 'react-native'

const CommunityPeopleLogo = () => {
   return <Image source={require('../../assets/community_icon.png')} style={styles.image} />
}

const styles = StyleSheet.create({
   image: {
      width: 32,
      height: 32,
      resizeMode: 'contain',
   },
})

export default CommunityPeopleLogo
