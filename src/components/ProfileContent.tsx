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

const ProfileContent = (
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



   const CreatePostTopHeader = () => {
      return (
         <View>
            {/* Input Top Header */}
            <View style={tw.style('flex-row h-10 ')}>
               <TextInput
                  autoCapitalize='sentences'
                  keyboardType='default'
                  returnKeyType='done'
                  placeholder={'Add Title'}
                  placeholderTextColor='#E9D8A6'
                  style={tw.style('flex-1', 'px-2',
                     'text-lightYellow',
                  )}
               />
               <View
                  style={tw.style(
                     'ml-2',
                     'border',
                     'px-3',
                     'self-center',
                     'rounded-xl',
                     'border-lightYellow',
                  )}>
                  <Text style={tw.style('text-lightYellow', 'text-sm', {
                     fontFamily: 'Gilroy-Regular'
                  })}>{'Fear'}</Text>
               </View>
               <View style={tw.style('mt-2 mx-2')}>
                  <CategoryDropdownSVG />

               </View>

            </View>
         </View>
      )
   }

   const CreatePostFooter = () => {
      return (

         <View style={tw.style('flex-row h-10 ')}>
            <View style={tw.style('flex-1 flex-row justify-between')}>
               <View style={tw.style('flex-row items-end mb-1')}>
                  <View style={tw.style('ml-4 mr-8')}>
                     <AudioIconSVG />

                  </View>
                  <View>
                     <GalleryIconSVG />

                  </View>
               </View>
               <View style={tw.style('flex-row items-center mr-1')}>
                  <Pressable
                     style={tw.style(
                        'items-center',
                        'justify-center',
                        'py-1',
                        'px-4',
                        'rounded-2xl',
                        'bg-lightYellow',
                     )}
                     onPress={null}>
                     <Text
                        style={tw.style('text-sm', 'text-darkGrey', {
                           fontFamily: 'Gilroy-Regular',
                        })}>
                        Post
                     </Text>
                  </Pressable>
               </View>
            </View>

         </View>

      )
   }

   return (
      <View style={tw.style('flex-1 pb-4')}>
         <View style={tw.style('justify-start', 'w-screen', 'mx-2')}>

            <View style={tw.style('flex-1 h-40 my-4 ', {
               backgroundColor: 'rgba(233,216,166,0.03)'
            })}>
               <View style={tw.style('flex-1 border border-lightYellow rounded-2xl')}>

                  <CreatePostTopHeader />
                  <View style={tw.style('flex-row flex-1 ')}>
                     <TextInput
                        autoCapitalize='sentences'
                        keyboardType='default'
                        returnKeyType='done'
                        multiline={true}
                        placeholder={"What's going on?"}
                        placeholderTextColor='#E9D8A6'
                        style={tw.style('flex-1', 'px-2',
                           'text-lightYellow',
                           { fontFamily: 'Gilroy-Regular' }
                        )}
                     />
                  </View>

                  <CreatePostFooter />
               </View>
            </View>

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




export default ProfileContent
