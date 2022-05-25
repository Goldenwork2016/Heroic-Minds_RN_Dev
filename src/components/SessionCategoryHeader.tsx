import React from 'react'
import { AppContext } from '../context'

import CategoryHeader from './CategoryHeader'
interface ThemeHeaderProps {
   category: any
}

const SessionCategoryHeader = ({ category }: ThemeHeaderProps) => {
   const imageBaseURI = { uri: 'https://img.heroicminds.live/' }
   const { sessionEpisodes, setSessionEpisodes, allEpisodes } = React.useContext(AppContext)

   const clearSessionEpisodes = () => {
      setSessionEpisodes(null)
   }

   React.useEffect(() => {
      setSessionEpisodes(
         Object.values(allEpisodes).filter(
            (ep: any) => ep.categoryId === category.sessionCategoryId
         )
      )
      return () => {
         if (sessionEpisodes !== null) {
            clearSessionEpisodes()
         }
      }
   }, [])

   return (
      <CategoryHeader
         imgUri={`${imageBaseURI.uri}${category.sessionCategoryId}.png`}
         name={category.sessionCategoryName}
         description={category.sessionCategoryDescription}
      />
   )
}

export default SessionCategoryHeader
