
import React, { Component, useEffect, useState } from "react";
import { View, Text, Pressable, TouchableOpacity, Image, ImageBackground } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5, Entypo
} from "@expo/vector-icons";
import tw from "../lib/tailwind";
import SingleWordHeader from "./SingleWordHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Audio } from "expo-av";
import PlayAudio from "./PlayAudio";

type AudioScreenNavigationProps = {

  PlayAudio: any
  //ProfileScreen:any
};
var recording = new Audio.Recording();
const UploadAudio = (props: any, {
  navigation,
}: NativeStackScreenProps<AudioScreenNavigationProps>) => {
  console.log('TEST AUDIO PAGE ON LOAD')
  const [recordingEnable, setRecording] = useState(false);
  const [duration, setDuration] = useState('00');
  const [recordedURI, setrecordedURI] = useState('');
  const [playAudio, setPlayAudio] = useState(false);
  const goBack = () => {
    props.CloseUploadAudioModal();
  }

  const goToPlayAudio = () => {
    console.log('TESTPLAYAUDIO')
    props.navigation.navigate('PlayAudio');
  }

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recording.startAsync();
      setRecording(true);
      // console.log(recording)
      console.log('Recording started')
    } catch (err) {
      console.error("Failed to start recording", err)
    }
  }
  async function stopRecording() {
    setRecording(false);
    await recording.stopAndUnloadAsync();
    var ms = recording._finalDurationMillis
    var min = Math.floor((ms / 1000 / 60) << 0)
    var sec = Math.floor((ms / 1000) % 60)
    if (min > 0) {
      setDuration(min + " min " + sec + " sec");
    } else {
      setDuration(sec + " sec");
    }
    const url = recording.getURI();
    setrecordedURI(url);

  }
  return (
    <View>
   {!playAudio && <View>
    <View style={tw.style("flex-row", "mt-10", "ml-5", "mr-5")}>
    <View style={tw.style("item-end","mb-2",{width:"10%"})}>
                  <Pressable style={tw.style("w-10", "h-8", )} onPress={goBack}>
                            <ImageBackground
                                    source={require("../../assets/back.png")}
                                    imageStyle={tw.style( "h-8", "w-8","mt-2")}
                                    style={tw.style({ width: "12%", height: "100%" })}
                                />
                            </Pressable>
                  </View>
                
                <View style={tw.style("item-center", {width:"80%"})}>
                    <Text style={tw.style("text-lg", "text-black","text-center","mt-3","mb-2", { fontFamily: "Gilroy-Bold" })}>{'Upload audio'}</Text>
                </View>
                
      </View>
      <View style={tw.style("border-t-2", "border-gray-200")}>
        <View style={tw.style("mt-10")}>
          <Image
            style={{
              width: 220,
              height: 220,
              alignSelf: 'center',
              marginBottom: 35,
              resizeMode: "contain",
            }}
            source={require("../../assets/uploadaudio.png")}
          />
        </View>
        <View style={tw.style("items-center")}>
          <Text style={tw.style("text-md", "font-bold")}>{duration}</Text>
        </View>
        <View style={tw.style("mt-4")}>
          <Image
            style={{
              width: 280,
              alignSelf: 'center',

              resizeMode: "contain",
            }}
            source={require("../../assets/record.png")}
          />
        </View>
        <View style={tw.style("flex-row", { alignSelf: 'center' })}>
          <View style={tw.style("items-center")}>
            <Pressable style={tw.style("mt-5")}>
              <MaterialCommunityIcons
                style={tw.style()}
                name="delete"
                size={30}
                color="black"
              />
            </Pressable>
          </View>
          <View>
            <Pressable style={tw.style("mt-2")} onPress={goToPlayAudio}>
              <Ionicons
                style={tw.style("ml-3")}
                name="md-stop-circle"
                size={50}
                color="black"
              />
            </Pressable>
          </View>
        </View>
        <TouchableOpacity onPress={recordingEnable ? stopRecording : startRecording}
          style={tw.style(
            "mr-5",
            "ml-5",
            "mt-10",
            "mb-0",
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
            {recordingEnable ? 'Stop recording' : 'Start recording'}
          </Text>
        </TouchableOpacity>
      </View>
      </View>}
      {playAudio && <PlayAudio audioFile={recordedURI} audioDuration={duration}/>}
    </View>
  );
};

export default UploadAudio;
