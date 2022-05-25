import React from "react";
import { ScrollView, Text, SafeAreaView, View, ImageBackground, Pressable, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import tw from "../lib/tailwind";
import { signOut } from "../hooks/useAuth";
import { AuthContext } from "../context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type NotificationScreenNavigationProps = {
};

const ContactDetail = ({
    navigation,
}: NativeStackScreenProps<NotificationScreenNavigationProps>) => {

    const image = { uri: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg" };
    return (
        <View>
            <ScrollView>
                <View style={tw.style("flex-1")}>
                    <View style={tw.style("mr-5", "ml-5", "mt-7", "flex-row",)}>
                        <Text style={tw.style("text-xl", 'text-lightYellow', {
                            fontFamily: "Gilroy-SemiBold",
                        })}>
                            Whether it is something we can improve on or some gratitude you would like to share, we would love to hear from you!
                        </Text>

                    </View>
                    <View style={tw.style("mr-5", "ml-5", "mt-16", "flex-row")}>
                        <Text style={tw.style("text-2xl", 'text-lightYellow', {
                            fontFamily: "Gilroy-Bold",
                        })}>
                            Feedback
                        </Text>
                    </View>
                    <View style={tw.style("mr-5", "ml-5", "flex-row")}>
                        <Text style={tw.style("text-base", 'text-lightYellow', {
                            fontFamily: "Gilroy-Medium",
                        })}>
                            info@heroicminds.live
                        </Text>
                    </View>
                    <View style={tw.style("mr-5", "ml-5", "mt-10", "flex-row")}>
                        <Text style={tw.style("text-2xl", 'text-lightYellow', {
                            fontFamily: "Gilroy-Bold",
                        })}>
                            Media Inquiries
                        </Text>
                    </View>
                    <View style={tw.style("mr-5", "ml-5", "flex-row")}>
                        <Text style={tw.style("text-base", 'text-lightYellow', {
                            fontFamily: "Gilroy-Medium",
                        })}>
                            info@heroicminds.live
                        </Text>
                    </View>
                </View>


            </ScrollView >




        </View >


    );
};

export default ContactDetail;
