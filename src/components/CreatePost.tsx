import React, { useState, useEffect } from "react";
import { View, Text, Pressable, ImageBackground, TextInput, Button, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Modal } from "./ProfileModal";
import tw from "../lib/tailwind";
import { Dropdown } from 'react-native-element-dropdown';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type CreatePostScreenNavigationProps = {
    UploadImage: any,
    ProfileScreen: any,
    PlayAudio: any
};

const CreatePostModal = (props: any, {
    navigation,
}: NativeStackScreenProps<CreatePostScreenNavigationProps>) => {
    const data = [
        { label: 'Psychology', value: '1' },
        { label: 'Podcast', value: '2' },
        { label: 'Leadership', value: '3' },
        { label: 'Philosphy', value: '4' },

    ];

    const goTo = () => {
        props.gotoUploadImageModal();
    }

    const goToAudioScreen = () => {
        console.log(props, 'TEST AUDIO PAGE');
        props.gotoAudio();
    }

    const goBack = () => {
        props.closeCreatePostModal();

    }
    
    const [title, ontitleChange] = useState(false);
    const [topic, ontopicChange] = useState("");
    const [dropdownValue,setDropwDownValue] = useState('');

    return (
        <View style={tw.style("justify-self-center")}>
            <Modal isVisible={props.openModal}>
                <View style={tw.style("mb-2", "w-7", "h-7", "self-end",)}>
                    <Entypo onPress={goBack}
                        style={tw.style("text-center", "mt-1")}
                        name="circle-with-cross"
                        size={20}
                        color="white"
                    />
                </View>
                <Modal.Container>
                    <Modal.Header title={'Create a post'} />
                    <Modal.Body>
                        <ScrollView style={{}}>
                            <Text style={tw.style("text-md", "mt-4", "text-gray-400")}>{'Title'}</Text>
                            <TextInput
                                placeholder="Type title here..."
                                style={tw.style("border-2", "border-gray-200", "mt-2", "px-2", "py-2", "rounded-lg", "bg-gray-100",)}
                            />
                            <Text style={tw.style("text-md", "mt-4", "text-gray-400")}>{'Topic'}</Text>
                            <Dropdown
                                renderRightIcon={() =>
                                    <Ionicons
                                        style={tw.style("px-2", "text-center", "mt-1")}
                                        name="caret-down-circle"
                                        size={28}
                                        color="black"
                                    />
                                }
                                style={tw.style("bg-gray-100", "rounded-lg", "mt-2",)}
                                data={data}
                                placeholder="Select a category"
                                labelField="label"
                                valueField="value"
                                maxHeight={200}
                                value={dropdownValue}
                                containerStyle={tw.style("bg-gray-100", "px-0", "py-0",)}
                                placeholderStyle={tw.style("text-gray-400", "ml-3", "text-sm")}
                                selectedTextStyle={tw.style('text-black' ,"ml-3")}
                                onChange={item => {
                                   setDropwDownValue(item.value);
                                }}
                            />
                            <Text style={tw.style("mt-4", "text-gray-400")}>{'Text'}</Text>
                            <TextInput
                                placeholder="Add some text here..."
                                style={tw.style("border-2", "border-gray-200", "mt-2", "rounded-lg", "bg-gray-100","px-2","py-2", { textAlignVertical: "top", height: 100 })}
                            />
                            <View style={tw.style("flex-row", "px-2", "py-4", "justify-between",)}>
                                <View style={tw.style("bg-gray-100", "w-36", "rounded-lg")}>
                                    <Ionicons onPress={goTo}
                                        style={tw.style("px-2", "text-center", "mt-4")}
                                        name="md-image-outline"
                                        size={30}
                                        color="black"
                                    />
                                    <Text onPress={goTo} style={tw.style("px-2", "py-4", "text-center")}>{'Click to upload image or video'}</Text>
                                </View>
                                <View style={tw.style("bg-gray-100", "ml-3", "w-36", "rounded-lg")}>
                                    <MaterialCommunityIcons onPress={goToAudioScreen}
                                        style={tw.style("px-2", "text-center", "mt-4")}
                                        name="microphone"
                                        size={35}
                                        color="black"
                                    />
                                    <Text onPress={goToAudioScreen} style={tw.style("px-2", "py-4", "text-center")}>{'Record or upload Audio'}</Text>
                                </View>

                            </View>

                        </ScrollView>
            
                        <TouchableOpacity onPress={goBack}
                    style={tw.style(
                        "m-5",
                        "rounded-xl",
                        "border-2",
                        "border-black",
                        "bg-black",
                        "flex",
                        "justify-center",
                        "items-center"
                    )}
                >
                    <Text
                        style={tw.style("text-xl", "text-center", "text-white", "p-4", {
                            fontFamily: "Gilroy-Medium",
                        })}
                    >
                        {"Post"}
                    </Text>
                </TouchableOpacity>
                    </Modal.Body>
                </Modal.Container>
            </Modal>
        </View>
    )
}

export default CreatePostModal;