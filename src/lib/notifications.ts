import * as Notifications from 'expo-notifications'
import { Alert, Platform } from 'react-native'
export const registerForPushNotificationsAsync = async () => {
   let token
   const { status: existingStatus } = await Notifications.getPermissionsAsync()
   let finalStatus = existingStatus
   if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
   }
   if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!')
      return
   }
   token = (await Notifications.getExpoPushTokenAsync()).data

   if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
         name: 'default',
         importance: Notifications.AndroidImportance.MAX,
         vibrationPattern: [0, 250, 250, 250],
         sound: null,
         lightColor: '#FF231F7C',
         lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
         bypassDnd: true,
      })
   }

   return token
}

export const scheduleNotification = async (schedule: any, mode: string, scheduleData: any) => {
   const id = await Notifications.scheduleNotificationAsync({
      content: {
         title: 'Reminder! 📬',
         body: 'Heroic Minds reminder',
         data: { data: { ...scheduleData, mode } },
      },
      trigger: {
         repeats: true,
         ...schedule,
      },
   })
   Alert.alert('Reminder has been successfully scheduled.')
   return id
}
