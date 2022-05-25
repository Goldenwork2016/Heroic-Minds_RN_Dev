import React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"


const GreaterThanIconSVG = (props: SvgProps) => {
    return (
        <Svg
            width={14}
            height={15}
            fill="none"
            {...props}
        >
            <Path
                d="M11.393 7.742.978 3.685V.887l12.51 5.537v1.714l-2.095-.396ZM.978 11.316l10.444-4.145 2.065-.308v1.7L.977 14.114v-2.798Z"
                fill="#E9D8A6"
            />
        </Svg>
    )
}

export default GreaterThanIconSVG