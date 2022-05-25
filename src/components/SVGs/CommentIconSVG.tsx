import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"


const CommentIconSVG = (props: SvgProps) => {
    return (
        <Svg
            width={20}
            height={20}
            fill="none"
            {...props}
            viewBox='0 0 20 20'
        >
            <Path
                d="M1.582 14.4h0l-.001-.003a9.486 9.486 0 0 1 .306-9.336A9.52 9.52 0 0 1 10.054.5a9.516 9.516 0 0 1 8.845 6.178 9.489 9.489 0 0 1-2.63 10.453 9.53 9.53 0 0 1-10.808 1.226l-.116-.066-.112-.066a9.965 9.965 0 0 0-.586-.317 1.98 1.98 0 0 0-1.313-.065c-.69.248-1.395.453-2.11.614a.823.823 0 0 1-.005-.06 19.303 19.303 0 0 1 .692-2.23 1.803 1.803 0 0 0-.13-1.38l-.199-.388Z"
                stroke="#E9D8A6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default CommentIconSVG;