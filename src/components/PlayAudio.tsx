
import React, { Component, useEffect, useState } from "react";
import { View, Text, Pressable, TouchableOpacity, Image, ScrollView, Platform } from "react-native";
import { Ionicons, Foundation, FontAwesome5, Entypo } from "@expo/vector-icons";
import tw from "../lib/tailwind";
import AudioHeader from "./AudioHeader";
import { Modal } from "./ProfileModal";
import { Audio, AVPlaybackStatus } from 'expo-av';
import ProfileModalHeader from "./ProfileModalHeader";


interface Props {
  CloseUploadAudioModal: () => any
  audioFile: any
  audioDuration: any
  updateAudioRecordingState: Function
  setRecordedAudioParentUri: Function //Set Audio URI in ProfileContent
}
const PlayAudio = (props: Props) => {

  const [soundVar, setSound] = useState<Audio.Sound>(new Audio.Sound());
  const [isPlaying, setIsPlaying] = useState(false)


  useEffect(() => {
    loadSound()
    return () => {
      unloadSound()
    }
  }, [])

  const loadSound = async () => {
    await soundVar!.loadAsync(
      { uri: props.audioFile }, { shouldPlay: false }, true
    );
  }

  const unloadSound = async () => {
    await soundVar.unloadAsync()
  }

  const PlayRecordedAudio = async () => {
    try {

      // await soundVar!.playAsync();
      // setIsPlaying(true);

      const playerStatus = await soundVar!.getStatusAsync();

      if (playerStatus!.isLoaded) {
        await soundVar!.playAsync();
        setIsPlaying(true);

      }

    } catch (error) {
      console.log("Failed", error)
    }
  };

  const stopRecordedAudio = async () => {
    const playerStatus = await soundVar!.getStatusAsync();

    if (playerStatus!.isLoaded) {
      await soundVar!.stopAsync();
      setIsPlaying(false)

    }
  }

  const goBack = () => {
    props.CloseUploadAudioModal();
  }

  const _onClickSave = () => {
    props.updateAudioRecordingState(true)
    props.CloseUploadAudioModal()
    props.setRecordedAudioParentUri(props.audioFile)
  }


  return (
    <View style={tw.style('mb-10 mt-2')} >
      <ProfileModalHeader goBack={goBack} />
      <View >

        <View style={tw.style("mt-15 items-center",)}>

          <Text
            style={tw.style("text-md", "font-bold", "mt-2", "text-center", {
              fontFamily: 'Gilroy-SemiBold'
            })}
          >
            {isPlaying ? 'Playing......' : 'Play'}
          </Text>
        </View>
        <View>
          <Image
            style={tw.style('w-4/5', {
              alignSelf: 'center',
              marginBottom: 5,
              resizeMode: "contain",
            })}
            source={require("../../assets/record.png")}
          />
        </View>

        <TouchableOpacity
          onPress={isPlaying ? stopRecordedAudio : PlayRecordedAudio}
          style={tw.style(
            "mx-auto",
            "w-20",
            "mt-3",
            "mb-3",
            "rounded-xl",
            "bg-darkGrey",
            "flex",
            "justify-center",
            "items-center"
          )}

        >
          <Text
            style={tw.style("text-sm", "text-center", "p-2 text-lightYellow")}
          >
            {isPlaying ? "Stop" : "Play"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={_onClickSave}
          style={tw.style(
            "mx-auto",
            "w-20",
            "mb-3",
            "rounded-xl",
            "bg-darkGrey",
            "justify-center",
            "items-center"
          )}

        >
          <Text
            style={tw.style("text-sm", "text-center", "text-white", "p-2 text-lightYellow")}
          >
            {"Save"}
          </Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};


export default PlayAudio;
