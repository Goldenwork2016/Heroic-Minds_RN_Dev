import React, { useState } from 'react'
import { View, Text, ScrollView, ImageBackground, Pressable, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import tw from "../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";

import EmojiSelector, { Categories } from 'react-native-emoji-selector'
import SingleWordHeader from '../components/SingleWordHeader';
import CommentsContent from '../components/CommentsContent';

const CommentScreen = ({ navigation }: any) => {


    const image = { uri: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg" }
    return (
        <View style={tw.style("flex-1 ")}>
            <SingleWordHeader navigation={navigation} headerName={'Comments'} />
            <CommentsContent />

            <KeyboardAvoidingView style={tw.style("")} keyboardVerticalOffset={30} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                <View style={tw.style(tw.style('h-12'))}>
                    <EmojiSelector theme="white"
                        showSearchBar={false}
                        columns={8}
                        onEmojiSelected={emoji => console.log(emoji)}
                        showSectionTitles={false} showTabs={false}
                    />
                </View>

                <View style={tw.style("m-5", "flex-row",)}>
                    <View style={tw.style("w-12", "h-12",)}>
                        <ImageBackground
                            source={image}
                            imageStyle={tw.style("rounded-full")}
                            style={tw.style({ width: "100%", height: "100%" })}
                        />
                    </View>
                    <View style={tw.style("flex-1", "flex-row", "ml-4", "border",
                        "border-lightYellow", "h-12", "rounded-full", "px-2", "justify-between", "opacity-70")}>
                        <TextInput
                            placeholder="Add a comment"
                            placeholderTextColor={'#E9D8A6'}
                            style={tw.style('text-lightYellow', { fontFamily: "Gilroy-Medium", width: "85%" })}
                        />


                    </View>
                </View>

            </KeyboardAvoidingView>
        </View>
    );
}

export default CommentScreen;