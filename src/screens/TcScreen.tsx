import React, { useState, useEffect, useContext, Component } from "react";
import { ScrollView, Text, SafeAreaView, View } from "react-native";
import tw from "../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
// import { Container,Button } from 'native-base';
import TcDetail from "../components/TcDetail";
import SingleWordHeader from "../components/SingleWordHeader";

const ContactScreen = (props: any) => {


    return (
        <View >
            <SingleWordHeader navigation={props.navigation} headerName={'Terms & Privacy'} />
            <ScrollView>
                <TcDetail navigation={props.navigation} />
            </ScrollView>
        </View>


    );

}

export default ContactScreen;