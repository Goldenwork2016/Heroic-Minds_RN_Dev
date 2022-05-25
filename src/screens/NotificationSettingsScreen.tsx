import React, { useState, useEffect, useContext, Component } from "react";
import { ScrollView, Text, SafeAreaView, View } from "react-native";
import tw from "../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
// import { Container,Button } from 'native-base';
import NotificationSettingsDetail from "../components/NotificationSettingsDetail";
import SingleWordHeader from "../components/SingleWordHeader";
import { StatusBar } from "expo-status-bar";

const ProfileScreen = (props: any) => {


    return (
        <View >
            <SingleWordHeader navigation={props.navigation} headerName={'Remind me'} />
            <StatusBar style="light" />
            <ScrollView>
                <NotificationSettingsDetail navigation={props.navigation} />
            </ScrollView>
        </View>
    );

}

export default ProfileScreen;