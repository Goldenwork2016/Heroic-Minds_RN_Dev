import React from 'react'
import { View, ScrollView, Text, ImageBackground, Pressable } from 'react-native'
import { AppContext, AudioContext } from '../context'
import { getReflectionQuestion } from '../hooks/useData'

import tw from '../lib/tailwind'
import ReflectionQuestionsResponse from './ReflectionQuestionsResponse'

interface JournalQuestionsContentProps {
   episode: any
   forceJournal?: boolean
}

const JournalQuestionsContent = (props: JournalQuestionsContentProps) => {
   const { episode, forceJournal } = props
   const {
      showEpisodeTextorReflectionQ,
      setShowPlayOrPencil,
      setShowEpisodeTextorReflectionQ,
      setShowBottomPlayer,
   } = React.useContext(AudioContext)
   const { reflectionQuestions, setReflectionQuestions } = React.useContext(AppContext)

   const setShowPlayOrPencilHandler = (value: string) => {
      setShowPlayOrPencil(value)
   }

   const setShowEpisodeTextorReflectionQHandler = (value: string) => {
      setShowEpisodeTextorReflectionQ(value)
   }

   const setShowBottomPlayerHandler = (value: boolean) => {
      setShowBottomPlayer(value)
   }

   const setReflectionQuestionsHandler = (value: any) => {
      // console.log(value)
      setReflectionQuestions(value)
   }

   const getReflectionQuestionDataHandler = async () => {
      const { episode } = props
      const reflectionQuestionsResponse = await getReflectionQuestion(episode.id)
      const parsedJsonData = JSON.parse(reflectionQuestionsResponse.request._response)
      setReflectionQuestionsHandler(parsedJsonData.data)
   }

   React.useEffect(() => {
      setShowBottomPlayerHandler(true)
      getReflectionQuestionDataHandler()
      return () => {
         setShowPlayOrPencilHandler('play')
         setShowEpisodeTextorReflectionQHandler('text')
         setShowBottomPlayerHandler(false)
      }
   }, [])

   return (
      <View style={tw.style('flex-1')}>
         {forceJournal ? (
            <View style={tw.style('flex-1 justify-center')}>
               <ReflectionQuestionsResponse />
            </View>
         ) : showEpisodeTextorReflectionQ === 'text' ? (
            <View style={tw.style('flex-row', 'justify-center', 'px-2')}>
               <Text style={tw.style('text-lightYellow')}>{episode.text}</Text>
            </View>
         ) : showEpisodeTextorReflectionQ === 'questions' ? (
            <View>
               <ReflectionQuestionsResponse />
            </View>
         ) : undefined
         }
      </View >

   )
}

export default JournalQuestionsContent
