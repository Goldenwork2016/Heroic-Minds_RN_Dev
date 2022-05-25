import React from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import tw from "../lib/tailwind";

const AudioHeader = (props: any) => {
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <View style={tw.style("flex-row", "mt-10", "ml-5", "mr-5", )}>
      {/* <View style={tw.style("flex-row", "mt-10", "ml-5", "mr-5",)}> */}
      <View style={tw.style("item-end", { width: "10%" })}>
        <Pressable style={tw.style("w-10", "h-8",)} onPress={goBack}>
          <ImageBackground
            source={require("../../assets/back.png")}
            imageStyle={tw.style("h-8", "w-8", "mt-2")}
            style={tw.style({ width: "12%", height: "100%" })}
          />
        </Pressable>
      </View>

      <View style={tw.style("item-center",  { width: "80%" })}>
        <Text style={tw.style("text-lg", "text-black", "text-center", "mt-3", { fontFamily: "Gilroy-Bold" })}>{'Upload audio'}</Text>
      </View>
      <View style={tw.style("item-end", { width: "10%" })}>
        <Pressable style={tw.style("w-10", "h-8",)}>
          <ImageBackground
            source={require("../../assets/deleteimage.png")}
            imageStyle={tw.style("h-8", "w-8", "mt-2")}
            style={tw.style({ width: "12%", height: "100%" })}
          />
        </Pressable>
      </View>

      {/* </View> */}
      {/* <View style={tw.style("flex-1", "flex-row", "justify-end", "w-1/2")}>
        <Pressable>
          <MaterialCommunityIcons
            style={tw.style(
              "px-1",
              "rounded-full",
              "bg-gray-200",
              "h-10",
              
            )}
            name="delete"
            size={36}
            color="black"
          />
        </Pressable>
      </View> */}
    </View>
  );
};
export default AudioHeader;
