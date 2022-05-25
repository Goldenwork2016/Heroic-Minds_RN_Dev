import React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"


const LessThanIconSVG = (props: SvgProps) => {
    return (
        <Svg
            width={14}
            height={15}
            fill="none"
            {...props}
        >
            <Path
                d="m2.607 7.742 10.416-4.057V.887L.513 6.424v1.714l2.094-.396Zm10.416 3.574L2.578 7.171.513 6.863v1.7l12.51 5.551v-2.798Z"
                fill="#E9D8A6"
            />
        </Svg>
    )
}

export default LessThanIconSVG