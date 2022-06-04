import * as React from 'react'
import {
   ScrollView,
   Text,
   Switch,
   View,
   ImageBackground,
   Pressable,
   Dimensions,
   TouchableOpacity,
   Platform,
   StyleSheet,
   Image,
   Modal,
   Button,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import * as Notifications from 'expo-notifications'
import tw from '../lib/tailwind'
import { signOut } from '../hooks/useAuth'
import { AuthContext } from '../context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import SwitchToggle from 'react-native-switch-toggle'
import InsightIconSVG from './SVGs/InsightIconSVG'

import DateTimePicker from '@react-native-community/datetimepicker'
import Arrow from '../../assets/arrow.png'
import { scheduleNotification } from '../lib/notifications'
import { cancelAllScheduledNotificationsAsync } from 'expo-notifications'

type NotificationScreenNavigationProps = {}

const options = [
   { label: 'Every Day', value: 'every-day' },
   { label: 'Every Other Day', value: 'every-other-day' },
   { label: 'Every Three Days', value: 'every-three-days' },
   { label: 'Sundays', value: 'sundays' },
   { label: 'Mondays', value: 'mondays' },
]

const NotificationDetail = ({
   navigation,
}: NativeStackScreenProps<NotificationScreenNavigationProps>) => {
   const image = {
      uri: 'https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg',
   }
   const [isSelected, setSelected] = React.useState(false)
   const [HomeNotificationon, HomeNotificationoff] = React.useState(false)
   const [CommunityNotificationon, CommunityNotificationoff] = React.useState(false)

   const [value, setValue] = React.useState('every-day')
   const [reminder, setReminder] = React.useState<Date>(new Date(Date.now()))
   const [showTime, setShowTime] = React.useState(false)
   const [visible, setVisible] = React.useState(false)

   const onChange = (e: React.SyntheticEvent, selectedDate: any) => {
      const newDate = selectedDate || reminder
      if (Platform.OS === 'android') {
         setShowTime(false)
      }
      setReminder(newDate)
   }

   const onScheduleReminder = async () => {
      const hour = reminder.getHours()
      const minute = reminder.getMinutes()

      let schedule = {}

      switch (value) {
         case 'every-day':
            schedule = {
               hour,
               minute,
            }
            break

         case 'every-other-day':
            schedule = {
               seconds: 3600 * 48,
            }
            break

         case 'every-three-days':
            schedule = {
               seconds: 3600 * 72,
            }
            break

         case 'sundays':
            schedule = {
               weekday: 1,
               hour,
               minute,
            }
            break

         case 'mondays':
            schedule = {
               weekday: 2,
               hour,
               minute,
            }
            break

         default:
            break
      }

      await cancelAllScheduledNotificationsAsync()
      scheduleNotification(schedule, value, { hour, minute })
   }

   const showPicker = () => {
      setShowTime(true)
   }
   const hidePicker = () => {
      setShowTime(false)
   }
   const handleConfirm = () => {
      hidePicker()
   }
   const hour = reminder.getHours()
   const formatedHour = hour > 12 ? hour - 12 : hour
   const minutes = reminder.getMinutes()
   const format = hour <= 11 ? 'AM' : 'PM'

   React.useEffect(() => {
      Notifications.getAllScheduledNotificationsAsync().then((currentNotification) => {
         const {
            content: { data },
         } = currentNotification[0]
         const { hour, minute, mode } = data.data as any
         const dateReminder = new Date()
         if (!isNaN(hour)) {
            dateReminder.setHours(hour as number)
            dateReminder.setMinutes(minute as number)
         }
         setReminder(dateReminder)
         setValue(mode)
      })
   }, [])

   return (
      <View>
         <ScrollView>
            <View style={tw.style('flex-1')}>
               <View
                  style={tw.style('flex', 'w-screen', 'mt-10', 'mx-4', 'rounded-lg', {
                     //Using Rgba here to apply opacity only on the background.
                     //Else using hash based color code would apply it to text and borders as well
                     backgroundColor: 'rgba(233,216,166,0.1)',
                  })}>
                  <View style={tw.style('flex', 'flex-row')}>
                     {/* <View style={tw.style('my-auto', 'mx-2')}>
                         <InsightIconSVG />
                      </View> */}
                     <View style={tw.style('flex-1', 'my-auto', 'mx-2', 'justify-start')}>
                        <Text
                           style={tw.style('text-base', 'text-lightYellow', {
                              fontFamily: 'Gilroy-Bold',
                           })}>
                           Daily Remember (beta)
                        </Text>
                     </View>
                     <View style={tw.style('py-4', 'pr-2', 'justify-end')}>
                        <SwitchToggle
                           switchOn={HomeNotificationon}
                           onPress={() => HomeNotificationoff(!HomeNotificationon)}
                           circleColorOff='#fff'
                           circleColorOn='#1C1C1C'
                           backgroundColorOn='#E9D8A6'
                           backgroundColorOff='black'
                           containerStyle={{
                              marginTop: 0,
                              width: 50,
                              height: 30,
                              borderRadius: 25,
                              padding: 5,
                           }}
                           circleStyle={{
                              width: 25,
                              height: 25,
                              borderRadius: 25,
                           }}
                        />
                     </View>
                  </View>
                  {HomeNotificationon && (
                     <View style={tw.style('rounded-lg', 'mt-3')}>
                        <View
                           style={tw.style('flex', 'flex-row', 'pb-3', {
                              flex: 1,
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              borderTopWidth: 1,
                              borderTopColor: '#1C1C1C',
                           })}>
                           <View
                              style={tw.style('pl-3', 'pt-3', {
                                 width: '50%',
                                 borderRightWidth: 1,
                                 borderRightColor: '#1C1C1C',
                              })}>
                              {options.map(({ label, value: optionValue }) => (
                                 <Pressable
                                    onPress={() => setValue(optionValue)}
                                    style={tw.style(
                                       'flex',
                                       'flex-row',
                                       'pt-2',
                                       'pb-2',
                                       value === optionValue && styles.active,
                                       {
                                          justifyContent: 'space-between',
                                          alignItems: 'center',
                                       }
                                    )}>
                                    <Text
                                       style={tw.style(
                                          'flex-1',
                                          'text-base',
                                          'ml-3',
                                          'text-lightYellow'
                                       )}>
                                       {label}
                                    </Text>
                                    {value === optionValue && (
                                       <Image
                                          style={tw.style(
                                             `${
                                                optionValue === 'every-three-days' ? 'mr-1' : 'mr-3'
                                             }`,
                                             {
                                                width: 20,
                                                height: 7,
                                             }
                                          )}
                                          source={Arrow}
                                       />
                                    )}
                                 </Pressable>
                              ))}
                           </View>
                           <View
                              style={tw.style('flex', 'flex-column', 'mr-3', 'mt-3', {
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 width: '50%',
                              })}>
                              <Pressable
                                 onPress={showPicker}
                                 style={tw.style('flex', 'flex-row', 'mr-3', 'mt-3', {
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '50%',
                                 })}>
                                 <View
                                    style={tw.style(
                                       'ml-2',
                                       'pt-3',
                                       'pb-3',
                                       'pl-1',
                                       'pr-1',
                                       'rounded-xl',
                                       {
                                          backgroundColor: '#938E80',
                                       }
                                    )}>
                                    <Text
                                       style={tw.style('w-7', {
                                          fontFamily: 'Gilroy-Bold',
                                          color: '#1C1C1C',
                                          fontSize: 18,
                                          textAlign: 'center',
                                       })}>
                                       {formatedHour}
                                    </Text>
                                 </View>
                                 <View
                                    style={tw.style(
                                       'ml-2',
                                       'pt-3',
                                       'pb-3',
                                       'pl-1',
                                       'pr-1',
                                       'rounded-xl',
                                       {
                                          backgroundColor: '#938E80',
                                       }
                                    )}>
                                    <Text
                                       style={tw.style('w-7', {
                                          fontFamily: 'Gilroy-Bold',
                                          color: '#1C1C1C',
                                          fontSize: 18,
                                          textAlign: 'center',
                                       })}>
                                       {minutes}
                                    </Text>
                                 </View>
                                 <View
                                    style={tw.style(
                                       'ml-2',
                                       'pt-3',
                                       'pb-3',
                                       'pl-1',
                                       'pr-1',
                                       'rounded-xl',
                                       {
                                          backgroundColor: '#938E80',
                                       }
                                    )}>
                                    <Text
                                       style={tw.style('w-7', {
                                          fontFamily: 'Gilroy-Bold',
                                          color: '#1C1C1C',
                                          fontSize: 18,
                                          textAlign: 'center',
                                       })}>
                                       {format}
                                    </Text>
                                 </View>
                              </Pressable>
                              <View style={tw.style('mt-4')}>
                                 <Pressable
                                    onPress={onScheduleReminder}
                                    style={tw.style('pt-2', 'pb-2', 'pl-5', 'pr-5', 'rounded-lg', {
                                       borderWidth: 1,
                                       borderColor: '#E9D8A6',
                                    })}>
                                    <Text style={tw.style('text-base', 'text-lightYellow')}>
                                       Save
                                    </Text>
                                 </Pressable>
                              </View>
                           </View>
                        </View>
                     </View>
                  )}

                  {showTime === true && Platform.OS === 'android' && (
                     <DateTimePicker
                        testID='dateTimePicker'
                        mode='time'
                        value={reminder}
                        is24Hour={false}
                        onChange={onChange}
                        display={'default'}
                        onCancel={hidePicker}
                        onConfirm={handleConfirm}
                     />
                  )}
                  {/* <Button onPress={() => setShowTime(true)} title='Show Time' /> */}
                  {Platform.OS === 'ios' && (
                     <Modal
                        visible={showTime}
                        transparent={true}
                        onDismiss={() => setShowTime(false)}>
                        <View
                           style={{
                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginTop: 22,
                           }}>
                           <View
                              style={tw.style('pb-3', {
                                 width: '90%',
                                 backgroundColor: 'white',
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 borderRadius: 20,
                              })}>
                              <DateTimePicker
                                 testID='dateTimePicker'
                                 mode='time'
                                 value={reminder}
                                 is24Hour={true}
                                 onChange={onChange}
                                 display={'spinner'}
                                 onCancel={hidePicker}
                                 onConfirm={handleConfirm}
                                 style={{
                                    width: '100%',
                                    borderRadius: 20,
                                    padding: 40,
                                 }}
                              />
                              <Pressable
                                 onPress={() => setShowTime(false)}
                                 style={tw.style('pt-2', 'pb-2', 'pl-5', 'pr-5', 'rounded-lg', {
                                    borderWidth: 1,
                                    borderColor: '#c1c1c1',
                                 })}>
                                 <Text style={tw.style('text-base', 'text-dark')}>OK</Text>
                              </Pressable>
                           </View>
                        </View>
                     </Modal>
                  )}
               </View>

               {/* <View
                   style={tw.style('flex-row', 'w-screen', 'mt-10', 'mx-4', 'h-18', 'rounded-lg', {
                      //Using Rgba here to apply opacity only on the background.
                      //Else using hash based color code would apply it to text and borders as well
                      backgroundColor: 'rgba(233,216,166,0.1)',
                   })}>
                   <View style={tw.style('my-auto', 'mx-2')}>
                      <InsightIconSVG />
                   </View>
                   <View style={tw.style('flex-1', 'my-auto', 'justify-start')}>
                      <Text
                         style={tw.style('text-base', 'text-lightYellow', {
                            fontFamily: 'Gilroy-Bold',
                         })}>
                         New Library Content Banner
                      </Text>
                   </View>
                   <View style={tw.style('py-4', 'pr-2', 'justify-end')}>
                      <SwitchToggle
                         switchOn={CommunityNotificationon}
                         onPress={() => CommunityNotificationoff(!CommunityNotificationon)}
                         circleColorOff='#fff'
                         circleColorOn='#1C1C1C'
                         backgroundColorOn='#E9D8A6'
                         backgroundColorOff='black'
                         containerStyle={{
                            marginTop: 0,
                            width: 50,
                            height: 30,
                            borderRadius: 25,
                            padding: 5,
                         }}
                         circleStyle={{
                            width: 25,
                            height: 25,
                            borderRadius: 25,
                         }}
                      />
                   </View>
                </View> */}
            </View>
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({
   active: {
      backgroundColor: 'rgba(28, 28, 28, 0.64)',
   },
})

export default NotificationDetail
