import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "../lib/tailwind";
import { Modal } from "./ProfileModal";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type DeletePostScreenNavigationProps = {
    ProfileScreen: any
};
const DeletePost = ({
    navigation,
}: NativeStackScreenProps<DeletePostScreenNavigationProps>) => {

    const goBack = () => {
        navigation.navigate('ProfileScreen');
    }
    return (
        <View style={tw.style("flex-1")}>
            <Modal isVisible={true}>
                {/* <View style={tw.style("mb-2", "w-7", "h-7", "self-end",)}>
                    <Entypo onPress={goBack}
                        style={tw.style("text-center", "mt-1")}
                        name="circle-with-cross"
                        size={20}
                        color="white"
                    />
                </View> */}
                <Modal.Container>
                    <Modal.Header title={'Are you sure?'} />
                    <Modal.Body>
                    <View>
                <Image
                    style={{
                        width: 200,
                        height: 200,
                        alignSelf:'center',
                        // marginBottom: 35,
                        marginTop: 20,
                        resizeMode: "contain",
                    }}
                    source={require("../../assets/delete-icon.png")}
                />
            </View>
            <View style={tw.style("items-center", "mt-5")}>
                <Text style={tw.style("text-l", { color: "#979797", })}>
                    Are you sure you want to delete this post?
                </Text>
            </View>
            <View>
                <TouchableOpacity
                    style={tw.style(
                        "mr-5",
                        "ml-5",
                        "mt-10",
                        "rounded-xl",
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
                        {"Delete post"}
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={goBack}
                    style={tw.style(
                        "m-5",
                        "rounded-xl",
                        "border-2",
                        "border-black",
                        "flex",
                        "justify-center",
                        "items-center"
                    )}
                >
                    <Text
                        style={tw.style("text-xl", "font-bold", "text-center", "text-black", "p-4", {
                            fontFamily: "Gilroy-Medium",
                        })}
                    >
                        {"Cancel"}
                    </Text>
                </TouchableOpacity>
            </View>
                        </Modal.Body>
                    </Modal.Container>
            </Modal>

        </View>
    );
};

export default DeletePost;
