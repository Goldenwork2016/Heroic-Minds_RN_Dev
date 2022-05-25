import * as React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import {
   ScrollView,
   Text,
   View,
   Image,
   TouchableOpacity,
   StyleSheet,
   SafeAreaView,
} from 'react-native'

import tw from '../lib/tailwind'
import { isAuth } from '../hooks/useAuth'
import { AuthContext } from '../context'

import { Ionicons } from '@expo/vector-icons'
import LogoSvg from '../components/SVGs/LogoSvg'

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

const IntroductionScreen = ({ navigation }: NativeStackScreenProps<HomeScreenNavigationProps>) => {
   const { user, setUser } = React.useContext(AuthContext)
   const isAuthHandler = async () => {
      await isAuth()
         .then((res) => {
            setUser(res)
            console.log('user data===', res.attributes.name)
         })
         .catch((err) => {
            setUser(null)
         })
   }

   const navigateToTutorial = () => {
      navigation.navigate('Tutorial')
   }

   React.useEffect(() => {
      isAuthHandler()
   }, [])

   return (
      <View style={{ flex: 1, backgroundColor: '#1C1C1C' }}>
         <View style={{ flex: 1.7 }}>
            <ScrollView
               style={tw.style('ml-5', 'mr-5', 'flex-1')}
               showsVerticalScrollIndicator={false}>
               <View style={tw.style('mt-20','mb-10')}>
                  <Image
                     source={require('../../assets/appLogoNew.png')}
                     style={[
                        styles.imageView,
                        {
                           resizeMode: 'contain',
                        },
                     ]}
                  />

                  {/* <Image source={require('../../assets/mockup.png')} style={styles.imageView} /> */}
               </View>
               <Text numberOfLines={1} style={tw.style('text-xl', styles.titleText)}>
                  {'Thanks for sigining up,'}
               </Text>
               <Text numberOfLines={1} style={tw.style('text-xl', styles.titleText)}>
                  {user.attributes.name}
               </Text>
               <Text numberOfLines={1} style={tw.style('text-xl', styles.titleText)}>
                  {'You can now access:'}
               </Text>

               <View style={tw.style('mt-8')}>
                  <View style={tw.style(styles.rowView)}>
                     <Image
                        source={require('../../assets/checkCircle.png')}
                        style={tw.style(styles.checkIcon)}
                     />

                     <Text numberOfLines={2} style={tw.style('ml-3', styles.subText)}>
                        {'Hundreds of exercises...'}
                     </Text>
                  </View>

                  <View style={tw.style('mt-5', styles.rowView)}>
                     <Image
                        source={require('../../assets/checkCircle.png')}
                        style={tw.style(styles.checkIcon)}
                     />

                     <Text style={tw.style('ml-3', styles.subText)}>
                        {
                           'Journaling feature to allow you to track your thoughts, ideas, reflections and discoveries.'
                        }
                     </Text>
                  </View>

                  <View style={tw.style('mt-5', styles.rowView)}>
                     <Image
                        source={require('../../assets/checkCircle.png')}
                        style={tw.style(styles.checkIcon)}
                     />

                     <Text numberOfLines={2} style={tw.style('ml-3', styles.subText)}>
                        {'A community to share and engage in powerful ideas with others.'}
                     </Text>
                  </View>
               </View>



               <StatusBar style={'dark'} />
            </ScrollView>

         </View>

         <View style={tw.style('mt-10 bg-lightYellow p-2 rounded-xl mx-auto ')}>
            <TouchableOpacity onPress={() => navigateToTutorial()}>
               <Text
                  style={tw.style('text-xl text-darkGrey text-center', {
                     fontFamily: 'Gilroy-SemiBold',
                  })}>
                  Get Started
               </Text>
            </TouchableOpacity>
         </View>

         <StatusBar style={'light'} />
      </View>
   )
}


const styles = StyleSheet.create({
   rowView: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   checkIcon: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
   },
   subText: {
      fontFamily: 'Gilroy-Medium',
      color: '#E9D8A6',
      fontSize: 20,
      width: '90%',
   },
   buttonText: {
      fontFamily: 'Gilroy-Bold',
      color: '#000',
      alignSelf: 'center',
      fontSize: 24,
      marginTop: 2,
   },
   buttonView: {
      backgroundColor: '#E9D8A6',
      width: '40%',
      borderRadius: 12,
      height: 35,
      justifyContent: 'center',
   },
   imageView: {
      height: 88,
      width: 92,
      // resizeMode: 'contain'
   },
   titleText: {
      fontFamily: 'Gilroy-Bold',
      color: '#E9D8A6',
      fontSize: 24
   },
})

export default IntroductionScreen
