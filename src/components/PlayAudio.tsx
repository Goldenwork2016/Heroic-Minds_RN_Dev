
import React, { Component, useState } from "react";
import { View, Text, Pressable, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons, Foundation, FontAwesome5, Entypo } from "@expo/vector-icons";
import tw from "../lib/tailwind";
import AudioHeader from "./AudioHeader";
import { Modal } from "./ProfileModal";
import {Audio} from 'expo-av';

var sound = new Audio.Sound();

const PlayAudio = (props:any) => {

    const [soundVar, setSound] = useState();
    const [isPlaying, setIsPlaying]=useState(false)

    const PlayRecordedAudio = async () => {
      try {
        await sound.loadAsync(
          { uri: props.audioFile }, {}, true
       );
       console.log(props.audioFile)
        const playerStatus = await sound.getStatusAsync();
        if (playerStatus.isLoaded) {
          if (playerStatus.isPlaying === false) {
            sound.playAsync();
            setIsPlaying(true);
          }
        }
      } catch (error) {
        console.log("Failed",error)
      }
    };

  return (
    <View>
        <AudioHeader navigation={props.navigation} />
     
            <View style={tw.style("border-t-2", "border-gray-200","mt-2")}>
        
          <View style={tw.style("mt-5")}>
            <Image
              style={{
                width: 220,
                height: 220,
                alignSelf:'center',
                marginBottom: 30,
                resizeMode: "contain",
              }}
              source={require("../../assets/playaudio.png")}
            />
          </View>
          <View style={tw.style("items-center",)}>
            <Text style={tw.style("text-md", "text-black", "font-bold", "text-center")}>
              Now Playing
            </Text>
            <Text
              style={tw.style("text-md", "font-bold", "mt-2", "text-black", "text-center")}
            >
              REC_0001
            </Text>
          </View>
          <View>
            <Image
              style={{
                width: 330,
               alignSelf:'center',
                marginBottom:5,
                resizeMode: "contain",
              }}
              source={require("../../assets/record.png")}
            />
          </View>
          <View style={tw.style("flex-row","justify-between","mr-7")}>
            <Text style={tw.style("ml-7","font-bold")}>00:00</Text>
            <Text style={tw.style("font-bold")}>{props.audioDuration}</Text>
          </View>
          <View style={tw.style("flex-row", "mt-2", "items-end")}>
            <View style={tw.style("items-end",{width:"33%"})}>
              <Pressable style={tw.style("")}>
                <Foundation
                  style={tw.style()}
                  name="previous"
                  size={45}
                  color="black"
                />
              </Pressable>
            </View>
            <View style={tw.style("items-center", {width:"34%"})}> 
              <Pressable style={tw.style("")} onPress={PlayRecordedAudio}>
              { isPlaying ? 
                  <FontAwesome5
                  style={tw.style()}
                  name="stop-circle"
                  size={50}
                  color="black"
                />: <FontAwesome5
                style={tw.style()}
                name="play-circle"
                size={50}
                color="black"
              /> }

              </Pressable>
            </View>
            <View style={tw.style("items-start",{width:"33%"})}>
              <Pressable style={tw.style("")}>
                <Foundation
                  style={tw.style()}
                  name="next"
                  size={45}
                  color="black"
                />
              </Pressable>
            </View>
          </View>
          <TouchableOpacity 
            style={tw.style(
              "mr-5",
              "ml-5",
              "mt-10",
              "mb-3",
              "rounded-xl",
              "bg-black",
              "flex",
              "justify-center",
              "items-center"
            )}
           
          >
            <Text
              style={tw.style("text-xl", "text-center", "text-white", "p-4", {
                fontFamily: "Gilroy-Medium",
              })}
            >
              {"Upload audio"}
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
  );
};


export default PlayAudio;
