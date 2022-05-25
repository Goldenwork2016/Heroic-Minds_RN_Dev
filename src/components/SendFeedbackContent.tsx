import React from 'react'
import { Text, Image, StyleSheet, TextInput, View, Pressable } from 'react-native'
import { useToast } from 'react-native-styled-toast'
import { submitFeedback } from '../hooks/useData'
import tw from '../lib/tailwind'

const SendFeedbackContent = () => {
   const [feedback, setFeedback] = React.useState('')
   const { toast } = useToast()

   const onFeedbackButtonPress = () => {
      const feedbackObj = { feedback: feedback }
      if (feedback !== '') {
         submitFeedback(feedbackObj)
            .then((res) => {
               displaySubmittedToast()
            })
            .catch((err) => {
               displayErrorToast()
            })
      } else {
         displayErrorToast()
      }
   }

   const displaySubmittedToast = () => {
      return toast({ message: 'Feedback Submitted!' })
   }

   const displayErrorToast = () => {
      return toast({
         message: "Looks like we couldn't submit your feedback, try again",
         color: 'error',
         hideIcon: true,
         hideAccent: true,
      })
   }

   return (
      <View style={tw`m-5`}>
         <View>
            <Text
               style={tw.style('mb-5', 'text-start', 'text-sm', {
                  fontFamily: 'Gilroy-Medium',
                  color: '#000000',
               })}>
               Send us feedback! Feel free to send us your thoughts, ideas, or improvments for
               Heroic Minds!
            </Text>

            <TextInput
               autoCapitalize='sentences'
               keyboardType='default'
               returnKeyType='done'
               multiline={true}
               maxLength={2000}
               editable={true}
               style={tw.style('border', 'border-solid', 'rounded-lg', 'h-50', 'p-4', {
                  backgroundColor: 'rgba(112, 115, 128, 0.08)',
                  borderColor: 'rgba(112, 115, 128, 0.2)',
                  textAlignVertical: 'top',
               })}
               onChangeText={setFeedback}
            />
         </View>

         <View style={tw`mt-6`}>
            <Pressable
               style={tw.style('items-center', 'justify-center', 'py-3', 'px-8', 'rounded-lg', {
                  fontFamily: 'Gilroy-Regular',
                  backgroundColor: '#070B24',
               })}
               onPress={onFeedbackButtonPress}>
               <Text
                  style={tw.style('text-lg', {
                     fontFamily: 'Gilroy-SemiBold',
                     color: 'white',
                  })}>
                  Send Feedback
               </Text>
            </Pressable>
         </View>
      </View>
   )
}

export default SendFeedbackContent
