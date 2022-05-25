import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import { AppContext, AudioContext } from '../context'
import { initializeAudio, loadEpisode, playEpisode, stopEpisode } from '../hooks/useAudio'
import { getEpisode } from '../hooks/useData'
import StoryLogoSVG from './SVGs/StoryLogoSVG'
import tw from '../lib/tailwind'


interface ThemeDetailTilesProps {
   onEpisodePress(episode: any): any
}

const ThemeDetailTiles = (props: ThemeDetailTilesProps) => {
   const { onEpisodePress } = props

   const {
      currentEpisode,
      setCurrentEpisode,
      sound,
      setSound,
      audioPlaybackDetails,
      setAudioPlaybackDetails,
      setIsPlaying,
      isPlaying,
      showPlayOrPencil,
      setShowPlayOrPencil,
   } = React.useContext(AudioContext)

   const { themeEpisodes } = React.useContext(AppContext)

   const onTileClick = async (episode: any) => {
      const episodeData = await getEpisode(episode.episodeId)
      const parsedEpisodeJson = JSON.parse(episodeData.request._response)
      const finalEpisodeObj = {
         url: parsedEpisodeJson.data['url'],
         id: episode.episodeId,
         title: episode.episodeTitle,
         text: episode.episodeText,
         inspiration: episode.episodeInspiration ? episode.episodeInspiration : null,
      }
      console.log(isPlaying)
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
      console.log(episode)

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
      console.log(loading)
      if (loading.isLoaded) {
         console.log('dowemakeit')
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

   const imageBaseURI = { uri: 'https://img.heroicminds.live/' }

   return (
      <View style={tw.style('flex-row', 'flex-wrap', 'justify-between', 'm-5')}>
         {themeEpisodes &&
            themeEpisodes.map((episode: any, i: number) => {
               return (
                  <Pressable
                     key={i}
                     onPress={() => {
                        onTileClick(episode)
                     }}>
                     <View style={tw.style('mb-10')}>
                        <View style={tw.style('w-40', 'h-40')}>
                           <ImageBackground
                              source={{
                                 uri: imageBaseURI.uri + episode.episodeId + '.png',
                              }}
                              imageStyle={tw.style('rounded-2xl')}
                              style={{ width: '100%', height: '100%' }}>
                              {episode.isStory ? (
                                 <View style={tw.style('-m-0.5')}>
                                    <StoryLogoSVG />
                                 </View>
                              ) : (
                                 <></>
                              )}
                           </ImageBackground>
                           <Text style={tw.style('ml-2', 'pt-2')}>{episode.episodeTitle}</Text>
                        </View>
                     </View>
                  </Pressable>
               )
            })}
      </View>
   )
}

export default ThemeDetailTiles
