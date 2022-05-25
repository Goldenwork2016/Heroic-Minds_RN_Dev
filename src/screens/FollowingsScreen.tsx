import React, { useState, useEffect, useContext, Component } from "react";
import { ScrollView, Text, SafeAreaView, View } from "react-native";
import tw from "../lib/tailwind";
import SingleWordHeader from "../components/SingleWordHeader";
import FollowingContent from "../components/FollowingContent";

const FollowingsScreen = (props: any) => {


    return (
        <View style={tw.style('flex-1')} >
            <SingleWordHeader navigation={props.navigation} headerName={'Following'} />
            <FollowingContent />
        </View>


    );

}

export default FollowingsScreen