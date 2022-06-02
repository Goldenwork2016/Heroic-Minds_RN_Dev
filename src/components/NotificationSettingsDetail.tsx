import * as React from "react";
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

import tw from '../lib/tailwind'
import { signOut } from '../hooks/useAuth'
import { AuthContext } from '../context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import SwitchToggle from 'react-native-switch-toggle'
import InsightIconSVG from './SVGs/InsightIconSVG'

import DateTimePicker from '@react-native-community/datetimepicker'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Arrow from '../../assets/arrow.png'
import { set } from 'react-native-reanimated'

type NotificationScreenNavigationProps = {}

const NotificationDetail = ({
   navigation,
}: NativeStackScreenProps<NotificationScreenNavigationProps>) => {
   const image = {
      uri: 'https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg',
   }
   const [isSelected, setSelected] = React.useState(false)
   const [HomeNotificationon, HomeNotificationoff] = React.useState(false)
   const [CommunityNotificationon, CommunityNotificationoff] = React.useState(false)

   const [value, setValue] = React.useState('one')
   const [reminder, setReminder] = React.useState<any>(new Date(Date.now()))
   const [showTime, setShowTime] = React.useState(false)
   const [visible, setVisible] = React.useState(false)

   const onChange = (e: React.SyntheticEvent, selectedDate: any) => {
      const newDate = selectedDate || reminder
      if (Platform.OS === 'android') {
         setShowTime(false)
      }
      setReminder(newDate)
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
                              <Pressable
                                 onPress={() => setValue('one')}
                                 style={tw.style(
                                    'flex',
                                    'flex-row',
                                    'pt-2',
                                    'pb-2',
                                    value === 'one' && styles.active,
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
                                    Every Day
                                 </Text>
                                 {value === 'one' && (
                                    <Image
                                       style={tw.style('mr-3', {
                                          width: 20,
                                          height: 7,
                                       })}
                                       source={Arrow}
                                    />
                                 )}
                              </Pressable>
                              <Pressable
                                 onPress={() => setValue('two')}
                                 style={tw.style(
                                    'flex',
                                    'flex-row',
                                    'pt-2',
                                    'pb-2',
                                    value === 'two' && styles.active,
                                    {
                                       justifyContent: 'space-between',
                                       alignItems: 'center',
                                    }
                                 )}>
                                 <Text style={tw.style('text-base', 'ml-3', 'text-lightYellow')}>
                                    Every Other Day
                                 </Text>
                                 {value === 'two' && (
                                    <Image
                                       style={tw.style('mr-3', {
                                          width: 20,
                                          height: 7,
                                       })}
                                       source={Arrow}
                                    />
                                 )}
                              </Pressable>
                              <Pressable
                                 onPress={() => setValue('three')}
                                 style={tw.style(
                                    'flex',
                                    'flex-row',
                                    'pt-2',
                                    'pb-2',
                                    value === 'three' && styles.active,
                                    {
                                       justifyContent: 'space-between',
                                       alignItems: 'center',
                                    }
                                 )}>
                                 <Text style={tw.style('text-base', 'ml-3', 'text-lightYellow')}>
                                    Every Three Days
                                 </Text>
                                 {value === 'three' && (
                                    <Image
                                       style={tw.style('mr-3', {
                                          width: 20,
                                          height: 7,
                                       })}
                                       source={Arrow}
                                    />
                                 )}
                              </Pressable>
                              <Pressable
                                 onPress={() => setValue('four')}
                                 style={tw.style(
                                    'flex',
                                    'flex-row',
                                    'pt-2',
                                    'pb-2',
                                    value === 'four' && styles.active,
                                    {
                                       justifyContent: 'space-between',
                                       alignItems: 'center',
                                    }
                                 )}>
                                 <Text style={tw.style('text-base', 'ml-3', 'text-lightYellow')}>
                                    Sundays
                                 </Text>
                                 {value === 'four' && (
                                    <Image
                                       style={tw.style('mr-3', {
                                          width: 20,
                                          height: 7,
                                       })}
                                       source={Arrow}
                                    />
                                 )}
                              </Pressable>
                              <Pressable
                                 onPress={() => setValue('five')}
                                 style={tw.style(
                                    'flex',
                                    'flex-row',
                                    'pt-2',
                                    'pb-2',
                                    value === 'five' && styles.active,
                                    {
                                       justifyContent: 'space-between',
                                       alignItems: 'center',
                                    }
                                 )}>
                                 <Text style={tw.style('text-base', 'ml-3', 'text-lightYellow')}>
                                    Mondays
                                 </Text>
                                 {value === 'five' && (
                                    <Image
                                       style={tw.style('mr-3', {
                                          width: 20,
                                          height: 7,
                                       })}
                                       source={Arrow}
                                    />
                                 )}
                              </Pressable>
                           </View>
                           <View
                              style={tw.style('flex', 'flex-column', 'mr-3', 'mt-3', {
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 width: '50%',
                              })}>
                              {value === 'one' ? (
                                 <>
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
                                          onPress={() => null}
                                          style={tw.style(
                                             'pt-2',
                                             'pb-2',
                                             'pl-5',
                                             'pr-5',
                                             'rounded-lg',
                                             {
                                                borderWidth: 1,
                                                borderColor: '#E9D8A6',
                                             }
                                          )}>
                                          <Text style={tw.style('text-base', 'text-lightYellow')}>
                                             Save
                                          </Text>
                                       </Pressable>
                                    </View>
                                 </>
                              ) : value === 'two' ? (
                                 <>
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
                                          onPress={() => null}
                                          style={tw.style(
                                             'pt-2',
                                             'pb-2',
                                             'pl-5',
                                             'pr-5',
                                             'rounded-lg',
                                             {
                                                borderWidth: 1,
                                                borderColor: '#E9D8A6',
                                             }
                                          )}>
                                          <Text style={tw.style('text-base', 'text-lightYellow')}>
                                             Save
                                          </Text>
                                       </Pressable>
                                    </View>
                                 </>
                              ) : value === 'three' ? (
                                 <>
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
                                          onPress={() => null}
                                          style={tw.style(
                                             'pt-2',
                                             'pb-2',
                                             'pl-5',
                                             'pr-5',
                                             'rounded-lg',
                                             {
                                                borderWidth: 1,
                                                borderColor: '#E9D8A6',
                                             }
                                          )}>
                                          <Text style={tw.style('text-base', 'text-lightYellow')}>
                                             Save
                                          </Text>
                                       </Pressable>
                                    </View>
                                 </>
                              ) : value === 'four' ? (
                                 <>
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
                                          onPress={() => null}
                                          style={tw.style(
                                             'pt-2',
                                             'pb-2',
                                             'pl-5',
                                             'pr-5',
                                             'rounded-lg',
                                             {
                                                borderWidth: 1,
                                                borderColor: '#E9D8A6',
                                             }
                                          )}>
                                          <Text style={tw.style('text-base', 'text-lightYellow')}>
                                             Save
                                          </Text>
                                       </Pressable>
                                    </View>
                                 </>
                              ) : value === 'five' ? (
                                 <>
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
                                          onPress={() => null}
                                          style={tw.style(
                                             'pt-2',
                                             'pb-2',
                                             'pl-5',
                                             'pr-5',
                                             'rounded-lg',
                                             {
                                                borderWidth: 1,
                                                borderColor: '#E9D8A6',
                                             }
                                          )}>
                                          <Text style={tw.style('text-base', 'text-lightYellow')}>
                                             Save
                                          </Text>
                                       </Pressable>
                                    </View>
                                 </>
                              ) : null}
                           </View>
                        </View>
                     </View>
                  )}

                  {showTime === true && (
                     <DateTimePicker
                        testID='dateTimePicker'
                        mode='time'
                        value={reminder}
                        is24Hour={true}
                        onChange={onChange}
                        display={Platform.OS === 'ios' ? 'default' : 'default'}
                        onCancel={hidePicker}
                        onConfirm={handleConfirm}
                     />
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

export default NotificationDetail;
