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
    const [selectedImageUri, setImageUri] = useState<null | string>(null)
    const [isAudioRecorded, updateAudioRecordingState] = useState(false)
    const [recordedAudioParentUri, setRecordedAudioParentUri] = useState(null)

    const gotoCreatePost = () => {
        onModalChange(true)
    }

    const closeCreatePostModal = () => {
        onModalChange(false)
    }

    const gotoUploadImageModal = () => {
        onModalChange(false)
        onImageModalChange(true)
        onmainscreenChange(true)
        onUploadAudiomodalChange(false)
    }

    const CloseUploadImageModal = () => {
        onmainscreenChange(true)
        onImageModalChange(false)
    }

    const gotoUploadAudioModal = () => {
        onModalChange(false)
        onmainscreenChange(true)
        onUploadAudiomodalChange(true)
        onImageModalChange(false)
    }

    const CloseUploadAudioModal = () => {
        onmainscreenChange(true)
        onUploadAudiomodalChange(false)
    }

    return (
        <View style={tw.style('flex-1')}>
            {mainscreen && <>
                <SingleWordHeader navigation={props.navigation} headerName={'Profile'} />
                <ScrollView >
                    <ProfileDetail navigation={props.navigation} />
                    <ProfileContent
                        navigation={props.navigation}
                        openAudioModal={gotoUploadAudioModal}
                        openImageModal={gotoUploadImageModal}
                        showEditIcon={true}
                        selectedImageUri={selectedImageUri}
                        setImageUri={setImageUri}
                        isAudioRecorded={isAudioRecorded}
                        updateAudioRecordingState={updateAudioRecordingState}
                        recordedAudioParentUri={recordedAudioParentUri}


                    />
                </ScrollView>
                <CreatePostModal openModal={modalOpen} closeCreatePostModal={closeCreatePostModal} gotoAudio={gotoUploadAudioModal} gotoUploadImageModal={gotoUploadImageModal} />
            </>}
            {/* <PlayAudio /> */}
            {UploadAudiomodalOpen && <UploadAudio
                CloseUploadAudioModal={CloseUploadAudioModal}
                navigation={props.navigation}
                isAudioRecorded={isAudioRecorded}
                updateAudioRecordingState={updateAudioRecordingState}
                setRecordedAudioParentUri={setRecordedAudioParentUri}
            />}
            {/* <EditPostModal /> */}
            {ImagemodalOpen && <UploadImage
                CloseUploadImageModal={CloseUploadImageModal}
                navigation={props.navigation}
                setImageUri={setImageUri}
                selectedImageUri={selectedImageUri}
            />}

        </View>



    );

}

export default ProfileScreen;