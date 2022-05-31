import React from 'react'
import {
   Pressable, Text, Image, ScrollView, View, FlatList, Dimensions,
   Animated, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { AppContext } from '../context'
import tw from '../lib/tailwind'
import { useToast } from 'react-native-styled-toast'
import { updateReflectionResponse, updateReflectionResponses } from '../hooks/useData'
import { ExpandingDot } from "react-native-animated-pagination-dots";
import LessThanIconSVG from './SVGs/LessThanIconSVG'
import GreaterThanIconSVG from './SVGs/GreaterThanIconSVG'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ReflectionQuestionsResponse = () => {
   const { reflectionQuestions } = React.useContext(AppContext)
   const [value, setValue] = React.useState([])
   const [flatListIndex, setFlatListIndex] = React.useState(0)

   const valueRef = React.useRef()
   const { width, height } = Dimensions.get('window');
   valueRef.current = value as any

   const scrollX = React.useRef(new Animated.Value(0)).current;
   const flatListQuestionRef = React.useRef<any>(null)
   const flatListInputRef = React.useRef<any>(null)

   const viewItemRef = React.useRef(({ viewableItems }: any) => {
      if (viewableItems.length > 0) {
         setFlatListIndex(viewableItems[0].index)
         flatListQuestionRef.current.scrollToIndex({ index: viewableItems[0].index })
      }
   })
   const viewConfig = React.useRef(({ itemVisiblePercentThreshold: 90 }))
   const { toast } = useToast()

   const onTextChangeHandler = (valueText: any, index: number, reflectionObject: any) => {
      //Input Field validation
      //Invalid - if Current Value is not equal to ReflectionObject.response
      // OR Current Value is equal to ReflectionObject.response
      if (reflectionObject?.response == valueText || valueText.length == 0 && reflectionObject?.response.length == 0) {
         return;
      }
      var currentDate = new Date().toISOString()
      if (reflectionObject.type === 'Answered') {
         const inputValue: any = [...value]
         const inputTextObject = {
            responseId: reflectionObject.responseId,
            response: valueText,
            type: reflectionObject.type,
            lastUpdated: currentDate,
         }
         inputValue[index] = inputTextObject
         setValueHandler(inputValue)
      } else if (reflectionObject.type === 'Unanswered') {
         const inputValue: any = [...value]
         const inputTextObject = {
            questionId: reflectionObject.questionId,
            episodeId: reflectionObject.episodeId,
            response: valueText,
            type: reflectionObject.type,
            uploadDate: currentDate,
         }
         inputValue[index] = inputTextObject
         setValueHandler(inputValue)
      }
   }

   const setValueHandler = (value: any) => {
      setValue(value)
   }

   const saveResponseHandler = (arrayToSave: any) => {
      if (arrayToSave.length > 0) {
         updateReflectionResponses(arrayToSave)
            .then((res) => {
               displaySavedToast()
            })
            .catch((err) => {
               displayErrorToast(err)
            })
      }
   }

   const displaySavedToast = () => {
      return toast({ message: 'Saved!' })
   }

   const displayErrorToast = (error: any) => {
      return toast({
         message: error.response.data.data,
         color: 'error',
         hideIcon: true,
         hideAccent: true,
      })
   }

   /**
    * Handle logic for scrolling list to the Left
    * @returns 
    */
   const onPressBack = () => {
      if (!flatListInputRef && flatListIndex - 1 == 0 || flatListIndex == 0) return
      flatListInputRef.current.scrollToIndex({ index: flatListIndex - 1 })
      flatListQuestionRef.current.scrollToIndex({ index: flatListIndex - 1 })

      setFlatListIndex(flatListIndex - 1)

   }

   /**
   * Handle logic for scrolling list to the Right
   * @returns 
   */
   const onPressForward = () => {
      if (!flatListInputRef || flatListIndex + 1 == reflectionQuestions.length) return
      flatListInputRef.current.scrollToIndex({ index: flatListIndex + 1 })
      flatListQuestionRef.current.scrollToIndex({ index: flatListIndex + 1 })
      setFlatListIndex(flatListIndex + 1)

   }

   React.useEffect(() => {
      return () => {
         saveResponseHandler(valueRef.current)
      }
   }, [])

   const renderItemQuestions = ({ item, index }: any) => {

      return (

         <View
            style={tw.style('mt-4', { width })}
            key={item.questionId}
         >
            <ScrollView>
               <Text
                  style={tw.style('mx-2', 'text-center', 'text-[18px]', 'text-lightYellow', {
                     fontFamily: 'Gilroy-Medium',
                  })}>
                  {item?.question}

               </Text>

               <Text
                  style={tw.style('mx-2', 'mt-2', 'text-center', 'text-base', 'text-lightYellow', {
                     fontFamily: 'Gilroy-Regular',
                  })}>
                  {item.lastUpdated && `Last Updated: ${new Date(item.lastUpdated).toDateString()}`}
               </Text>

            </ScrollView>
         </View>
      )

   }
   const renderItemInputArea = ({ item, index }: any) => {
      return (
         <ScrollView contentContainerStyle={{ flex: 1, marginBottom: 20 }} >

            <View
               style={tw.style('flex-1', { width })}
               key={item.questionId}
            >

               <TextInput
                  autoCapitalize='sentences'
                  keyboardType='default'
                  returnKeyType='done'
                  multiline={true}
                  maxLength={2000}
                  editable={true}
                  placeholder={'Type here.... Your answers will be auto saved'}
                  placeholderTextColor='#E9D8A6'
                  defaultValue={item?.response || undefined}
                  style={tw.style('flex-1', 'border', 'border-solid', 'rounded-lg', 'mx-4',
                     'p-4', 'text-lightYellow', 'border-lightYellow',
                     {
                        backgroundColor: 'rgba(112, 115, 128, 0.08)',
                        textAlignVertical: 'top',
                     })}
                  onChangeText={(inputText) => onTextChangeHandler(inputText, index, item)}

               />

            </View >
         </ScrollView >

      )

   }



   return (

      <KeyboardAvoidingView
         style={tw.style('flex-1 ')}
         behavior={Platform.OS == 'ios' ? 'padding' : undefined}

      >
         <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>

               <View style={tw.style('flex-1')} >
                  {/* //QUESTION */}
                  <View style={tw.style('flex-2')}>
                     {
                        reflectionQuestions &&
                        <FlatList
                           data={reflectionQuestions}
                           renderItem={renderItemQuestions}
                           horizontal
                           bounces={true}
                           decelerationRate={'fast'}
                           pagingEnabled
                           scrollEnabled={false}
                           ref={flatListQuestionRef}
                           showsHorizontalScrollIndicator={false}
                           keyExtractor={(item) => item.questionId}
                           contentContainerStyle={tw.style('items-center')}
                        />

                     }
                  </View>
                  <View style={tw.style('h-10 px-4')}>
                     <View style={tw.style('flex-row items-center my-2 ')} >
                        <Pressable hitSlop={10} style={tw.style('px-2')} onPress={onPressBack} >
                           <LessThanIconSVG />
                        </Pressable>
                        <View style={tw.style('w-80 mx-auto mb-1')}>
                           <ExpandingDot
                              data={reflectionQuestions}
                              expandingDotWidth={30}
                              scrollX={scrollX}
                              inActiveDotOpacity={0.6}
                              activeDotColor="#E9D8A6"
                              key={flatListIndex}
                              dotStyle={tw.style('border-2 border-lightYellow', {
                                 width: 10,
                                 height: 10,
                                 borderRadius: 5,
                                 marginHorizontal: 5,
                              })}
                              containerStyle={tw.style({
                                 top: 0,
                              })}
                           />
                        </View>
                        <Pressable style={tw.style('px-2')} onPress={onPressForward}>
                           <GreaterThanIconSVG />

                        </Pressable>

                     </View>
                  </View>
                  <View style={tw.style('flex-4')}>
                     {
                        reflectionQuestions &&
                        <FlatList
                           data={reflectionQuestions}
                           renderItem={renderItemInputArea}
                           horizontal
                           bounces={true}
                           decelerationRate={'fast'}
                           pagingEnabled
                           onScroll={
                              Animated.event(
                                 [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                 {
                                    useNativeDriver: false,
                                 }
                              )}
                           onViewableItemsChanged={viewItemRef.current}
                           ref={flatListInputRef}
                           viewabilityConfig={viewConfig.current}
                           showsHorizontalScrollIndicator={false}
                           keyExtractor={(item) => item.questionId}

                        />
                     }
                  </View>

               </View >
            </ScrollView>
         </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

   )
}

export default ReflectionQuestionsResponse
