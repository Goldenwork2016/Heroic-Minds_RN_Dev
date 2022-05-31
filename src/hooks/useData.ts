import Auth from '@aws-amplify/auth'
import axios from 'axios'

const heroicMindsAPIKey = '8dztzhM6jE9VUPnKxdelT8IotF2h3cY46R0j3zyu'
const baseAPI = 'https://api.heroicminds.live'

export const submitFeedback = async (feedbackResponse: any) => {
   const path = '/data/submitFeedback'
   const myInit = {
      headers: {
         'Content-Type': 'application/json',
         'X-Api-Key': heroicMindsAPIKey,
         Authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
   }
   const data = feedbackResponse
   return await axios.post(baseAPI + path, data, myInit)
}

export const getThemes = async () => {
   const path = '/data/getThemes'
   const myInit = {
      headers: {
         'Content-Type': 'application/json',
         'X-Api-Key': heroicMindsAPIKey,
         Authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
   }
   return await axios.get(baseAPI + path, myInit)
}

export const getThemeEpisodes = async (themeId: string) => {
   const path = '/data/getThemeEpisodes'
   const myInit = {
      headers: {
         'Content-Type': 'application/json',
         'X-Api-Key': heroicMindsAPIKey,
         Authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
      params: {
         themeId,
      },
   }
   return await axios.get(baseAPI + path, myInit)
}

export const getStoryTopics = async () => {
   const path = '/data/getStoryTopics'
   const myInit = {
      headers: {
         'Content-Type': 'application/json',
         'X-Api-Key': heroicMindsAPIKey,
         Authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
   }
   return await axios.get(baseAPI + path, myInit)
}

export const getStoryTopicEpisodes = async (topicId: any) => {
   const path = '/data/getStoryTopicEpisodes'
   const myInit = {
      headers: {
         'Content-Type': 'application/json',
         'X-Api-Key': heroicMindsAPIKey,
         Authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
      params: {
         topicId,
      },
   }
   return await axios.get(baseAPI + path, myInit)
}

export const getSessionCategories = async () => {
   const path = '/data/getSessionCategories'
   const myInit = {
      headers: {
         'Content-Type': 'application/json',
         'X-Api-Key': heroicMindsAPIKey,
         Authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
   }
   return await axios.get(baseAPI + path, myInit)
}

/**
 * @deprecated
 * Backend improperly returns data.
 * To get episodes under a category, turn allEpisodes from AppContext into array values, and filter based on categoryId
 */
export const getSessionCategoryEpisodes = async (categoryId: any) => {
   const path = '/data/getSessionCategoryEpisodes'
   const myInit = {
      headers: {
         'Content-Type': 'application/json',
         'X-Api-Key': heroicMindsAPIKey,
         Authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
      params: {
         categoryId,
      },
   }
   return await axios.get(baseAPI + path, myInit)
}

export const getNewContent = async () => {
   const path = '/data/getNewContent'
   const myInit = {
      headers: {
         'Content-Type': 'application/json',
         'X-Api-Key': heroicMindsAPIKey,
         Authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
   }
   return await axios.get(baseAPI + path, myInit)
}

export const getEpisode = async (episodeId: any) => {
   const path = '/data/getEpisode'
   const myInit = {
      headers: {
         'Content-Type': 'application/json',
         'X-Api-Key': heroicMindsAPIKey,
         Authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
      params: {
         episodeId,
      },
   }
   return await axios.get(baseAPI + path, myInit)
}

export const getReflectionQuestion = async (episodeId: any) => {
   const path = '/data/reflectionQuestions2'
   const myInit = {
      headers: {
         'Content-Type': 'application/json',
         'X-Api-Key': heroicMindsAPIKey,
         Authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
      params: {
         episodeId,
      },
   }
   return await axios.get(baseAPI + path, myInit)
}

export const saveReflectionResponse = async (reflectionObj: any) => {
   const path = '/data/saveReflectionResponse'
   const myInit = {
      headers: {
         'Content-Type': 'application/json',
         'X-Api-Key': heroicMindsAPIKey,
         Authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
   }
   const data = reflectionObj
   return await axios.post(baseAPI + path, data, myInit)
}

export const updateReflectionResponse = async (reflectionArray: any) => {
   const path = '/data/updateReflectionResponse'
   const myInit = {
      headers: {
         'Content-Type': 'application/json',
         'X-Api-Key': heroicMindsAPIKey,
         Authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
   }
   const data = reflectionArray
   return await axios.post(baseAPI + path, data, myInit)
}

export const updateReflectionResponses = async (reflectionArray: any) => {
   const path = '/data/updateReflectionResponses'
   const myInit = {
      headers: {
         'Content-Type': 'application/json',
         'X-Api-Key': heroicMindsAPIKey,
         Authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
   }
   const data = reflectionArray
   return await axios.post(baseAPI + path, data, myInit)
}

export const getJournalEntries = async () => {
   const path = '/data/getJournal'
   const myInit = {
      headers: {
         'Content-Type': 'application/json',
         'X-Api-Key': heroicMindsAPIKey,
         Authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
   }
   return await axios.get(baseAPI + path, myInit)
}

export const getJournalEntries2 = async () => {
   const path = '/data/getJournals'
   const myInit = {
      headers: {
         'Content-Type': 'application/json',
         'X-Api-Key': heroicMindsAPIKey,
         Authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
   }
   return await axios.get(baseAPI + path, myInit)
}

export const getAllEpisodes = async () => {
   const path = '/data/getContent'
   const myInit = {
      headers: {
         'Content-Type': 'application/json',
         'X-Api-Key': heroicMindsAPIKey,
         Authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
   }
   return await axios.get(baseAPI + path, myInit)
}
