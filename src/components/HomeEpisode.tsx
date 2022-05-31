import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, ImageBackground, Pressable } from 'react-native'

import tw from '../lib/tailwind'
import { getEpisode } from '../hooks/useData'

import { AudioContext } from '../context'
import { initializeAudio, loadEpisode, playEpisode, stopEpisode } from '../hooks/useAudio'
import StoryLogoSVG from './SVGs/StoryLogoSVG'

import CachedImage from 'expo-cached-image'

interface HomeEpisodeProps {
   episode: any
   size?: number
   showCategory: boolean
}
// Taken from HomeNew
const HomeEpisode = (props: HomeEpisodeProps) => {
   const { episode, size = 40, showCategory } = props
   const {
      currentEpisode,
      setCurrentEpisode,
      sound,
      setSound,
      setAudioPlaybackDetails,
      setIsPlaying,
      isPlaying,
      setShowPlayOrPencil,
      contentLoading,
   } = React.useContext(AudioContext)
   const navigation = useNavigation()
   const imageBaseURI = { uri: 'https://img.heroicminds.live/' }

   const onTileClick = async (episode: any) => {
      // console.log(episode)
      const episodeData = await getEpisode(episode.episodeId)
      const parsedEpisodeJson = JSON.parse(episodeData.request._response)
      const finalEpisodeObj = {
         url: parsedEpisodeJson.data['url'],
         id: episode.episodeId,
         title: episode.episodeTitle,
         text: episode.episodeText,
         category: episode.categoryName,
         inspiration: episode.episodeInspiration ? episode.episodeInspiration : null,
      }
      if (isPlaying) {
         // Soemthing is currently being played
         if (currentEpisode.id === episode.episodeId) {
            // User clicked on same tile
            // console.log("clicked same tile");
            // setIsPlayingHandler(false);
            // playFromStart(sound).then(() => {
            // 	setIsPlayingHandler(true);
            // })
         } else {
            // User clicked on diff tile
            stopEpisode(sound)
               .then(() => {
                  setIsPlayingHandler(false)
                  setCurrentEpisodeHandler(finalEpisodeObj)
               })
               .then(() => {
                  playAnotherEpisode(finalEpisodeObj)
               })
         }
      } else {
         // Nothing is currently being played
         if (sound === null) {
            // no sound initialization, first time playing sound
            setCurrentEpisodeHandler(finalEpisodeObj)
            await initalizeAudioAndPlay(finalEpisodeObj)
         } else {
            // sound has been initalized, but user is not playing
            if (currentEpisode.id === episode.episodeId) {
               // User clicked on same tile
               // playFromPause(sound, audioPlaybackDetails.positionMillis).then(() => {
               // 	setIsPlayingHandler(true);
               // })
            } else {
               // User clicked on diff tile
               stopEpisode(sound)
                  .then(() => {
                     setIsPlayingHandler(false)
                     setCurrentEpisodeHandler(finalEpisodeObj)
                  })
                  .then(() => {
                     playAnotherEpisode(finalEpisodeObj)
                  })
            }
         }
      }
      onEpisodePressHandler(finalEpisodeObj)
   }

   const onEpisodePressHandler = (finalEpisodeObj: any) => {
      // @ts-ignore
      navigation.navigate('Episode', { episode: finalEpisodeObj, forceJournal: false })
      setShowPlayOrPencilHandler('pencil')
   }

   const initalizeAudioAndPlay = async (episode: any) => {
      const sound = await initializeAudio()
      setSoundHandler(sound)
      const loading = await loadEpisode(sound, episode)
      if (loading.isLoaded) {
         sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
         sound.setProgressUpdateIntervalAsync(1000)
         await playEpisode(sound)
         setIsPlayingHandler(true)
      }
   }

   const playAnotherEpisode = async (episode: any) => {
      const loading = await loadEpisode(sound, episode)
      if (loading.isLoaded) {
         sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
         sound.setProgressUpdateIntervalAsync(1000)
         playEpisode(sound).then(() => {
            setIsPlayingHandler(true)
         })
      }
   }

   const onPlaybackStatusUpdate = (status: any) => {
      if (status.isLoaded && status.isPlaying) {
         const data = {
            duration: status.durationMillis,
            position: status.positionMillis,
            sliderPosition: status.positionMillis,
         }
         setAudioPlaybackDetailsHandler(data)
      }
   }

   const setAudioPlaybackDetailsHandler = (value: any) => {
      setAudioPlaybackDetails(value)
   }

   const setIsPlayingHandler = (value: boolean) => {
      setIsPlaying(value)
   }

   const setSoundHandler = (value: any) => {
      setSound(value)
   }

   const setCurrentEpisodeHandler = (value: any) => {
      setCurrentEpisode(value)
   }

   const setShowPlayOrPencilHandler = (value: string) => {
      setShowPlayOrPencil(value)
   }

   return (
      <Pressable
         onPress={() => {
            onTileClick(episode)
         }}>
         <View>
            <View
               style={tw.style(`w-${35}`, `h-${40}`, 'rounded-xl', 'mr-4 drop-shadow-md  ', {
                  overflow: 'hidden',
               })}>
               {episode.isStory ? (
                  <View style={tw.style('absolute top-0 left-0 z-10')}>
                     <StoryLogoSVG />
                  </View>
               ) : (
                  <></>
               )}
               <CachedImage
                  cacheKey={`${episode.episodeId}-tile`}
                  source={{
                     uri: imageBaseURI.uri + episode.episodeId + '.png',
                  }}
                  style={tw.style('w-full h-full flex-1')}
               />
            </View>
            <View style={tw.style('w-35 ', {})}>
               <Text
                  numberOfLines={1}
                  style={tw.style('text-lightYellow text-center pt-2 pb-1', {
                     fontFamily: 'Gilroy-Medium',
                  })}>
                  {episode.episodeTitle}
               </Text>
               {showCategory ? (
                  <Text
                     style={tw.style('text-lightYellow text-center', {
                        fontFamily: 'Gilroy-Regular',
                        fontSize: 12,
                     })}>
                     {episode.categoryName}
                  </Text>
               ) : undefined}
            </View>
         </View>
      </Pressable>
   )
}

export default HomeEpisode
