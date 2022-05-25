import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import {
   StyleSheet,
   Text,
   SafeAreaView,
   View,
   TextInput,
   TouchableWithoutFeedback,
   Pressable,
   ScrollView,
   KeyboardAvoidingView,
} from 'react-native'
import { Keyboard } from 'react-native'
import tw from '../lib/tailwind'
import { Ionicons } from '@expo/vector-icons'

import RegistrationHeader from '../components/RegistrationHeader'
import { SignUpInput } from '../types/types'
import { signUp } from '../hooks/useAuth'
import { useToast } from 'react-native-styled-toast'
//Added this library for Issue-25
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const RegistrationScreen = ({ navigation }: any) => {
   const [checked, onCheckChange] = useState(false)
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [orgCode, setOrgCode] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [passwordHelperText, setPasswordHelperText] = useState(false)

   const passwordInputReference = React.useRef(null)

   const { toast } = useToast()

   const scrollViewStyle = tw.style('mx-5', 'flex-1')

   const fullNameStyle = tw.style('text-sm', 'leading-6', 'text-lightYellow', {
      fontFamily: 'Gilroy-Medium',
   })
   //Added {passwordVisibility, rightIcon, handlePasswordVisibility} for Issue-25
   const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility()

   const navigateBack = () => {
      navigation.goBack()
   }

   const onCheckmarkPress = () => {
      onCheckChange(!checked)
   }

   const onSignupButtonPress = () => {
      signUp({ name, email, password, orgCode })
         .then((res) => {
            displaySavedToast()
            navigateBack()
         })
         .catch((err) => {
            displayErrorToast(err)
         })
      // useSignUp(name, email, password)
   }

   const displaySavedToast = () => {
      setTimeout(() => {
         toast({ message: 'Signup Successful!' })
      }, 100)
   }

   const displayErrorToast = (err: any) => {
      return toast({
         message:
            'Check your inputs. Remember, make sure to use uppercase, lower case, and a symbol for your password and be sure to include the org code provided to you',
         color: 'error',
         hideIcon: true,
         hideAccent: true,
      })
   }

   const onForgotPasswordPress = () => {
      console.log('Forgot password pressed')
   }

   const passwordTextHelper = (value: boolean) => {
      setPasswordHelperText(value)
   }


   useEffect(() => {
      console.log(checked)
   })

   return (
      <SafeAreaView style={tw.style('flex-1', 'justify-center')}>
         <View style={tw.style('mx-5')}>
            <KeyboardAwareScrollView >
               <RegistrationHeader />

               <View style={tw`mt-4`}>
                  <Text style={fullNameStyle}>Full Name</Text>
                  <TextInput
                     onChangeText={setName}
                     style={tw.style('rounded-lg', 'h-10', 'pl-4', 'text-lightYellow', {
                        backgroundColor: 'rgba(233,216,166,0.1)',
                     })}
                     returnKeyType='next'
                  />
               </View>

               <View style={tw`mt-6`}>
                  <Text
                     style={tw.style('text-sm', 'leading-6', 'text-lightYellow', {
                        fontFamily: 'Gilroy-Medium',

                     })}>
                     Email Address
                  </Text>
                  <TextInput
                     autoCapitalize='none'
                     autoCompleteType='email'
                     textContentType='emailAddress'
                     keyboardType='email-address'
                     returnKeyType='next'
                     onChangeText={setEmail}
                     style={tw.style('rounded-lg', 'h-10', 'pl-4', 'text-lightYellow', {
                        backgroundColor: 'rgba(233,216,166,0.1)',
                     })}
                  />
               </View>

               <View style={tw`mt-4`}>
                  <Text
                     style={tw.style('text-sm', 'leading-6', 'text-lightYellow', {
                        fontFamily: 'Gilroy-Medium',

                     })}>
                     Organization Code
                  </Text>
                  <TextInput
                     onChangeText={setOrgCode}
                     style={tw.style('rounded-lg', 'h-10', 'pl-4', 'text-lightYellow', {
                        backgroundColor: 'rgba(233,216,166,0.1)',
                     })}
                     returnKeyType='next'
                  />
               </View>

               <View style={tw`mt-4`}>
                  <Text
                     style={tw.style('text-sm', 'leading-6', 'text-lightYellow', {
                        fontFamily: 'Gilroy-Medium',
                     })}>
                     Password
                  </Text>
                  {/* Updated this View Section for Issue-25 */}
                  <View style={styles.inputContainer}>
                     <TextInput
                        onChangeText={setPassword}
                        enablesReturnKeyAutomatically
                        secureTextEntry={passwordVisibility}
                        style={tw.style('h-10', 'pl-4', 'text-lightYellow', 'flex-1', {
                           width: '90%',

                        })}
                        returnKeyType='done'
                        onFocus={() => {
                           passwordTextHelper(true)
                        }}
                        onBlur={() => {
                           passwordTextHelper(false)
                        }}
                     />
                     <Pressable onPress={handlePasswordVisibility} style={tw.style('mr-2')}>
                        <Ionicons name={rightIcon} size={22} style={tw.style('text-lightYellow')} />
                     </Pressable>
                  </View>

                  <Text
                     style={tw.style('text-sm', 'leading-6', 'text-lightYellow', {
                        fontFamily: 'Gilroy-Medium',
                        display: passwordHelperText ? 'flex' : 'none',
                     })}>
                     Password must have at least a lowercase and uppercase letter, a number, and
                     a symbol
                  </Text>
               </View>

               <View style={tw`mt-4`}>
                  <Text
                     style={tw.style('text-sm', 'leading-6', 'text-lightYellow', {
                        fontFamily: 'Gilroy-Medium',
                     })}>
                     Confirm Password
                  </Text>
                  {/* Updated this View Section for Issue-25 */}
                  <View style={styles.inputContainer}>
                     <TextInput
                        enablesReturnKeyAutomatically
                        secureTextEntry={passwordVisibility}
                        onChangeText={setConfirmPassword}
                        style={tw.style('h-10', 'pl-4', 'text-lightYellow', 'flex-1', {
                           width: '90%',

                        })}
                        returnKeyType='done'
                        onFocus={() => {
                           passwordTextHelper(true)
                        }}
                        onBlur={() => {
                           passwordTextHelper(false)
                        }}
                     />
                     <Pressable onPress={handlePasswordVisibility} style={tw.style('mr-2')} >
                        <Ionicons name={rightIcon} size={22} style={tw.style('text-lightYellow')} />
                     </Pressable>
                  </View>
               </View>
               <View style={tw.style('flex-row', 'items-center', 'mt-4')}>
                  <Pressable
                     style={[tw.style('border-lightYellow', styles.checkboxBase), checked ? tw.style('border-darkGrey bg-lightYellow') : {}]}
                     onPress={onCheckmarkPress} >
                     {checked && (
                        <Ionicons name='checkmark' size={22} style={tw.style('text-darkGrey')} />
                     )}
                  </Pressable>
                  <Text
                     style={tw.style('pl-2', 'text-base', 'text-lightYellow', {
                        fontFamily: 'Gilroy-Regular',
                     })}>
                     By signing up, I agree to privacy policy of this app.
                  </Text>
               </View>

               <View style={tw`mt-6 w-2/5, mx-auto`}>
                  <Pressable
                     style={tw.style(
                        'items-center',
                        'justify-center',
                        'py-3',
                        'px-8',
                        'rounded-lg',
                        'bg-lightYellow',
                        {
                           fontFamily: 'Gilroy-Regular',
                        }
                     )}
                     onPress={onSignupButtonPress}>
                     <Text
                        style={tw.style('text-base', 'text-darkGrey', {
                           fontFamily: 'Gilroy-SemiBold',
                        })}>
                        Sign up
                     </Text>
                  </Pressable>
               </View>

               {/* <View style={tw`mt-4`}>
          <Pressable onPress={onForgotPasswordPress}>
            <Text
              style={tw.style("text-center", "text-sm", {
                fontFamily: "Gilroy-Medium",
                color: "#979797",
              })}
            >
              Already have a code?
            </Text>
          </Pressable>
        </View> */}

               <StatusBar style={'light'} />

            </KeyboardAwareScrollView >
         </View>

      </SafeAreaView >
   )
}

const styles = StyleSheet.create({
   checkboxBase: {
      width: 26,
      height: 26,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderWidth: 2,
      backgroundColor: 'transparent',
   },
   // Added this style for View Section
   inputContainer: {
      width: '100%',
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(233,216,166,0.1)',
   },
})

export default RegistrationScreen
