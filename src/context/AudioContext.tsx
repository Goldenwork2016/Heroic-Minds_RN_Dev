import React from 'react'
import { AudioContext } from './index'

interface AudioProps {
   children: React.ReactNode
}
export const AudioProvider = ({ children }: AudioProps) => {
   const [sound, setSound] = React.useState(null)
   const [showPlayOrPencil, setShowPlayOrPencil] = React.useState<'play' | 'pencil'>('play')
   const [showEpisodeTextorReflectionQ, setShowEpisodeTextorReflectionQ] = React.useState<
      'text' | 'questions'
   >('text')
   const [currentEpisode, setCurrentEpisode] = React.useState(null)
   const [showBottomPlayer, setShowBottomPlayer] = React.useState(false)
   const [isPlaying, setIsPlaying] = React.useState(false)
   const [isLoaded, setIsLoaded] = React.useState(false)
   const [audioPlaybackDetails, setAudioPlaybackDetails] = React.useState(null)

   const AudioContextObject = {
      showPlayOrPencil,
      setShowPlayOrPencil,
      showEpisodeTextorReflectionQ,
      setShowEpisodeTextorReflectionQ,
      sound,
      setSound,
      currentEpisode,
      setCurrentEpisode,
      isPlaying,
      setIsPlaying,
      isLoaded,
      setIsLoaded,
      audioPlaybackDetails,
      setAudioPlaybackDetails,
      showBottomPlayer,
      setShowBottomPlayer,
   }

   return <AudioContext.Provider value={AudioContextObject}>{children}</AudioContext.Provider>
}

export default AudioProvider
