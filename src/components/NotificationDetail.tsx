import React from "react";
import { ScrollView, Text, FlatList, View, ImageBackground, Pressable, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import tw from "../lib/tailwind";
import { signOut } from "../hooks/useAuth";
import { AuthContext } from "../context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type NotificationScreenNavigationProps = {
};

const NotificationDetail = ({
    navigation,
}: NativeStackScreenProps<NotificationScreenNavigationProps>) => {

    const image = { uri: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg" };
    const renderItem = () => {
        return (
            <View style={tw.style("flex-row", "justify-start", "h-15", "mr-4 items-center mt-1")}>
                <View style={tw.style("w-12", "h-12",)}>
                    <ImageBackground
                        source={image}
                        imageStyle={tw.style("rounded-full")}
                        style={tw.style({ width: undefined, height: undefined, flex: 1 })}
                    />
                </View>
                <View style={tw.style("mx-3")}>
                    <View style={tw.style("flex-row")}>
                        <Text
                            style={tw.style("text-lg", "leading-6", "break-normal", "text-lightYellow", {
                                fontFamily: "Gilroy-Bold",
                            })}
                        >
                            {"Johnywime commented on your post"}
                        </Text>

                    </View>
                    <View>
                        <Text
                            style={tw.style("text-sm", "break-words", "text-lightYellow", {
                                fontFamily: "Gilroy-Regular",

                            })}
                        >
                            {"2 mins ago"}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={tw.style('flex-1')}>

            <View style={tw.style("pb-4")}>

                <View style={tw.style("justify-start", "w-screen", "mx-5", "mt-4")}>
                    {/* TODO: update List data and keyExtractor */}
                    <FlatList
                        data={[1, 2, 3, 4]}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.toString()}
                    />
                </View>
            </View>


        </View>


    );
};

export default NotificationDetail;
