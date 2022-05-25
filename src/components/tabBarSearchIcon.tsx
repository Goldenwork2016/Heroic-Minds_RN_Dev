import React from 'react'
import { Image, StyleSheet,Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import tw from '../lib/tailwind'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// type CommunityScreenNavigationProps = {
//    Discover: any
// }
// // const TabBarLogo = (
// //    { navigation }: NativeStackScreenProps<CommunityScreenNavigationProps>
// // ) => {
// //    const onIconPress = () => {
// //       navigation.navigate('Discover')
// //    }
    const TabBarLogo = ({color}: any) =>{

   return (
      <>
         {/* <Pressable onPress={onIconPress}> */}
            <Ionicons style={tw.style('px-2')} name='search' size={30} color={color} />
         {/* </Pressable> */}
      </>
   )
}

const styles = StyleSheet.create({
   image: {
      width: 32,
      height: 32,
      resizeMode: 'contain',
      opacity: 1,
   },
})

export default TabBarLogo;
