import React from "react"
import { View, TouchableOpacity, ImageBackground, Text, Pressable } from "react-native"
import tw from "../lib/tailwind"
import AudioIconSVG from "./SVGs/AudioIconSVG"
import CommentIconSVG from "./SVGs/CommentIconSVG"
import NicelyDoneSVG from "./SVGs/NicelyDoneSvg"

const image = {
    uri: 'https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg',
}
interface Props {
    navigateToPostDetail?: () => any
    navigateToCommentScreen: () => any
    isDetailPage: Boolean
}

const SinglePostTopBody = (props: Props) => {
    return (
        <View>
            <TouchableOpacity onPress={() => props.navigateToPostDetail && !props.isDetailPage && props.navigateToPostDetail()}>
                <View style={tw.style(`flex-1 ${props.isDetailPage ? 'mt-7' : 'mt-4'} mb-3`)}>
                    <View style={tw.style('flex-row')}>
                        <Text
                            style={tw.style('text-base', 'leading-5', 'break-words', 'text-lightYellow', {
                                fontFamily: 'Gilroy-SemiBold',
                            })}>
                            {'Power of Friendship'}
                        </Text>
                    </View>

                    <View style={tw.style('flex-1 h-52')}>
                        <ImageBackground
                            source={image}
                            imageStyle={tw.style('rounded-xl', 'mt-1')}
                            style={tw.style({ height: undefined, width: undefined, flex: 1 })} >


                        </ImageBackground>
                    </View>

                </View>
            </TouchableOpacity>
            <View style={tw.style('flex-row items-center justify-between')}>
                <View style={tw.style('flex-row')}>

                    {/* //Hook onPress Event here */}
                    <Pressable onPress={null} style={tw.style('flex-row mr-10 items-center')}>
                        <NicelyDoneSVG />
                        <Text
                            style={tw.style('text-sm', 'ml-2', 'leading-5', 'break-words', 'text-lightYellow', {
                                fontFamily: 'Gilroy-Medium',
                            })}>
                            {'200'}
                        </Text>

                    </Pressable>

                    {/* //Hook onPress Event here for comments */}
                    <Pressable onPress={props.navigateToCommentScreen} style={tw.style('flex-row items-center')}>
                        <CommentIconSVG />
                        <Text
                            style={tw.style('text-sm', 'ml-2', 'leading-5', 'break-words', 'text-lightYellow', {
                                fontFamily: 'Gilroy-Medium',
                            })}>
                            {'22'}
                        </Text>
                    </Pressable>
                </View>


                {props.isDetailPage &&
                    <AudioIconSVG />
                }
            </View>
        </View>
    )
}

export default SinglePostTopBody