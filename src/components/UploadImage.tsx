import React, { useState } from "react";
import { View, Text, Pressable, Button, Image, TouchableOpacity, ImageBackground, Platform } from "react-native";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import tw from "../lib/tailwind";
import GoBack from "./GoBack";
import SingleWordHeader from "./SingleWordHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as ImagePicker from 'expo-image-picker';
import ImageFilters, { Constants } from 'react-native-gl-image-filters';

import { Modal } from "./ProfileModal";
import * as FileSystem from 'expo-file-system';
import ProfileModalHeader from "./ProfileModalHeader";


interface DefaultValues {
    sepia: number;
    hue: number;
    blur: number;
    sharpen: number;
    negative: number;
    temperature: number;
    brightness: number;
    contrast: number;
    saturation: number;
    exposure: number;
    colorOverlay: Array<number>;
}

interface Props {
    navigation: any
    CloseUploadImageModal: () => any
    selectedImageUri: null | string
    setImageUri: Function
}


const UploadImage = (props: Props) => {

    const goBack = () => {
        props.CloseUploadImageModal();
    }

    const goToImageFilters = () => {
        props.navigation.navigate('ImageFilter');
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        });

        if (!result.cancelled) {
            props.setImageUri(result.uri);
        }
    };


    return (
        <View >
            <Modal isVisible={true}>
                <Modal.Container>
                    <Modal.Body>
                        <View style={tw.style(`mb-5 mt-2`)}>
                            <ProfileModalHeader goBack={goBack} />
                            <View style={tw.style("flex-row", "mt-10", "ml-5", "mr-5 ")}>

                                <View style={tw.style("flex-1", "mr-5")}>
                                    <Text style={tw.style("text-sm", "text-center", { fontFamily: "Gilroy-SemiBold" })}>
                                        {'Upload image or video'}</Text>
                                </View>
                            </View>
                            {!props.selectedImageUri && <Pressable style={tw`m-5 rounded-md `} onPress={pickImage}>
                                <Ionicons
                                    style={tw.style("px-2", "text-center", "items-center", "my-10")}
                                    name="images-outline"
                                    size={50}
                                    color="black"
                                />
                            </Pressable>}

                            {props.selectedImageUri && <View style={tw.style('w-52 h-52 mx-auto mt-5 ')}>
                                <Pressable >

                                    <View >
                                        <Image source={{ uri: props.selectedImageUri! }}
                                            style={tw.style('w-52 h-52', {


                                            })}
                                        />
                                    </View>

                                </Pressable>
                            </View>}

                            <TouchableOpacity onPress={goBack}
                                disabled={!props.selectedImageUri}
                                style={tw.style(
                                    "m-5",
                                    "rounded-xl",
                                    "bg-darkGrey",
                                    "flex",
                                    "justify-center",
                                    "items-center",
                                    "mx-auto"
                                )}
                            >
                                <Text
                                    style={tw.style("text-sm", "text-center", "text-lightYellow", "p-2", {
                                        fontFamily: "Gilroy-Medium",
                                    })}
                                >
                                    {"Continue"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Modal.Body>
                </Modal.Container>
            </Modal>
        </View >

    );

}
export default UploadImage;