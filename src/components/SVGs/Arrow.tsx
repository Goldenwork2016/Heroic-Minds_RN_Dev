import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
   return (
      <Svg width={21} height={8} viewBox='0 0 21 8' fill='none' {...props}>
         <Path
            d='M20.354 4.354a.5.5 0 000-.708L17.172.464a.5.5 0 10-.707.708L19.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h20v-1H0v1z'
            fill='#E9D8A6'
         />
      </Svg>
   )
}

export default SvgComponent
