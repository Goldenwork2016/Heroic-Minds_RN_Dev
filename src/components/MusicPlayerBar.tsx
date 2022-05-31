import React from 'react'
import { View, Text, ImageBackground, Pressable, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { AudioContext } from '../context'
import LeftSeekSVG from './SVGs/LeftSeekSVG'
import RightSeekSVG from './SVGs/RightSeekSVG'

import tw from '../lib/tailwind'
import {
   millisToMinutesAndSeconds,
   pauseEpisode,
   playFromPause,
   seekBackwards,
   seekForward,
} from '../hooks/useAudio'

import { Audio } from 'expo-av'
import { useNavigation } from '@react-navigation/native'

const MusicPlayerBar = () => {
   const {
      currentEpisode,
      isPlaying,
      sound,
      audioPlaybackDetails,
      setIsPlaying,
      showEpisodeTextorReflectionQ,
      setShowEpisodeTextorReflectionQ,
      showPlayOrPencil,
      setShowPlayOrPencil,
      showBottomPlayer,
      setShowBottomPlayer,
   } = React.useContext(AudioContext)

   const imageBaseURI = { uri: 'https://img.heroicminds.live/' }
   const navigation = useNavigation()

   const pauseEpisodeHandler = (sound: Audio.Sound) => {
      pauseEpisode(sound).then(() => {
         setIsPlayingHandler(false)
      })
   }

   const playFromPauseHandler = (sound: Audio.Sound, position: number) => {
      playFromPause(sound, position).then(() => {
         setIsPlayingHandler(true)
      })
   }

   const seekForwardHandler = async (sound: Audio.Sound, position: number) => {
      await seekForward(sound, position)
      setIsPlayingHandler(true)
   }

   const seekBackwardsHandler = async (sound: Audio.Sound, position: number) => {
      await seekBackwards(sound, position)
      setIsPlayingHandler(true)
   }

   const setIsPlayingHandler = (value: boolean) => {
      setIsPlaying(value)
   }

   const showReflectionQuestions = () => {
      setShowEpisodeTextorReflectionQHandler('questions')
   }

   const showEpisodeText = () => {
      setShowEpisodeTextorReflectionQHandler('text')
   }

   const setShowEpisodeTextorReflectionQHandler = (value: string) => {
      setShowEpisodeTextorReflectionQ(value)
   }

   const navigateTodetails = () => {
      navigation.navigate('Episode', { episode: currentEpisode, forceJournal: false })
      setShowPlayOrPencil('pencil')
   }

   return currentEpisode !== null ? (
      <View>
         {/* Mini Player */}
         {!showBottomPlayer ? (
            <Pressable
               style={tw.style('flex-row', 'justify-start', ' bg-lightYellow')}
               onPress={() => {
                  navigateTodetails()
               }}>
               <View style={tw.style('flex-row', 'justify-start')}>
                  {/* Image */}
                  <View style={tw.style('w-18', 'h-18')}>
                     <ImageBackground
                        source={{
                           uri: imageBaseURI.uri + currentEpisode.id + '.png',
                        }}
                        imageStyle={tw.style('')}
                        style={tw.style({ width: '100%', height: '100%' })}
                     />
                  </View>
                  {/* Info */}
                  <View style={tw.style('ml-2 my-auto w-60 ')}>
                     <Text
                        numberOfLines={1}
                        style={tw.style('', 'mt-2 mb-2 text-darkGrey', {
                           fontFamily: 'Gilroy-SemiBold',
                           fontSize: '18',
                        })}>
                        {currentEpisode.title}
                     </Text>
                     <Text
                        style={tw.style('text-sm text-darkGrey', {
                           fontFamily: 'Gilroy-Medium',
                        })}>
                        Playing Now
                     </Text>
                  </View>
               </View>
               {/* Play and Pause Button */}
               <View
                  style={tw.style({
                     flex: 1,
                     flexDirection: 'row',
                     alignItems: 'center',
                     justifyContent: 'flex-end',
                  })}>
                  <Pressable
                     onPress={() => {
                        isPlaying
                           ? pauseEpisodeHandler(sound)
                           : playFromPauseHandler(sound, audioPlaybackDetails.position)
                     }}>
                     <Ionicons
                        name={isPlaying ? 'pause' : 'play'}
                        style={tw.style('pr-1 text-darkGrey drop-shadow-md')}
                        size={25}
                     />
                  </Pressable>
               </View>
            </Pressable>
         ) : null}
         {showBottomPlayer ? (
            // Full Player
            <View
               style={tw.style('flex-row', 'justify-around ', 'items-center', 'w-screen', 'p-2')}>
               <View style={tw.style('w-15', 'items-center ')}>
                  <Text style={tw.style('text-sm', 'text-black text-lightYellow font-bold')}>
                     {audioPlaybackDetails !== null ? (
                        millisToMinutesAndSeconds(audioPlaybackDetails.position)
                     ) : (
                        <></>
                     )}
                  </Text>
               </View>
               <View
                  id='playback-Btns'
                  style={tw.style('flex-row ', 'w-50', 'justify-evenly', 'items-center')}>
                  <View>
                     <Pressable
                        onPress={() => {
                           seekBackwardsHandler(sound, audioPlaybackDetails.position)
                        }}>
                        <LeftSeekSVG />
                     </Pressable>
                  </View>
                  <View>
                     <Pressable
                        onPress={() => {
                           isPlaying
                              ? pauseEpisodeHandler(sound)
                              : playFromPauseHandler(sound, audioPlaybackDetails.position)
                        }}>
                        <Ionicons name={isPlaying ? 'pause' : 'play'} size={50} color='#E9D8A6' />
                     </Pressable>
                  </View>
                  <View>
                     <Pressable
                        onPress={() => {
                           seekForwardHandler(sound, audioPlaybackDetails.position)
                        }}>
                        <RightSeekSVG />
                     </Pressable>
                  </View>
               </View>
               <View style={tw.style('w-15', 'items-center')}>
                  <Text style={tw.style('text-sm', 'text-lightYellow font-bold')}>
                     {audioPlaybackDetails !== null ? (
                        millisToMinutesAndSeconds(audioPlaybackDetails.duration)
                     ) : (
                        <></>
                     )}
                  </Text>
               </View>
            </View>
         ) : null}
      </View>
   ) : (
      <></>
   )
}

export default MusicPlayerBar
