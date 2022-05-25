import React, { useState, useEffect, useContext, Component } from 'react'
import {
   ScrollView,
   Text,
   SafeAreaView,
   View,
   ImageBackground,
   Pressable,
   Dimensions,
   TouchableOpacity,
   TextInput,
} from 'react-native'
import tw from '../lib/tailwind'
import { Ionicons } from '@expo/vector-icons'
// import { Container,Button } from 'native-base';
var { height, width } = Dimensions.get('window')
import CommunityHeader from '../components/CommunityHeader'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import NicelyDoneSVG from './SVGs/NicelyDoneSvg'
import CommentIconSVG from './SVGs/CommentIconSVG'
import PostHeader from './SinglePostHeader'
import CategoryDropdownSVG from './SVGs/CategoryDropdownSVG'
import AudioIconSVG from './SVGs/AudioIconSVG'
import GalleryIconSVG from './SVGs/GalleryIconSVG'
import SinglePostHeader from './SinglePostHeader'
import SinglePostTopBody from './SinglePostTopBody'

type PostScreenNavigationProps = {
   PostDetail: any
   CommentScreen: any
   EditPost: any
   DeletePost: any
   showEditIcon: Boolean
}

const CommunityPosts = (
   props: any,
   { navigation }: NativeStackScreenProps<PostScreenNavigationProps>
) => {
   const [showEditPopup, onshowEditPopupChange] = useState(false)

   useEffect(() => {
      // onshowEditPopupChange(false)
   })

   const navigateToPostDetail = () => {
      props.navigation.navigate('PostDetail')
   }

   const navigateToCommentScreen = () => {
      console.log('Comment screen')
      props.navigation.navigate('CommentScreen')
   }

   const openOptionPopup = () => {
      onshowEditPopupChange(true)
   }

   const goToEditPost = () => {
      onshowEditPopupChange(false)
      props.navigation.navigate('EditPost')
   }

   const goToDeletePost = () => {
      onshowEditPopupChange(false)
      props.navigation.navigate('DeletePost')
   }


   return (
      <View style={tw.style('flex-1 pb-4')}>
         <View style={tw.style('justify-start', 'w-screen', 'mx-2')}>

            <SinglePostHeader
               openOptionPopup={openOptionPopup}
               showEditIcon={props.showEditIcon}
               showEditPopup={showEditPopup}
               navigateToPostDetail={navigateToPostDetail}
               goToEditPost={goToEditPost}
               goToDeletePost={goToDeletePost}
               isDetailPage={false}

            />

            <SinglePostTopBody
               navigateToCommentScreen={navigateToCommentScreen}
               isDetailPage={false}
               navigateToPostDetail={navigateToPostDetail}
            />


         </View>
      </View >
   )
}




export default CommunityPosts
