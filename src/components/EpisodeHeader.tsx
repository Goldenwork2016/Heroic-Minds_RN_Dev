import { ResizeMode } from 'expo-av'
import * as React from 'react'
import { useState, useEffect, useRef } from 'react'

import {
   View,
   Text,
   Image,
   ImageBackground,
   ScrollView,
   Animated,
   Pressable,
   Dimensions,
} from 'react-native'

import { AppContext } from '../context'
import GoBack from './GoBack'
import PencilIconSvg from '../components/SVGs/PencilIconSVG'
import CategoryIconSVG from '../components/SVGs/CatergoryIconSVG'
import InspirationIconSVG from '../components/SVGs/InspirationIconSVG'
import EpisodeContent from '../components/EpisodeContent'

import tw from '../lib/tailwind'
interface EpisodeHeaderProps {
   episode: any
   navigation: any
}
const windowWidth = Dimensions.get('window').width
const EpisodeHeader = ({ episode, navigation }: EpisodeHeaderProps) => {
   const imageBaseURI = { uri: 'https://img.heroicminds.live/' }

   const scrollUpPosition = useRef(new Animated.Value(0)).current
   const navigateToReflectionQuestion = () => {
      navigation.navigate('JournalQuestions', { episode: episode, forceJournal: true })
   }

   return (
      <>
         <View style={tw.style('flex-row w-screen justify-between mx-3 items-center')}>
            <View style={tw.style('')}>
               <GoBack navigation={navigation} />
            </View>
            <View style={tw.style('pb-5')}>
            <Pressable onPress={navigateToReflectionQuestion}>
               <PencilIconSvg />
            </Pressable>
            </View>
         </View>

         <Animated.ScrollView
            // stickyHeaderIndices={[0]}
            style={tw.style('mx-2')}
            scrollEventThrottle={5}
            onScroll={Animated.event(
               [{ nativeEvent: { contentOffset: { y: scrollUpPosition } } }],
               {
                  useNativeDriver: true,
               }
            )}>
            <Animated.View style={[tw.style('h-77 w-full', styles.banner(scrollUpPosition))]}>
               <Animated.Image
                  source={{
                     uri: imageBaseURI.uri + episode.id + '.png',
                  }}
                  style={
                     (styles.banner(scrollUpPosition),
                     {
                        width: 280,
                        height: 280,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        marginLeft: windowWidth / 2 - 150,
                     })
                  }
                  // style={styles.banner(scrollUpPosition)}
               />
            </Animated.View>
            <Text
               style={tw.style('text-2xl text-lightYellow w-full bg-darkGrey text-center pt-2', {
                  fontFamily: 'Gilroy-SemiBold',
               })}>
               {episode.title}
            </Text>

            <View style={tw.style('bg-darkGrey mt-3 ')}>
               {!episode.inspiration ? (
                  <View style={tw.style('mt-2 bg-darkGrey  mx-auto flex-row ')}>
                     <View style={tw.style('mr-2')}>
                        <CategoryIconSVG />
                     </View>
                     <Text
                        style={tw.style('text-base text-center text-lightYellow ', {
                           fontFamily: 'Gilroy-Medium',
                        })}>
                        {episode.category}
                     </Text>
                  </View>
               ) : (
                  <View style={tw.style('flex-row bg-darkGrey justify-evenly mt-2 ')}>
                     <View style={tw.style('flex-row')}>
                        <CategoryIconSVG />
                        <Text
                           style={tw.style('text-base text-lightYellow ml-2', {
                              fontFamily: 'Gilroy-Medium',
                           })}>
                           {episode.category}
                        </Text>
                     </View>
                     <View style={tw.style('flex-row')}>
                        <InspirationIconSVG />
                        <Text
                           style={tw.style('text-base text-lightYellow  ml-2', {
                              fontFamily: 'Gilroy-Medium',
                           })}>
                           {episode.inspiration}
                        </Text>
                     </View>
                  </View>
               )}
            </View>

            <View style={tw.style('bg-darkGrey pb-20 pt-2 mt-2')}>
               <EpisodeContent episode={episode} />
            </View>
         </Animated.ScrollView>
      </>
   )
}

const styles = {
   banner: (scrollUpPosition) => ({
      transform: [
         {
            translateY: scrollUpPosition.interpolate({
               inputRange: [-80, 0, 200, 200 + 1],
               outputRange: [2, 1, 100, 100],
            }),
         },
         {
            scale: scrollUpPosition.interpolate({
               inputRange: [-100, 0, 100, 100 + 1],
               outputRange: [1, 1, 0.3, 0.3],
            }),
         },
      ],
   }),
}

export default EpisodeHeader
