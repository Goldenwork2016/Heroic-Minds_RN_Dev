import React from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import tw from "../lib/tailwind";
import { signOut } from "../hooks/useAuth";
import { AuthContext } from "../context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView } from "react-native-gesture-handler";
// import AccountSettingsContent from "./AccountSettingsContent";

type Props = {
    navigation: any
};

const ProfileDetail = (props: Props) => {

    const image = { uri: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg" };
    // const { navigateToSettings } = props;
    const { user, setUser } = React.useContext(AuthContext);

    const goToFollowingScreen = () => {
        props.navigation.navigate('FollowingScreen')
    }

    return (
        <View style={tw.style('flex-1')}>

            <View style={tw.style(`m-2 mb-4`)}>
                {/* //Profile Image */}
                <View style={tw.style('flex-row mt-3 justify-start ')}>
                    <View style={tw.style("w-22", "h-22")}>
                        <ImageBackground
                            source={image}
                            imageStyle={tw.style("rounded-full")}
                            style={tw.style({ width: "100%", height: "100%" })}
                        />
                    </View>
                    {/* //Text surrounding Profile Image */}
                    <View style={tw.style(" ml-2 flex-1 h-full w-full ")}>
                        <Text style={tw.style("text-[18px]", "text-lightYellow mb-1",
                            { fontFamily: "Gilroy-Bold" })}>
                            {'Ben Faneli'}
                        </Text>
                        <Text style={tw.style("text-base", "text-lightYellow mb-1 opacity-50",
                            { fontFamily: 'Gilroy-Regular' })}>
                            {'@Fanelli43'}
                        </Text>
                        <Text style={tw.style("text-base", "text-lightYellow opacity-50", {
                            fontFamily: "Gilroy-Regular",
                        })}>
                            {'Decided to be hero'}
                        </Text>

                        <Pressable onPress={goToFollowingScreen} style={tw.style("absolute bottom-0 flex-row justify-start",
                            "items-end mt-2 w-60 ")}>
                            <Text style={tw.style("text-base", "text-lightYellow mr-3 opacity-90",
                                { fontFamily: "Gilroy-Medium" })}>
                                {'Following 200'}
                            </Text>

                        </Pressable>

                    </View>


                    {/* Edit Profile Btn */}
                    <View>
                        <Pressable>
                            <View
                                style={tw.style(
                                    'absolute',
                                    'right-0',
                                    'justify-center',
                                    'px-2',
                                    'py-1',
                                    'rounded-lg',
                                    'border',
                                    'border-lightYellow',

                                )}>
                                <Text style={tw.style('text-lightYellow', 'text-sm', {
                                    fontFamily: 'Gilroy-Regular'
                                })}>{'Edit Profile'}</Text>
                            </View>
                        </Pressable>

                    </View>

                </View>

            </View>

        </View>


    );
};

export default ProfileDetail;
