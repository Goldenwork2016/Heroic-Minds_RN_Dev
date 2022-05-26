import * as React from "react"
import Svg, { SvgProps, Rect, G, Circle, Path, Defs } from "react-native-svg"

const SelectedAudioIconSVG = (props: SvgProps) => (
    <Svg
        width={75}
        height={62}
        fill="none"
        {...props}
    >
        <Rect y={5} width={71} height={57} rx={10} fill="#E9D8A6" />
        <Path
            d="M23.775 36.531c0 6.031 4.803 10.92 10.73 10.92 5.924 0 10.726-4.889 10.726-10.92M45.225 30.261V25.92c0-6.031-4.802-10.92-10.727-10.92-5.926 0-10.728 4.889-10.728 10.92v4.341M34.503 51.597v-4.145M21 36.531h27M31.531 29.676h5.946M35.5 24.06h-1.998"
            stroke="#1C1C1C"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Defs></Defs>
    </Svg>
)

export default SelectedAudioIconSVG
