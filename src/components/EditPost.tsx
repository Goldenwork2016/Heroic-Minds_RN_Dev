import React, { useState, useEffect } from "react";
import { View, Text, Pressable, ImageBackground, TextInput, Button, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Modal } from "./ProfileModal";
import tw from "../lib/tailwind";
import { Dropdown } from 'react-native-element-dropdown';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type EditPostScreenNavigationProps = {
    ProfileScreen:any
};

const EditPostModal = ({
    navigation,
}: NativeStackScreenProps<EditPostScreenNavigationProps>) => {
    const data = [
        { label: 'Psychogy', value: '1' },
        { label: 'Podcast', value: '2' },
        { label: 'Leadership', value: '3' },
        { label: 'Philosphy', value: '3' },

    ];

    const goBack = () => {
        navigation.navigate('ProfileScreen');
    }

    const [title, ontitleChange] = useState("My Life");
    const [topic, ontopicChange] = useState("Psychology");
    const [text, ontextChange] = useState("Feeling blessed, as always....");
    // const [password, setPassword] = useState("");

    const image = { uri: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg" };
    return (
        <View>
            <Modal isVisible={true}>
            <View style={tw.style("mb-2","w-7", "h-7", "self-end",)}>
                                <Entypo onPress={goBack}
                                        style={tw.style("text-center","mt-1" )}
                                        name="circle-with-cross"
                                        size={20}
                                        color="white"
                                    />
                                    </View>
                <Modal.Container>
                    <Modal.Header title={'Edit post'} />
                    <Modal.Body>
                        <ScrollView style={{}}>
                            <Text style={tw.style("mt-4", "text-gray-400")}>{'Title'}</Text>
                            <TextInput
                           onChangeText={text => ontitleChange(text)}
                                placeholder="Type title here..."
                                style={tw.style("border-2", "border-gray-200", "mt-2", "px-2", "py-2", "rounded-lg", "bg-gray-100")}
                            />
                            <Text style={tw.style("mt-4", "text-gray-400")}>{'Category'}</Text>
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
                                containerStyle={tw.style("bg-gray-100", "px-0", "py-0",)}
                                placeholderStyle={tw.style("text-gray-400", "ml-3")}
                                selectedTextStyle={tw.style("", "ml-3")}
                                onChange={item => {
                                    ontopicChange(item.lable)

                                }}
                            />
                            <Text style={tw.style("mt-4", "text-gray-400")}>{'Text'}</Text>
                            <TextInput
                            onChangeText={ontextChange}
                                placeholder="Add some text here..."
                                style={tw.style("border-2", "border-gray-200", "mt-2", "px-2", "py-2", "rounded-lg", "bg-gray-100", { textAlignVertical: "top", height: 100 })}
                            />
                            <Text style={tw.style("mt-4", "text-gray-400")}>{'Media'}</Text>
                            <View style={tw.style("flex-row", "px-2", "py-4", "justify-between","h-40")}>
                                <View style={tw.style("bg-gray-100", "w-33", "rounded-lg")}>
                                    <ImageBackground 
                                    source={image}
                                    imageStyle={tw.style("rounded-md",)}
                                    style={tw.style({ width: "100%", height: "100%" })}

                                />
                                <View style={tw.style("bg-black","rounded-full", "mb-2","w-7", "h-7",{position:'absolute', right:-6, top:-10,})}>
                                <MaterialCommunityIcons
                                        style={tw.style("px-2", "text-center", "mt-1", )}
                                        name="pencil"
                                        size={15}
                                        color="white"
                                    />
                                    </View>
                                </View>
                                <View style={tw.style("bg-gray-100", "ml-2", "w-33", "rounded-lg")}>
                                    <MaterialCommunityIcons
                                        style={tw.style("px-2", "text-center", "mt-4")}
                                        name="microphone"
                                        size={35}
                                        color="black"
                                    />
                                    <Text style={tw.style("px-2", "py-4", "text-center")}>{'Record or upload Audio'}</Text>
                                    <View style={tw.style("bg-black","rounded-full", "mb-2","w-7", "h-7",{position:'absolute', right:-6, top:-10,})}>
                                <MaterialCommunityIcons
                                        style={tw.style("px-2", "text-center", "mt-1")}
                                        name="pencil"
                                        size={15}
                                        color="white"
                                    />
                                    </View>
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
                        {"Update"}
                    </Text>
                </TouchableOpacity>
                    </Modal.Body>


                </Modal.Container>

            </Modal>
        </View>
    )
}

export default EditPostModal;