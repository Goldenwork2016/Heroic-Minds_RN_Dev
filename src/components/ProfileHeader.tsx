import React, { useState, useEffect } from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import tw from "../lib/tailwind";
import { signOut } from "../hooks/useAuth";
import { AuthContext } from "../context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CreatePostModal from "../components/CreatePost";

type ProfileScreenNavigationProps = {

    SettingsNewScreen: any
    //ProfileScreen:any
};
const ProfileHeader = (props: any, {
    navigation,
}: NativeStackScreenProps<ProfileScreenNavigationProps>) => {


    const gotoCreatePost = () => {
        props.gotoCreatepost()
    }

    const goBack = () => {
        props.navigation.goBack();
    }

    const goToSettings = () => {
        props.navigation.navigate('Settings')
    }

    const image = { uri: "https://reactjs.org/logo-og.png" };
    return (

        <View style={tw.style("flex-row", "mt-10", "ml-5", "mr-5")}>
            <View style={tw.style({ width: "35%" })}>
                <Pressable style={tw.style("h-8", "mt-2", "w-10")} onPress={goBack}>
                    <ImageBackground
                        source={require("../../assets/back.png")}
                        imageStyle={tw.style("h-8", "w-8",)}
                        style={tw.style({ width: "12%", height: "100%" })}
                    />
                </Pressable>
            </View>

            <View style={tw.style("justify-center", "leading-12", "items-center", { width: "30%" })}>
                <Text style={tw.style("text-lg", "text-black", { fontFamily: "Gilroy-Bold" })}>{'Profile'}</Text>
            </View>
            <View style={tw.style("flex-1", "flex-row", "mt-1", { width: "35%" })}>
                <View style={tw.style("items-center", { width: "33%" })}>
                    <Pressable onPress={gotoCreatePost}>
                        <Ionicons
                            style={tw.style()}
                            name="add-circle"
                            size={38}
                            color="black"
                        />
                    </Pressable>
                </View>

                <View style={tw.style("items-center", { width: "34%" })}>
                    <Pressable style={tw.style("rounded-full", "h-10", "mb-2",)} onPress={goToSettings}>
                        <Ionicons name="settings-outline" size={33}
                            color="black" />
                    </Pressable>
                </View>
                <View style={tw.style("items-center", { width: "33%" })}>
                    <Pressable style={tw.style("w-8", "h-8", "mt-1")} >
                        <ImageBackground
                            source={image}
                            imageStyle={tw.style("rounded-full")}
                            style={tw.style({ width: "100%", height: "100%" })}
                        />
                    </Pressable>
                </View>
                {/* </Pressable> */}
            </View>
        </View>


    );

}
export default ProfileHeader;