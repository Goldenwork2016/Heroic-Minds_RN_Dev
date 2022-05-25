import * as React from "react"
import { View } from "react-native"
import Svg, { SvgProps, G, Circle, Path, Defs } from "react-native-svg"


const CategoryDropdownSVG = (props: SvgProps) => (
    <Svg
        width={23}
        height={23}
        fill="none"
        viewBox="0 0 23 23"
        {...props}
    >
        <G>
            <Circle r={11.5} transform="matrix(0 1 1 0 11.5 11.5)" fill="#E9D8A6" />
        </G>
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.661 15.92c-1.199 0-5.034-6.08-4.344-6.769.69-.688 7.934-.756 8.689 0 .757.757-3.146 6.769-4.345 6.769Z"
            fill="#1C1C1C"
        />
        <Defs></Defs>
    </Svg>
)

export default CategoryDropdownSVG