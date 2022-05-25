import * as React from "react";
import { ScrollView, Text, SafeAreaView, View, ImageBackground, Pressable, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import tw from "../lib/tailwind";
import { signOut } from "../hooks/useAuth";
import { AuthContext } from "../context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as WebBrowser from 'expo-web-browser';


type NotificationScreenNavigationProps = {
};

const TERMS_OF_USE_URL = 'https://www.heroicminds.live/terms-of-service';
const PRIVACY_URL = 'https://www.heroicminds.live/privacy-policy';



const TcDetail = ({
    navigation,
}: NativeStackScreenProps<NotificationScreenNavigationProps>) => {

    const _handleTermPress = () => {
        WebBrowser.openBrowserAsync(TERMS_OF_USE_URL);
    }

    const _handlePrivacyPress = () => {
        WebBrowser.openBrowserAsync(PRIVACY_URL);
    }



    const image = { uri: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg" };
    return (
        <View style={tw.style("flex-1")}>
            <ScrollView style={tw.style("flex-1", "mb-40")} scrollEnabled={true}>
                <View style={tw.style('mt-12')}>

                    <Pressable onPress={_handleTermPress}>
                        <View style={tw.style("mr-5", "ml-5", "mt-5", "flex-row")}>
                            <Text style={tw.style("text-2xl", "text-lightYellow", { fontFamily: "Gilroy-SemiBold" })}>
                                Terms Of Use
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={_handlePrivacyPress}>
                        <View style={tw.style("mr-5", "ml-5", "mt-10", "flex-row")}>
                            <Text style={tw.style("text-2xl", "text-lightYellow", { fontFamily: "Gilroy-SemiBold" })}>
                                Privacy Policy
                            </Text>
                        </View>
                    </Pressable>


                </View>


            </ScrollView>
        </View>



    );
};

export default TcDetail;
