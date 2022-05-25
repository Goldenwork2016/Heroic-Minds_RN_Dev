import * as React from "react";
import { ScrollView, Text, Switch, View, ImageBackground, Pressable, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import tw from "../lib/tailwind";
import { signOut } from "../hooks/useAuth";
import { AuthContext } from "../context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import SwitchToggle from "react-native-switch-toggle";
import InsightIconSVG from "./SVGs/InsightIconSVG";

type NotificationScreenNavigationProps = {
};

const NotificationDetail = ({
    navigation,
}: NativeStackScreenProps<NotificationScreenNavigationProps>) => {

    const image = { uri: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg" };
    const [isSelected, setSelected] = React.useState(false);
    const [HomeNotificationon, HomeNotificationoff] = React.useState(false);
    const [CommunityNotificationon, CommunityNotificationoff] = React.useState(false);
    return (
        <View>
            <ScrollView>
                <View style={tw.style("flex-1")}>

                    <View style={tw.style("flex", "flex-row", "w-screen", "mt-10", "mx-4", "h-15", "rounded-lg", {
                        backgroundColor: 'rgba(233,216,166,0.1)',

                    })}>
                        <View style={tw.style('my-auto', 'mx-2')}>
                            <InsightIconSVG />
                        </View>
                        <View style={tw.style('flex-1', 'my-auto', 'justify-start')}>
                            <Text style={tw.style("text-base", 'text-lightYellow', { fontFamily: "Gilroy-Medium" })}>
                                New Library Content Banner
                            </Text>
                        </View>
                        <View style={tw.style("py-4", "pr-2", 'justify-end')}>
                            <SwitchToggle
                                switchOn={HomeNotificationon}
                                onPress={() => HomeNotificationoff(!HomeNotificationon)}
                                circleColorOff='#fff'
                                circleColorOn='#1C1C1C'
                                backgroundColorOn='#E9D8A6'
                                backgroundColorOff='black'
                                containerStyle={{
                                    marginTop: 0,
                                    width: 50,
                                    height: 30,
                                    borderRadius: 25,
                                    padding: 5,
                                }}
                                circleStyle={{
                                    width: 25,
                                    height: 25,
                                    borderRadius: 25,
                                }}
                            />
                        </View>

                    </View>

                    <View style={tw.style("flex-row", "w-screen", "mt-10", "mx-4", "h-18", "rounded-lg", {
                        //Using Rgba here to apply opacity only on the background.
                        //Else using hash based color code would apply it to text and borders as well
                        backgroundColor: 'rgba(233,216,166,0.1)',

                    })}>
                        <View style={tw.style('my-auto', 'mx-2')}>
                            <InsightIconSVG />

                        </View>
                        <View style={tw.style('flex-1', 'my-auto', 'justify-start')}>
                            < Text style={tw.style("text-base", 'text-lightYellow', { fontFamily: "Gilroy-Bold" })} >
                                New Library Content Banner
                            </Text>
                        </View>
                        <View style={tw.style("py-4", "pr-2", 'justify-end')}>
                            <SwitchToggle
                                switchOn={CommunityNotificationon}
                                onPress={() => CommunityNotificationoff(!CommunityNotificationon)}
                                circleColorOff='#fff'
                                circleColorOn='#1C1C1C'
                                backgroundColorOn='#E9D8A6'
                                backgroundColorOff='black'
                                containerStyle={{
                                    marginTop: 0,
                                    width: 50,
                                    height: 30,
                                    borderRadius: 25,
                                    padding: 5,
                                }}
                                circleStyle={{
                                    width: 25,
                                    height: 25,
                                    borderRadius: 25,
                                }}
                            />
                        </View>

                    </View>


                </View >
            </ScrollView >
        </View >


    );
};

export default NotificationDetail;
