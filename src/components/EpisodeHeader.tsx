import { ResizeMode } from 'expo-av'
import * as React from 'react'
import { useState, useEffect, useRef } from 'react'

import { View, Text, Image, ImageBackground, ScrollView, Animated, Pressable } from 'react-native'

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

const EpisodeHeader = ({ episode, navigation }: EpisodeHeaderProps) => {
   const imageBaseURI = { uri: 'https://img.heroicminds.live/' }

   const scrollUpPosition = useRef(new Animated.Value(0)).current
   const navigateToReflectionQuestion = () => {
      navigation.navigate('JournalQuestions', { episode: episode, forceJournal: true })
   }

   return (
      <>
         <View style={tw.style('flex-row w-screen justify-between mx-3 mt-2 items-center')}>
            <View style={tw.style('pt-5')}>
               <GoBack navigation={navigation} />
            </View>
            <Pressable onPress={navigateToReflectionQuestion}>
               <PencilIconSvg />
            </Pressable>
         </View>

         <Animated.ScrollView
            // stickyHeaderIndices={[0]}
            style={tw.style('mx-2 ')}
            scrollEventThrottle={1}
            onScroll={Animated.event(
               [{ nativeEvent: { contentOffset: { y: scrollUpPosition } } }],
               {
                  useNativeDriver: true,
               }
            )}>
            <Animated.View style={tw.style('h-120 w-full', styles.banner(scrollUpPosition))}>
               <Animated.Image
                  source={{
                     uri: imageBaseURI.uri + episode.id + '.png',
                  }}
                  style={tw.style('h-full w-full')}
                  // style={styles.banner(scrollUpPosition)}
               />
            </Animated.View>
            <Text
               style={tw.style('text-2xl text-lightYellow w-full bg-darkGrey text-center pt-2', {
                  fontFamily: 'Gilroy-SemiBold',
               })}>
               {episode.title}
            </Text>

            <View style={tw.style('bg-darkGrey ')}>
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

            <View style={tw.style('bg-darkGrey pb-20 pt-2 ')}>
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
               inputRange: [-100, 0, 100, 100 + 1],
               outputRange: [2, 1, -200, -200],
            }),
         },
         {
            scale: scrollUpPosition.interpolate({
               inputRange: [-100, 0, 100, 100 + 1],
               outputRange: [2, 1, 0.3, 0.3],
            }),
         },
      ],
   }),
}

export default EpisodeHeader