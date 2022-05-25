import { Auth } from 'aws-amplify'
import * as React from 'react'
import { Text, TextInput, View, Pressable } from 'react-native'
import { changePassword } from '../hooks/useAuth'
import tw from '../lib/tailwind'
import { useToast } from 'react-native-styled-toast'

const ChangePasswordContent = () => {
   const [oldPassword, setOldPassword] = React.useState('')
   const [newPassword, setNewPassword] = React.useState('')
   const [confirmPassword, setConfirmPassword] = React.useState('')
   const { toast } = useToast()

   const onChangePasswordButtonPress = () => {
      Auth.currentAuthenticatedUser().then((user) => {
         changePassword({ user, oldPassword, newPassword })
            .then(() => {
               displayChangedToast()
            })
            .catch((err) => {
               displayErrorToast()
            })
      })
   }

   const displayChangedToast = () => {
      return toast({ message: 'Password Changed!' })
   }

   const displayErrorToast = () => {
      return toast({
         message: "Looks like we couldn't change your password, try again",
         color: 'error',
         hideIcon: true,
         hideAccent: true,
      })
   }

   return (
      <View style={tw`m-5 flex-1`}>
         <View style={tw.style('flex-1')}>
            <View style={tw`mt-4`}>
               <Text
                  style={tw.style('text-base', 'leading-6', 'text-lightYellow', {
                     fontFamily: 'Gilroy-Medium',
                  })}>
                  Old Password
               </Text>
               <TextInput
                  secureTextEntry={true}
                  onChangeText={setOldPassword}
                  style={tw.style('rounded-lg', 'h-10', 'pl-4',
                     'text-lightYellow',
                     {
                        //Applying in RGB to specify the opacity only on Input field background
                        backgroundColor: 'rgba(233,216,166,0.1)',
                        borderColor: 'rgba(233,216,166,0.1)'

                     })}
                  returnKeyType='done'
               />
            </View>
            <View style={tw`mt-4`}>
               <Text
                  style={tw.style('text-base', 'leading-6', 'text-lightYellow', {
                     fontFamily: 'Gilroy-Medium',
                  })}>
                  New Password
               </Text>
               <TextInput
                  secureTextEntry={true}
                  onChangeText={setNewPassword}
                  style={tw.style('rounded-lg', 'h-10', 'pl-4',
                     'text-lightYellow', {
                     //Applying in RGB to specify the opacity only on Input field background
                     backgroundColor: 'rgba(233,216,166,0.1)',
                     borderColor: 'rgba(233,216,166,0.1)'
                  })}
                  returnKeyType='done'
               />
            </View>

            <View style={tw`mt-4`}>
               <Text
                  style={tw.style('text-base', 'leading-6', 'text-lightYellow', {
                     fontFamily: 'Gilroy-Medium',
                  })}>
                  Confirm New Password
               </Text>
               <TextInput
                  secureTextEntry={true}
                  onChangeText={setConfirmPassword}
                  style={tw.style('rounded-lg', 'h-10', 'pl-4', 'text-lightYellow', {
                     //Applying in RGB to specify the opacity only on Input field background
                     backgroundColor: 'rgba(233,216,166,0.1)',
                     borderColor: 'rgba(233,216,166,1)'
                  })}
                  returnKeyType='done'
               />

            </View>
         </View>
         <View style={tw.style(` flex-1 justify-end mb-4a`)}>
            <Pressable
               style={tw.style('items-center', 'justify-end',
                  'mx-auto', 'py-2', 'w-28', 'rounded-lg', 'border', 'border-lightYellow', {
                  fontFamily: 'Gilroy-Regular',
               })}
               onPress={onChangePasswordButtonPress}>
               <Text
                  style={tw.style('text-base', 'text-lightYellow', {
                     fontFamily: 'Gilroy-Medium',
                  })}>
                  Save
               </Text>
            </Pressable>
         </View>
      </View>
   )
}

export default ChangePasswordContent
