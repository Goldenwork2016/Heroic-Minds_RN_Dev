import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import {
   StyleSheet,
   Text,
   View,
   SafeAreaView,
   TextInput,
   TouchableWithoutFeedback,
   Pressable,
   Button,
   Dimensions,
   KeyboardAvoidingView,
} from 'react-native'
import { Keyboard } from 'react-native'
import tw from '../lib/tailwind'
import { Ionicons } from '@expo/vector-icons'

import LoginHeader from '../components/LoginHeader'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthContext } from '../context'
import { signIn } from '../hooks/useAuth'
import { useToast } from 'react-native-styled-toast'
//Added this library for Issue-25
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const LoginScreen = ({ navigation }: NativeStackScreenProps<{ Registration: any }>) => {
   const { user, setUser } = React.useContext(AuthContext)
   const { toast } = useToast()

   const [checked, onCheckChange] = useState(false)
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const onCheckmarkPress = () => {
      onCheckChange(!checked)
   }

   //Added {passwordVisibility, rightIcon, handlePasswordVisibility} for Issue-25
   const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility()

   const displayErrorToast = () => {
      return toast({
         message: 'Username or password incorrect',
         color: 'error',
         hideIcon: true,
         hideAccent: true,
      })
   }

   const onLoginButtonPress = async () => {
      signIn({ email, password })
         .then((res) => {
             setUser(res)
         })
         .catch((err) => {
            console.log(err)
            displayErrorToast()
         })
   }

   const onForgotPasswordPress = () => {
      console.log('Forgot password pressed')
   }

   const navigateToRegistrationScreen = () => {
      navigation.navigate('Registration')
   }

   const iconProps = checked ? styles.checkboxChecked : {}
   const scrollViewStyle = tw.style('mx-5', 'flex-1')

   return (
      <SafeAreaView style={tw.style('flex-1',)}>
         <View style={tw.style('mx-5 flex-1 ')}>
            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, }} >

               <View onStartShouldSetResponder={() => true} style={tw`flex-1 `}>
                  <View style={tw`justify-center flex-6 `}>
                     <LoginHeader />

                     <View style={tw`mt-4`}>
                        <Text
                           style={tw.style('text-base', 'leading-6', 'text-lightYellow', {
                              fontFamily: 'Gilroy-Medium',
                           })}>
                           Email
                        </Text>
                        <TextInput
                           autoCapitalize='none'
                           autoCompleteType='email'
                           textContentType='emailAddress'
                           keyboardType='email-address'
                           returnKeyType='next'
                           onChangeText={setEmail}
                           style={tw.style('border', 'border-solid', 'rounded-lg', 'h-10', 'pl-4', 'text-lightYellow', {
                              backgroundColor: 'rgba(112, 115, 128, 0.08)',
                              borderColor: 'rgba(112, 115, 128, 0.2)',
                           })}
                        />
                     </View>

                     <View style={tw`mt-4`}>
                        <Text
                           style={tw.style('text-base', 'leading-6', 'text-lightYellow', {
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
                              style={tw.style('h-10', 'pl-4', 'text-lightYellow', {
                                 width: '90%',
                              })}
                              returnKeyType='done'
                           />
                           <Pressable onPress={handlePasswordVisibility}>
                              <Ionicons name={rightIcon} size={22} style={tw.style('text-lightYellow')} />
                           </Pressable>
                        </View>
                     </View>

                     {/* TODO: OLD Comments -> Should be removed if not required anymore */}
                     {/* <View style={tw.style("flex-row", "items-center", "mt-4")}>
          <Pressable
            style={[styles.checkboxBase, checked ? styles.checkboxChecked : {}]}
            onPress={onCheckmarkPress}
          >
            {checked && (
              <Ionicons
                name="checkmark"
                size={22}
                color="white"
                {...iconProps}
              />
            )}
          </Pressable>
          <Text
            style={tw.style("ml-2", "text-sm", {
              fontFamily: "Gilroy-Regular",
              color: "#070B24",
            })}
          >
            Remember me?
          </Text>
        </View> */}

                     <View style={tw.style(`mt-6`, 'w-2/5', 'mx-auto')}>
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
                           onPress={onLoginButtonPress}>
                           <Text
                              style={tw.style('text-base', 'text-darkGrey', {
                                 fontFamily: 'Gilroy-SemiBold',
                              })}>
                              Login
                           </Text>
                        </Pressable>
                     </View>

                     {/* TODO: OLD Comments -> Should be removed if not required anymore */}
                     {/* <View style={tw`mt-6`}>
          <Pressable onPress={onForgotPasswordPress}>
            <Text
              style={tw.style("text-center", "text-sm", {
                fontFamily: "Gilroy-Medium",
                color: "#979797",
              })}
            >
              Forgot Password?
            </Text>
          </Pressable>
        </View> */}
                  </View>

                  <View style={tw`mb-4 flex-2 justify-end`}>
                     <Pressable onPress={navigateToRegistrationScreen}>
                        <Text
                           style={tw.style('text-center', 'text-base', 'pb-1', 'text-lightYellow', {
                              fontFamily: 'Gilroy-Medium',
                              fontWeight: 'bold',
                           })}>
                           Don't have an account?{' '}
                           <Text style={tw.style({ textDecorationLine: 'underline' })}>Sign up</Text>
                        </Text>
                     </Pressable>
                  </View>
                  <StatusBar style={'light'} />
               </View>
            </KeyboardAwareScrollView>

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
      borderColor: '#070B24',
      backgroundColor: 'transparent',
   },
   checkboxChecked: {
      backgroundColor: '#070B24',
   },
   // Added this style for View Section
   inputContainer: {
      width: '100%',
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      backgroundColor: 'rgba(112, 115, 128, 0.08)',
      borderColor: 'rgba(112, 115, 128, 0.2)',
   },
})

export default LoginScreen
