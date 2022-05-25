import React from 'react'
import { AppContext } from './index'

interface AppProps {
   children: React.ReactNode
}
export const AppProvider = ({ children }: AppProps) => {
   const [themes, setThemes] = React.useState<any>([])
   const [storyTopics, setStoryTopics] = React.useState<any>([])
   const [sessionCategories, setSessionCategories] = React.useState<any>([])
   const [themeEpisodes, setThemeEpisodes] = React.useState<any>([])
   const [topicEpisodes, setTopicEpisodes] = React.useState<any>([])
   const [sessionEpisodes, setSessionEpisodes] = React.useState<any>([])
   const [reflectionQuestions, setReflectionQuestions] = React.useState<any>([])
   const [journalEntries, setJournalEntries] = React.useState<any>([])
   const [rawEpisodes, setRawEpisodes] = React.useState<any>([])
   const [allEpisodes, setAllEpisodes] = React.useState<any>([])
   const [contentLoading, setContentLoading] = React.useState<boolean>(true);

   const AppContextObject = {
      themes,
      setThemes,
      themeEpisodes,
      setThemeEpisodes,
      storyTopics,
      setStoryTopics,
      sessionCategories,
      setSessionCategories,
      topicEpisodes,
      setTopicEpisodes,
      sessionEpisodes,
      setSessionEpisodes,
      reflectionQuestions,
      setReflectionQuestions,
      journalEntries,
      setJournalEntries,
      rawEpisodes,
      setRawEpisodes,
      allEpisodes,
      setAllEpisodes,
      contentLoading,
      setContentLoading
   }

   return <AppContext.Provider value={AppContextObject}>{children}</AppContext.Provider>
}

export default AppProvider
