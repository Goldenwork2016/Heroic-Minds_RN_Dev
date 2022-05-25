import { Audio } from 'expo-av'

export const initializeAudio = async () => {
   Audio.setAudioModeAsync({
      staysActiveInBackground: true,
      playsInSilentModeIOS: true,
      playThroughEarpieceAndroid: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
   })
   const audio = new Audio.Sound()
   return audio
}

export const playFromStart = async (audio: Audio.Sound) => {
   return await audio.replayAsync({ positionMillis: 0, shouldPlay: true })
}

export const playFromPause = async (audio: Audio.Sound, position: number) => {
   await audio.setPositionAsync(position)
   await audio.playAsync()
}

export const loadEpisode = async (audio: Audio.Sound, episode: any) => {
   const status = await audio.loadAsync({ uri: episode.url }, { shouldPlay: false })
   return status
}

export const playEpisode = async (audio: Audio.Sound) => {
   // console.log(audio)
   return await audio.playAsync()
}

export const pauseEpisode = async (audio: any) => {
   await audio.pauseAsync()
}

export const stopEpisode = async (audio: any) => {
   await audio.stopAsync()
   await audio.unloadAsync()
}

export const millisToMinutesAndSeconds = (millis: number) => {
   let minutes = Math.floor(millis / 60000)
   let seconds = ((millis % 60000) / 1000).toFixed(0)
   return +seconds == 60
      ? minutes + 1 + ':00'
      : minutes + ':' + (+seconds < 10 ? '0' : '') + seconds
}

export const seekForward = async (audio: Audio.Sound, position: number) => {
   const seekedPosition = position + 10000
   await audio.setPositionAsync(seekedPosition)
   await audio.playAsync()
}

export const seekBackwards = async (audio: Audio.Sound, position: number) => {
   const seekedPosition = position - 10000
   await audio.setPositionAsync(seekedPosition < 0 ? 0 : seekedPosition)
   await audio.playAsync()
}
