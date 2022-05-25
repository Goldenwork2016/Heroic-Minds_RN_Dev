import React from 'react'
import { View, ScrollView, Text, ImageBackground, Pressable } from 'react-native'
import { AppContext, AudioContext } from '../context'
import { getReflectionQuestion } from '../hooks/useData'

import tw from '../lib/tailwind'
import ReflectionQuestionsResponse from './ReflectionQuestionsResponse'

interface EpisodeContentProps {
   episode: any
   forceJournal?: boolean
}

const EpisodeContent = (props: EpisodeContentProps) => {
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
      // console.log(parsedJsonData)
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
      <ScrollView style={tw.style('mt-2')}>
         <View style={tw.style('flex-row', 'justify-center', 'px-2')}>
            <Text
               style={tw.style('text-lightYellow', 'text-base', {
                  fontFamily: 'Gilroy-Regular',
               })}>
               {episode.text}
            </Text>
         </View>
      </ScrollView>
   )
}

export default EpisodeContent


// Helpful code to use

   // <ScrollView>
   //       {forceJournal ? (
   //          <View>
   //             <ReflectionQuestionsResponse />
   //          </View>
   //       ) : showEpisodeTextorReflectionQ === 'text' ? (
   //          <View style={tw.style('flex-row', 'justify-center', 'px-2')}>
   //             <Text>{episode.text}</Text>
   //          </View>
   //       ) : showEpisodeTextorReflectionQ === 'questions' ? (
   //          <View>
   //             <ReflectionQuestionsResponse />
   //          </View>
   //       ) : undefined}
   //       {/* {showEpisodeTextorReflectionQ === 'text' ? (
   //      <View style={tw.style('flex-row', 'justify-center', 'm-5')}>
   //        <Text>{episode.text}</Text>
   //      </View>
   //    ) : undefined}
   //    {showEpisodeTextorReflectionQ === 'questions' ? (
   //      <View>
   //        <ReflectionQuestionsResponse />
   //      </View>
   //    ) : undefined} */}
   //    </ScrollView>