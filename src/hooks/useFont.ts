import * as Font from 'expo-font'

const useFonts = async () => {
   await Font.loadAsync({
      'Gilroy-Regular': require('../../assets/fonts/Gilroy-Regular.ttf'),
      'Gilroy-Medium': require('../../assets/fonts/Gilroy-Medium.ttf'),
      'Gilroy-Bold': require('../../assets/fonts/Gilroy-Bold.ttf'),
      'Gilroy-SemiBold': require('../../assets/fonts/Gilroy-SemiBold.ttf'),
   })
}

export default useFonts
