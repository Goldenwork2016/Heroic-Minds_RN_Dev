import React from "react";
import { ScrollView, Text, FlatList, View, ImageBackground, Pressable, Dimensions, TouchableOpacity } from "react-native";
import tw from "../lib/tailwind";



const FollowingContent = () => {

    const image = { uri: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg" };
    const renderItem = () => {
        return (
            <View style={tw.style(" flex-row", "justify-start", "h-15", "items-center my-1 rounded-xl", {
                backgroundColor: 'rgba(233,216,166,0.11)'
            })}>
                <View style={tw.style('flex-1 flex-row justify-between items-center ')}>
                    <View style={tw.style('flex-row ')}>
                        <View style={tw.style("w-12", "h-12 mx-2",)}>
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
                                    {"Chris Pine"}
                                </Text>

                            </View>
                            <View>
                                <Text
                                    style={tw.style("text-sm", "break-words", "text-lightYellow", {
                                        fontFamily: "Gilroy-Regular",

                                    })}
                                >
                                    {"@Chris_notMarvel"}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={tw.style('mr-2')}>
                            <Pressable
                                style={tw.style(
                                    'items-center',
                                    'justify-center',
                                    'py-1',
                                    'px-1',
                                    'rounded-lg',
                                    'bg-lightYellow',
                                    {
                                        fontFamily: 'Gilroy-Regular',
                                    }
                                )}
                                onPress={null}>
                                <Text
                                    style={tw.style('text-sm', 'text-darkGrey', {
                                        fontFamily: 'Gilroy-Medium',
                                    })}>
                                    Unfollow
                                </Text>
                            </Pressable>
                        </View>
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

export default FollowingContent;
