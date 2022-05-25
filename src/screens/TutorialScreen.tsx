import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import {
   ScrollView,
   Text,
   View,
   Image,
   TouchableOpacity,
   StyleSheet,
   FlatList,
   Dimensions,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import tw from '../lib/tailwind'
import { AppContext, AuthContext } from '../context'

type HomeScreenNavigationProps = {
   Settings: any
   Journal: any
   Themes: any
   Stories: any
   Sessions: any
   ThemeDetails: any
   StoryTopic: any
   SessionCategory: any
   Episode: any
   Home: any
}

const array = [
   {
      id: 0,
      image: require('../../assets/tutorialNew1.png'),
      title: 'Search exercise by topic, theme or simply listen to whats new.',
   },
   {
      id: 1,
      image: require('../../assets/tutorialNew2.png'),
      title: "After you're done listening to the exercise, respond to the prompts in your journal by clicking this button in the corner of the audio player.",
   },
   {
      id: 2,
      image: require('../../assets/tutorialNew3.png'),
      title: 'A podcast, blog, social media hybrid. A community to share empowering, constructvive ideas.',
   },
   {
      id: 3,
      image: require('../../assets/tutorialNew4.png'),
      title: 'Use the Search page to find exercises in the library, posts in the community and friends on Heroic Minds!',
   },
]

const TutorialScreen = ({ navigation }: NativeStackScreenProps<HomeScreenNavigationProps>) => {
   const [currentIndex, setCurrentIndex] = React.useState(0)

   const { tutorialStatus, setTutorialStatus } = React.useContext(AuthContext)
   const { user, setUser } = React.useContext(AuthContext)

   const flatlist = React.useRef<FlatList>(null)
   const flatlistText = React.useRef<FlatList>(null);

   const navigateToHome = async () => {
      await AsyncStorage.setItem('isShowTutorial', 'true')
      setTutorialStatus(true)

      console.log('navigateToHome====', tutorialStatus)
   }

   const onViewRef = React.useRef(({ viewableItems, changed }) => {
      setCurrentIndex(changed[0].index)
   })

   const viewConfigRef = React.useRef({ itemVisiblePercentThreshold: 50 })

   const renderDots = () => {
      var dots = []
      if (array != null) {
         for (let i = 0; i < array.length; i++) {
            dots.push(
               <View
                  key={i}
                  style={currentIndex == i ? styles.activeDot : styles.dots}
               />
            )
         }
      }
      return dots
   }

   const getItemLayout = (data, index) => ({
      length: Dimensions.get('window').width,
      offset: Dimensions.get('window').width * index,
      index,
   })
   // 
   useEffect(() => {
      flatlistText.current?.scrollToIndex({
         index: currentIndex,
         animated: true,
      })
   }, [currentIndex])


   return (
      <View style={{ flex: 1 }}>
         <View >
            <FlatList
               data={array}
               ref={flatlist}
               horizontal={true}
               pagingEnabled={true}
               onViewableItemsChanged={onViewRef.current}
               viewabilityConfig={viewConfigRef.current}
               showsHorizontalScrollIndicator={false}
               getItemLayout={getItemLayout}
               initialScrollIndex={0}

               keyExtractor={(item, index) => index.toString()}
               renderItem={({ item, index }) => {
                  return (
                     <View style={styles.screenContainer}>
                        <Image source={item.image} style={styles.imgBackground} />

                        {/* <Text style={styles.titleText}>{item.title}</Text> */}
                     </View>
                  )
               }}
            />
         </View>

         <View style={{ alignItems: 'center',marginTop:10 }}>
            <View style={styles.dotView}>{renderDots()}</View>
         </View>

         <View >
            <FlatList
               data={array}
               ref={flatlistText}
               horizontal={true}
               pagingEnabled={true}
               onViewableItemsChanged={onViewRef.current}
               viewabilityConfig={viewConfigRef.current}
               showsHorizontalScrollIndicator={false}
               scrollEnabled={false}
               initialScrollIndex={currentIndex}
               keyExtractor={(item, index) => index.toString()}
               renderItem={({ item, index }) => {
                  return (
                     <View style={styles.screenContainer}>
                        <Text style={styles.titleText}>{item.title}</Text>
                     </View>
                  )
               }}
            />
         </View>


         <View style={styles.bottomView}>


            {currentIndex == array.length - 1 ? (
               <TouchableOpacity style={styles.buttonView} onPress={() => navigateToHome()}>
                  <Text style={tw.style(styles.buttonText)}>{'Begin'}</Text>
               </TouchableOpacity>
            ) : (
               <TouchableOpacity style={{ marginTop: '12%', borderColor: '#E9D8A6', borderWidth: 1, borderRadius: 5, padding: 10 }} activeOpacity={0.8} onPress={() => navigateToHome()}>
                  <Text style={styles.skipText}>{'Skip Tutorial'}</Text>
               </TouchableOpacity>
            )}
         </View>

      </View>
   )
}

const styles = StyleSheet.create({
   screenContainer: {
      height: '100%',
      alignItems: 'center',
      width: Dimensions.get('window').width,
      backgroundColor: '#1C1C1C',
   },
   imgBackground: {
      width: Dimensions.get('window').width,
      // height: '75%',
      // alignSelf: 'center',
      resizeMode: 'stretch',
      // width: "100%",
      // flex: 1,
   },
   titleText: {
      fontFamily: 'Gilroy-Medium',
      color: '#E9D8A6',
      marginTop: '9%',
      fontSize: 16,
      width: '90%',
      textAlign: 'center',
      lineHeight: 22,
   },
   subText: {
      flexWrap: 'wrap',
      width: '80%',
      textAlign: 'center',
      fontFamily: 'Gilroy-Regular',
      color: '#0B0B0B',
      marginTop: 5,
      fontSize: 14,
   },
   bottomView: {
      height: '20%',
      alignItems: 'center',
   },
   skipText: {
      fontFamily: 'Gilroy-Bold',
      color: '#E9D8A6',
      width: '100%',
      textAlign: 'center',
      fontSize: 16,
   },

   dotView: {
      flexDirection: 'row',
      width: 70,
      justifyContent: 'space-between',
   },
   dots: {
      height: 10,
      width: 10,
      borderRadius: 18 / 2,
      borderWidth: 1,
      borderColor: '#E9D8A6'
   },
   activeDot: {
      height: 10,
      width: 26,
      borderRadius: 12,
      // borderWidth:1,
      backgroundColor: '#E9D8A6'
   },
   buttonText: {
      fontFamily: 'Gilroy-Bold',
      color: '#E9D8A6',
      alignSelf: 'center',
      fontSize: 17,
   },
   buttonView: {
      // backgroundColor: '',
      borderColor: '#E9D8A6',
      borderWidth: 1,
      width: '30%',
      borderRadius: 5,
      height: 35,
      justifyContent: 'center',
      marginTop: '12%',
   },
})

export default TutorialScreen
