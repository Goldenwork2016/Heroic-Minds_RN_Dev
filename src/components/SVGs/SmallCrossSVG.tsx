import * as React from "react"
import Svg, { SvgProps, G, Circle, Path, Defs } from "react-native-svg"

const SmallCrossIconSVG = (props: SvgProps) => (
    <Svg
        width={21}
        height={21}
        fill="none"
        {...props}
    >
        <G >
            <Circle cx={10.5} cy={6.5} r={6.5} fill="#E9D8A6" />
            <Path
                d="M12.9 9h-.79l-1.56-2.06L8.99 9H8.2l1.96-2.59L8.33 4h.79l1.43 1.89L11.98 4h.79l-1.82 2.41L12.9 9Z"
                fill="#000"
            />
        </G>
        <Defs></Defs>
    </Svg>
)

export default SmallCrossIconSVG
