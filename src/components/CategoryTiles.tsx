import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import { AppContext, AudioContext } from '../context'
import { initializeAudio, loadEpisode, playEpisode, stopEpisode } from '../hooks/useAudio'
import { getEpisode } from '../hooks/useData'

import tw from '../lib/tailwind'
import StoryLogoSVG from './SVGs/StoryLogoSVG'

interface CategoryTilesProps {
   onEpisodePress(episode: any): any
   episodes: any
}

const CategoryTiles = (props: CategoryTilesProps) => {
   const { onEpisodePress, episodes } = props

   const {
      currentEpisode,
      setCurrentEpisode,
      sound,
      setSound,
      setAudioPlaybackDetails,
      setIsPlaying,
      isPlaying,
      setShowPlayOrPencil,
   } = React.useContext(AudioContext)

   const imageBaseURI = { uri: 'https://img.heroicminds.live/' }

   const onTileClick = async (episode: any) => {
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
      // console.log(isPlaying)
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
            console.log('clicked diff tile')
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
            console.log('user not playing')
            if (currentEpisode.id === episode.episodeId) {
               // User clicked on same tile
               console.log('clicked same tile')
               // playFromPause(sound, audioPlaybackDetails.positionMillis).then(() => {
               // 	setIsPlayingHandler(true);
               // })
            } else {
               // User clicked on diff tile
               console.log('clicked diff tile')
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
      onEpisodePress(finalEpisodeObj)
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
      <View style={tw.style('flex-row', 'flex-wrap', 'justify-between', 'm-5')}>
         {episodes &&
            episodes.map((episode: any, i: number) => {
               return (
                  <Pressable
                     key={i}
                     onPress={() => {
                        onTileClick(episode)
                     }}>
                     <View style={tw.style('mb-12')}>
                        <View style={tw.style('w-40', 'h-40')}>
                           <ImageBackground
                              source={{
                                 uri: imageBaseURI.uri + episode.episodeId + '.png',
                              }}
                              imageStyle={tw.style('rounded-2xl')}
                              style={tw.style({ width: '100%', height: '100%' })}>
                              {episode.isStory ? (
                                 <View style={tw.style('-m-0.5')}>
                                    <StoryLogoSVG />
                                 </View>
                              ) : (
                                 <></>
                              )}
                           </ImageBackground>
                           <Text
                              style={tw.style('mx-auto', 'pt-2', 'text-lightYellow', {
                                 fontFamily: 'Gilroy-Medium',
                              })}>
                              {episode.episodeTitle}
                           </Text>
                        </View>
                     </View>
                  </Pressable>
               )
            })}
      </View>
   )
}

export default CategoryTiles
