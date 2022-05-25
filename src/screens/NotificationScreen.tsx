import React, { useState, useEffect, useContext, Component } from "react";
import { ScrollView, Text, SafeAreaView, View } from "react-native";
import tw from "../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
// import { Container,Button } from 'native-base';
import NotificationDetail from "../components/NotificationDetail";
import SingleWordHeader from "../components/SingleWordHeader";

const ProfileScreen = (props: any) => {


    return (
        <View style={tw.style('flex-1')} >
            <SingleWordHeader navigation={props.navigation} headerName={'Notifications'} />
            <NotificationDetail navigation={props.navigation} route={props.route} />
        </View>


    );

}

export default ProfileScreen;