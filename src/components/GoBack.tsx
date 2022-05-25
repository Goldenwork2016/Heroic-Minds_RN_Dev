import React from "react";
import { View, Pressable, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import tw from "../lib/tailwind";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Style } from "twrnc/dist/esm/types";
import BackArrowSVG from "./SVGs/BackArrowSVG";
type ProfileScreenNavigationProps = {

};
const GoBack = ({
    navigation,
}: NativeStackScreenProps<ProfileScreenNavigationProps>) => {

    const goBackToScreen = () => {
        navigation.goBack();
    }
    return (

        <View>
            <Pressable style={tw.style("h-8", "mb-2", "w-8")} hitSlop={20} onPress={goBackToScreen}>
                <BackArrowSVG />
            </Pressable>
        </View>


    );

}
export default GoBack;