import React, { useState, useEffect, useContext, Component } from "react";
import { ScrollView, Text, SafeAreaView, View } from "react-native";
import tw from "../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
// import { Container,Button } from 'native-base';
import SettingsNewDetail from "../components/SettingsNewDetail";
import SingleWordHeader from "../components/SingleWordHeader";

const SettingsNewScreen = (props: any) => {


    return (
        <View >
            <SingleWordHeader navigation={props.navigation} headerName={'Settings'} />
            <ScrollView>
                <SettingsNewDetail navigation={props.navigation} />
            </ScrollView>
        </View>


    );

}

export default SettingsNewScreen;