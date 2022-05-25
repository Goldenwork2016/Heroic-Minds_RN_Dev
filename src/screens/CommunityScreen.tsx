import React, { useState, useEffect, useContext, Component } from "react";
import { ScrollView, Text, SafeAreaView, View } from "react-native";
import tw from "../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
// import { Container,Button } from 'native-base';
import CommunityHeader from "../components/CommunityHeader";
import CommunityPostScreen from "../components/CommunityPosts";
import CommunityProfileHeader from "../components/CommunityProfileHeader";

const CommunityScreen = (props: any) => {


        return (
                <View style={tw.style('flex-1')} >

                        <ScrollView>
                                <CommunityHeader navigation={props.navigation} route={props.route} />
                                <CommunityProfileHeader navigation={props.navigation} />
                                <CommunityPostScreen navigation={props.navigation} />
                        </ScrollView>
                </View>

        );

}

export default CommunityScreen;