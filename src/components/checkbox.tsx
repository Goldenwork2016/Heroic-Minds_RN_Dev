import React, { useState } from 'react'
import { GestureResponderEvent, Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const CheckBox = (
   checked: any,
   onChange: (bool: any) => void,
   buttonStyle = {},
   activeButtonStyle = {},
   inactiveButtonStyle = {},
   activeIconProps = {},
   inactiveIconProps = {}
) => {
   const onCheckmarkPress = () => {
      onChange(!checked)
   }
   const iconProps = checked ? activeIconProps : inactiveIconProps

   return (
      <Pressable
         style={[buttonStyle, checked ? activeButtonStyle : inactiveButtonStyle]}
         onPress={onCheckmarkPress}>
         {checked && <Ionicons name='checkmark' size={24} color='black' {...iconProps} />}
      </Pressable>
   )
}

export default CheckBox
