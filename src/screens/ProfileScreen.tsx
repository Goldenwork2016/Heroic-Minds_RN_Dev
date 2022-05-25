import React, { useState, useEffect, useContext, Component } from "react";
import { ScrollView, Text, SafeAreaView, View } from "react-native";
import tw from "../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
// import { Container,Button } from 'native-base';
import CommunityHeader from "../components/CommunityHeader";
import CommunityPostScreen from "../components/CommunityPosts";
import ProfileDetail from "../components/ProfileDetail";
import ProfileHeader from "../components/ProfileHeader";
import CreatePostModal from "../components/CreatePost";
import PlayAudio from "../components/PlayAudio";
import UploadAudio from "../components/UploadAudio";
import EditPostModal from "../components/EditPost";
import UploadImage from "../components/UploadImage";
import SingleWordHeader from "../components/SingleWordHeader";
import ProfileContent from "../components/ProfileContent";

const ProfileScreen = (props: any) => {
    const [mainscreen, onmainscreenChange] = useState(true);
    const [modalOpen, onModalChange] = useState(false);
    const [ImagemodalOpen, onImageModalChange] = useState(false);
    const [UploadAudiomodalOpen, onUploadAudiomodalChange] = useState(false);

    const gotoCreatePost = () => {
        onModalChange(true)
    }

    const closeCreatePostModal = () => {
        onModalChange(false)
    }

    const gotoUploadImageModal = () => {
        onModalChange(false)
        onImageModalChange(true)
        onmainscreenChange(false)
        onUploadAudiomodalChange(false)
    }

    const CloseUploadImageModal = () => {
        onModalChange(true)
        onmainscreenChange(true)
        onImageModalChange(false)
    }

    const gotoUploadAudioModal = () => {
        console.log('PROFILE SCREEN')
        onModalChange(false)
        onmainscreenChange(false)
        onUploadAudiomodalChange(true)
        onImageModalChange(false)
    }

    const CloseUploadAudioModal = () => {
        onModalChange(true)
        onmainscreenChange(true)
        onUploadAudiomodalChange(false)
    }

    return (
        <View style={tw.style('flex-1')}>
            {mainscreen && <>
                <SingleWordHeader navigation={props.navigation} headerName={'Profile'} />
                <ScrollView >
                    <ProfileDetail navigation={props.navigation} />
                    <ProfileContent navigation={props.navigation} showEditicon={true} />
                </ScrollView>
                <CreatePostModal openModal={modalOpen} closeCreatePostModal={closeCreatePostModal} gotoAudio={gotoUploadAudioModal} gotoUploadImageModal={gotoUploadImageModal} />
            </>}
            {/* <PlayAudio /> */}
            {UploadAudiomodalOpen && <UploadAudio CloseUploadAudioModal={CloseUploadAudioModal} navigation={props.navigation} />}
            {/* <EditPostModal /> */}
            {ImagemodalOpen && <UploadImage CloseUploadImageModal={CloseUploadImageModal} navigation={props.navigation} />}

        </View>



    );

}

export default ProfileScreen;