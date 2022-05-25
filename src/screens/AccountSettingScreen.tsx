import React, { useState, useEffect, useContext, Component } from "react";
import { ScrollView, Text, SafeAreaView, View } from "react-native";
import tw from "../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
// import { Container,Button } from 'native-base';
import AccountSettingsContent from "../components/AccountSettingsContent";
import SingleWordHeader from "../components/SingleWordHeader";

const AccountSettingScreen = (props: any) => {


    return (
        <SafeAreaView style={tw.style('flex-1')}>
            <View style={tw.style("flex-1")}>
                <SingleWordHeader navigation={props.navigation} headerName={'Account/Profile'} />
                <ScrollView>
                    <AccountSettingsContent navigation={props.navigation} route={props.route} />
                </ScrollView>

            </View>
        </SafeAreaView>


    );

}

export default AccountSettingScreen;