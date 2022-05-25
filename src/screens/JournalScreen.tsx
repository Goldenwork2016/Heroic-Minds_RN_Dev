import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import JournalHeader from '../components/JournalHeader'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import JournalTiles from '../components/JournalTiles'
// import SessionTiles from '../components/SessionTiles'
import tw from '../lib/tailwind'
import SingleWordHeader from '../components/SingleWordHeader'

const JournalScreen = ({ navigation }: NativeStackScreenProps<{ JournalQuestions: any }>) => {
   const navigateToEpisodeJournal = (episode: any) => {
      navigation.navigate('JournalQuestions', { episode: episode, forceJournal: true })
   }

   return (
      <SafeAreaView style={tw.style('flex-1')}>
         <SingleWordHeader navigation={navigation} headerName={'Journal'} />
         <ScrollView>
            <JournalTiles navigateToEpisodeJournal={navigateToEpisodeJournal} />
         </ScrollView>
      </SafeAreaView>
   )
}

export default JournalScreen
