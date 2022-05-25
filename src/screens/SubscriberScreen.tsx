import React, { useState } from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ListItem, SearchBar } from "react-native-elements";
import tw from "../lib/tailwind";
import { signOut } from "../hooks/useAuth";
import { AuthContext } from "../context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView } from "react-native-gesture-handler";

const SubscriberScreen = ({ navigation }: any) => {
    const goBack = () => {
        navigation.goBack();
    }
    const image = { uri: "https://reactjs.org/logo-og.png" };

    const [search, updateSearch] = useState('');
    return (

        <View style={tw.style("mt-8",)}>
            <View style={tw.style("flex-row", "ml-5", "mr-5")}>
                <Pressable style={tw.style("w-10", "h-8",)} onPress={goBack}>
                    <ImageBackground
                        source={require("../../assets/back.png")}
                        imageStyle={tw.style("h-8", "w-8", "mt-1")}
                        style={tw.style({ width: "12%", height: "100%" })}
                    ></ImageBackground>
                </Pressable>
                <View style={tw.style("flex-1", "mr-5", "mt-2")}>
                    <Text style={tw.style("text-lg", "text-black", "text-center", { fontFamily: "Gilroy-Bold" })}>{'Subscribing'}</Text>
                </View>
            </View>
            <View style={tw.style("border-t-2", "border-gray-200", "mt-4")}>
                <View style={tw.style("ml-5", "mr-5")}>
                    <SearchBar
                        lightTheme
                        placeholder="Search for your friends"
                        searchIcon={{ size: 30, color: 'black' }}
                        placeholderTextColor='gray'
                        inputStyle={{ backgroundColor: '#f4f4f5', fontSize: 15, justifyContent: 'center' }}
                        inputContainerStyle={{ backgroundColor: '#f4f4f5', borderWidth: 0, height: 15, flexDirection: 'row-reverse' }}
                        containerStyle={{
                            backgroundColor: '#f4f4f5',
                            height: 45,
                            borderRadius: 10,
                            borderWidth: 1,
                            marginTop: 15,

                            padding: 6,
                            borderColor: '#e9eaeb',
                            shadowColor: 'white', //no effect

                        }}


                        onChangeText={updateSearch}
                        value={search}
                    />
                </View>
                <ScrollView>
                    <View style={tw.style("mt-5", "ml-5", "mr-5")}>
                        <View style={tw.style("flex-row", "justify-start",)}>
                            <View style={tw.style("w-12", "h-12", "mt-3")}>
                                <ImageBackground
                                    source={image}
                                    imageStyle={tw.style("rounded-full")}
                                    style={tw.style({ width: "100%", height: "100%" })}
                                />
                            </View>
                            <View style={tw.style("m-3", "flex-1")}>
                                <View style={tw.style("flex-row")}>
                                    <Text
                                        style={tw.style("text-xl", "leading-9", "break-words", {
                                            fontFamily: "Gilroy-Bold",
                                            color: "#0B0B0B",
                                        })}
                                    >
                                        {"Ben Fanelli"}
                                    </Text>
                                    <View style={tw.style("ml-2", "bg-black", "h-6", "rounded-full", "mt-3", "leading-1")}>
                                        <ImageBackground
                                            source={require("../../assets/flag.png")}
                                            imageStyle={tw.style("h-2", "w-4")}
                                            style={tw.style({ width: "100%", height: "100%" })}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <Text
                                        style={tw.style("text-sm", "leading-1", "break-words", {
                                            fontFamily: "Gilroy-Medium",
                                            color: "#c1c1c1",

                                        })}
                                    >
                                        {"@Username"}
                                    </Text>
                                </View>
                            </View>
                            <View style={tw.style("mt-5",)}>

                                <Pressable
                                    style={tw.style(
                                        "items-center",
                                        "justify-center",

                                        "rounded-lg",
                                        {
                                            fontFamily: "Gilroy-Regular",
                                            backgroundColor: "#e4c166",
                                        }
                                    )}
                                // onPress={onLoginButtonPress}
                                >
                                    <Text
                                        style={tw.style("text-sm", "px-4", "py-2", {
                                            fontFamily: "Gilroy-SemiBold",
                                            color: "white",
                                        })}
                                    >
                                        {"Subscribed"}
                                    </Text>
                                </Pressable>

                            </View>
                        </View>


                    </View>
                </ScrollView>
            </View>

        </View>



    );
}

export default SubscriberScreen;