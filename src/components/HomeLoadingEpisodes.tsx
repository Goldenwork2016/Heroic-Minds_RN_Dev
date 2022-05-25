import React, { Fragment } from 'react'
import { ScrollView, View, Text } from 'react-native'
import SkeletonContent from 'react-native-skeleton-content'
import { AppContext, AudioContext } from '../context'
import tw from '../lib/tailwind'

import HomeEpisode from './HomeEpisode'

interface HomeLoadingEpisodesProps {
   size: number
}

const HomeLoadingEpisodes = (props: HomeLoadingEpisodesProps) => {
   const loadingEpisodes = [{}, {}, {}, {}]
   const loadingRows = [{}, {}, {}]

   const loadingRender = () => {
      return (
         loadingRows &&
         loadingRows.map((episode: any, i: any) => (
            <View style={tw.style('mb-10')}>
               <SkeletonContent
                  layout={[{ width: 130, height: 30 }]}
                  boneColor='#121212'
                  highlightColor='#333333'
                  animationDirection='horizontalLeft'
                  isLoading={true}
                  containerStyle={{ flex: 1, width: 20, marginBottom:10 }}
               />
               <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {loadingEpisodes &&
                     loadingEpisodes.map((episode: any, i: any) => (
                        <View>
                           <View
                              style={tw.style(
                                 `w-${45}`,
                                 `h-${50}`,
                                 'rounded-xl',
                                 'mr-4 drop-shadow-md  ',
                                 {
                                    overflow: 'hidden',
                                 }
                              )}>
                              <SkeletonContent
                                 layout={[{ width: 300, height: 300 }]}
                                 boneColor='#121212'
                                 highlightColor='#333333'
                                 animationDirection='horizontalLeft'
                                 isLoading={true}
                                 containerStyle={tw.style('pt-1', 'pr-1', 'pb-1r')}
                              />
                           </View>
                           <View style={tw.style('w-45', {})}>
                              <SkeletonContent
                                 layout={[
                                    { width: 100, height: 20, marginBottom: 6, marginTop: 6 },
                                    { width: 50, height: 20 },
                                 ]}
                                 boneColor='#121212'
                                 highlightColor='#333333'
                                 animationDirection='horizontalLeft'
                                 isLoading={true}
                                 containerStyle={{
                                    flex: 1,
                                    alignItems: 'center',
                                 }}></SkeletonContent>
                           </View>
                        </View>
                     ))}
               </ScrollView>
            </View>
         ))
      )
   }

   return <View>{loadingRender()}</View>
}

export default HomeLoadingEpisodes
