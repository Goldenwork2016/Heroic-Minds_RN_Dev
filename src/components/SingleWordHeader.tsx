import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, Pressable, Platform } from "react-native";

import tw from "../lib/tailwind";
import GoBack from "./GoBack";

const SingleWordHeader = (props: any) => {

    return (

        <View style={tw.style("flex-row", 'items-center', Platform.OS == 'ios' ? 'ml-6' : 'ml-2',)}>

            <View style={tw.style('h-4', 'mt-1')}>
                <GoBack navigation={props.navigation} route={props.route} />

            </View>


            <View style={tw.style("flex-1", "mr-8")}>
                <Text style={tw.style("text-2xl", "text-lightYellow", 'leading-10',
                    { fontFamily: "Gilroy-Bold" })}>{props.headerName}</Text>
            </View>


        </View>


    );

}
export default SingleWordHeader;