import React from 'react'
import { SafeAreaView } from 'react-native'
import tw from '../lib/tailwind'

import JournalQuestionsContent from '../components/JournalQuestionsContent'
import JouranlQuestionHeader from '../components/JournalQuestionHeader'

const JournalQuestionsScreen = ({ navigation, route }: any) => {
   const { episode, forceJournal } = route.params

   return (
      <SafeAreaView style={tw.style('flex-1')}>
         <JouranlQuestionHeader navigation={navigation} headerName={episode.title} />
         <JournalQuestionsContent episode={episode} forceJournal={forceJournal} />
      </SafeAreaView>
   )
}

export default JournalQuestionsScreen
