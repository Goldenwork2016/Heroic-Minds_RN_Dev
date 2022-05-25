import React from "react";
import { Text, FlatList, View, ImageBackground } from "react-native";
import tw from "../lib/tailwind";


const CommentsContent = () => {

    const image = { uri: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg" };
    const renderItem = () => {
        return (
            <View style={tw.style("flex-row", "justify-start", "items-center", " my-1",)}>
                <View style={tw.style("w-12", "h-12",)}>
                    <ImageBackground
                        source={image}
                        imageStyle={tw.style("rounded-full")}
                        style={tw.style({ width: undefined, height: undefined, flex: 1 })}
                    />
                </View>
                <View style={tw.style("flex-1 ml-3 my-3",)}>
                    <View style={tw.style("flex-row  items-center mb-1")}>
                        <Text
                            style={tw.style(" text-base", "self-start", "break-words", "text-lightYellow", {
                                fontFamily: "Gilroy-Medium",
                            })}
                        >
                            {"Ben"}
                        </Text>

                        <Text
                            style={tw.style(" text-sm", "break-words", "text-start", "pl-2", "text-lightYellow", {
                                fontFamily: "Gilroy-Regular",
                            })}
                        >
                            {"Nice One! "}
                        </Text>

                    </View>
                    <View style={tw.style("flex-row items-center",)}>
                        <Text
                            style={tw.style("text-sm", "break-words", "text-lightYellow", {
                                fontFamily: "Gilroy-Regular",

                            })}
                        >
                            {"2m ago"}
                        </Text>
                        <Text
                            style={tw.style("text-sm", "break-words", "ml-3", "text-lightYellow", {
                                fontFamily: "Gilroy-SemiBold",

                            })}
                        >
                            {"Reply"}
                        </Text>
                        <Text
                            style={tw.style("text-sm", "break-words", "ml-3", "text-lightYellow", {
                                fontFamily: "Gilroy-SemiBold",

                            })}
                        >
                            {"Delete"}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={tw.style('flex-1 ')}>
            <View style={tw.style("flex-1 pb-4")}>
                <View style={tw.style("flex-1 justify-start", "w-screen", "mx-2", "mt-4")}>
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

export default CommentsContent;
