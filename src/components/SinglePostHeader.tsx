import * as React from 'react'
import { Pressable, View, Text, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import tw from '../lib/tailwind'

interface PostHeaderProps {
    navigateToPostDetail?: () => any
    showEditIcon: Boolean
    showEditPopup: Boolean
    isDetailPage: Boolean
    goToEditPost: () => any
    goToDeletePost: () => any
    openOptionPopup: () => any

}

const SinglePostHeader = (props: PostHeaderProps) => {
    const { showEditIcon, showEditPopup, isDetailPage, goToDeletePost, goToEditPost, openOptionPopup } = props
    const image = {
        uri: 'https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg',
    }
    return (
        <View style={tw.style('flex-row', 'justify-start')}>
            <Pressable
                style={tw.style('w-12', 'h-12', 'mt-1')}
                onPress={() => props.navigateToPostDetail && !isDetailPage && props.navigateToPostDetail()}>
                <ImageBackground
                    source={image}
                    imageStyle={tw.style('rounded-full')}
                    style={tw.style({ width: undefined, height: undefined, flex: 1 })}
                />
            </Pressable>
            <View style={tw.style('flex-1', 'mr-0', 'px-2')}>
                <View style={tw.style('flex-row justify-between')}>
                    <Pressable
                        style={tw.style('flex-row')}
                        onPress={() => props.navigateToPostDetail && !isDetailPage && props.navigateToPostDetail()}>
                        <Text
                            style={tw.style('text-base', 'leading-9', 'break-words', '-mb-1', 'text-lightYellow', {
                                fontFamily: 'Gilroy-Bold',
                            })}>
                            {'Ben Fanelli'}
                        </Text>
                    </Pressable>
                    <View
                        style={tw.style(
                            'ml-2',
                            'border',
                            'self-end',
                            'mt-2',
                            'px-3',
                            'rounded-xl',
                            'border-lightYellow',
                        )}>
                        <Text style={tw.style('text-lightYellow', 'text-sm')}>{'Love'}</Text>
                    </View>
                </View>

                <View>
                    <Text
                        style={tw.style('text-sm', 'leading-1', 'break-words', 'text-lightYellow', {
                            fontFamily: 'Gilroy-Medium',
                        })}>
                        {'2 hours ago'}
                    </Text>
                </View>
            </View>
            {showEditIcon && (
                <View style={tw.style('self-start mt-3')}>
                    <Ionicons
                        style={tw.style('flex-bottom')}
                        name='ellipsis-vertical'
                        size={18}
                        color='#E9D8A6'
                        onPress={openOptionPopup}
                    />
                </View>
            )}
            {showEditPopup && (
                <View
                    style={tw.style('bg-lightYellow', 'w-25', 'mt-7', 'h-14', 'px-1', {
                        position: 'absolute',
                        right: 13,
                        top: 3,
                    })}>

                    <Text
                        onPress={goToEditPost}
                        style={tw.style('py-1  text-base text-darkGrey', { fontFamily: 'Gilroy-Medium' })}>
                        Edit Post
                    </Text>
                    <Text onPress={goToDeletePost} style={tw.style('py-1 text-base text-darkGrey', { fontFamily: 'Gilroy-Medium' })}>
                        Delete Post
                    </Text>
                </View>
            )}
        </View>
    )

}
export default SinglePostHeader;
