import React from 'react'
import { View, Text, ScrollView, ImageBackground, Pressable, Platform } from 'react-native'
import { AppContext } from '../context'

import tw from '../lib/tailwind'
import SessionHeader from './SessionHeader'
import { getJournalEntries, getJournalEntries2 } from '../hooks/useData'

interface JournalTileProps {
   navigateToEpisodeJournal(episode: any): any
}

const JournalTiles = (props: JournalTileProps) => {
   const { navigateToEpisodeJournal } = props
   const { journalEntries, setJournalEntries } = React.useContext(AppContext)

   const imageBaseURI = { uri: 'https://img.heroicminds.live/' }

   React.useEffect(() => {
      getJournalEntries2()
         .then((response) => {
            if (response.data.code === 'HM200') {
               let themesResponse = response.data.data.records
               setJournalEntries(themesResponse)
               //  setThemes(themesResponse)
            } else {
               // handle no data
            }
         })
         .catch((err) => { })
   }, [])

   return (
      <View style={tw.style('flex-row', 'flex-wrap', 'justify-between', Platform.OS == 'android' ? 'm-4' : 'm-5', 'text-lightYellow')}>
         {
            journalEntries.map((entry: any, i: number) => {
               return (
                  <Pressable
                     key={i}
                     onPress={() => {
                        navigateToEpisodeJournal(entry)
                     }}>
                     <View style={tw.style('mb-12')}>
                        <View style={tw.style('w-40', 'h-40')}>
                           <ImageBackground
                              source={{
                                 uri: imageBaseURI.uri + entry.id + '.png',
                              }}
                              imageStyle={tw.style('rounded-2xl')}
                              style={tw.style({ width: '100%', height: '100%' })}
                           />
                           <Text style={tw.style('ml-2', 'pt-2', 'text-lightYellow', 'mx-auto')}>{entry.title}</Text>
                        </View>
                     </View>
                  </Pressable>
               )
            })
         }
      </View>
   )
}

export default JournalTiles
