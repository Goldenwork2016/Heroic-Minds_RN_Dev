import * as React from "react"
import { View } from "react-native"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"


const AudioIconSVG = (props: SvgProps) => (
    <Svg
        width={18}
        height={24}
        fill="none"
        viewBox="0 0 18 24"
        {...props}
    >
        <Path
            d="M2.645 13.76c0 3.573 2.845 6.47 6.357 6.47 3.511 0 6.357-2.897 6.357-6.47M15.355 10.044V7.47C15.355 3.897 12.51 1 8.998 1S2.641 3.897 2.641 7.47v2.574M9.002 22.687v-2.456M1 13.76h16M7.238 9.697h3.523M9.59 6.37H8.406"
            stroke="#E9D8A6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default AudioIconSVG