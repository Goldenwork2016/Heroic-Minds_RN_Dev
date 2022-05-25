import React, { useState } from 'react'
import { View, Text, ScrollView, ImageBackground, Pressable, TouchableOpacity } from 'react-native'
import tw from "../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
import PostMusicPlayerBar from "../components/PostMusicBar"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import PostHeader from '../components/SinglePostHeader';
import SinglePostTopBody from '../components/SinglePostTopBody';
import GoBack from '../components/GoBack';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

type PostDetailScreenNavigationProps = {

    CommentScreen: any

};

const PostDetailScreen = (props: any, {
    navigation,
}: NativeStackScreenProps<PostDetailScreenNavigationProps>) => {
    const [play, setPlay] = useState(true);
    const [showEditPopup, onshowEditPopupChange] = useState(false)
    const [showEditIcon, showEditIconChange] = useState(true)

    const goBack = () => {
        console.log('POSTDETAIL')
        props.navigation.goBack();
    }

    const profileScreen = () => {
        console.log('Profile Screen');
        props.navigation.navigate('ProfileScreen');
    }

    const navigateToCommentScreen = () => {
        console.log('Comment screen')
        props.navigation.navigate('CommentScreen');
    }

    const openOptionPopup = () => {
        onshowEditPopupChange(true)
    }

    const goToEditPost = () => {
        onshowEditPopupChange(false)
        props.navigation.navigate('EditPost')
    }

    const goToDeletePost = () => {
        onshowEditPopupChange(false)
        props.navigation.navigate('DeletePost')
    }


    const image = { uri: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg" };
    return (
        <ScrollView >
            <View style={tw.style("flex-1", "mt-10", "mx-2 mb-2")}>
                <GoBack navigation={props.navigation} route={props.route} />


                <PostHeader
                    openOptionPopup={openOptionPopup}
                    showEditIcon={showEditIcon}
                    showEditPopup={showEditPopup}
                    goToEditPost={goToEditPost}
                    goToDeletePost={goToDeletePost}
                    isDetailPage={true}
                />
                <SinglePostTopBody
                    navigateToCommentScreen={navigateToCommentScreen}
                    isDetailPage={true}
                />

                <View style={tw.style('mt-8')}>
                    <Text style={tw.style('text-base text-lightYellow leading-6', { fontFamily: 'Gilroy-Medium' })}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        Why do we use it?
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                    </Text>
                </View>

            </View>
        </ScrollView>


    )
}

export default PostDetailScreen;