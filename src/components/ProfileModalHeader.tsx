import React from 'react'
import { View, Image, Pressable, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import tw from '../lib/tailwind'

interface Props {
   goBack: () => any
}

const ProfileModalHeader = (props: Props) => {
   return (
      <View style={tw.style("flex-row", "mt-2", "justify-end", "mr-2")}>
         <Pressable onPress={props.goBack}>
            <View style={tw.style("")}>
               <Text style={tw.style("text-sm", "text-center", { fontFamily: "Gilroy-SemiBold" })}>{'Cancel'}</Text>
            </View>
         </Pressable>

      </View>
   )
}

export default ProfileModalHeader
