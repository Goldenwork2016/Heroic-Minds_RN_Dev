import React from "react";
import { View, Text, ImageBackground, Pressable, } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AudioContext } from "../context";

import tw from "../lib/tailwind";
import {
    millisToMinutesAndSeconds,
    pauseEpisode,
    playFromPause,
    seekBackwards,
    seekForward,
} from "../hooks/useAudio";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import RightSeek from "./rightSeek";
import LeftSeek from "./leftSeek";
import Slider from '@react-native-community/slider';
const PostMusicPlayerBar = () => {
    const {
        currentEpisode,
        isPlaying,
        sound,
        audioPlaybackDetails,
        setIsPlaying,
        showEpisodeTextorReflectionQ,
        setShowEpisodeTextorReflectionQ,
        showPlayOrPencil,
        setShowPlayOrPencil,
        showBottomPlayer,
    } = React.useContext(AudioContext);
    const imageBaseURI = { uri: "https://img.heroicminds.live/" };
    // if (audioPlaybackDetails !== null) {
    // 	console.log(
    // 		"current poss: " +
    // 			millisToMinutesAndSeconds(audioPlaybackDetails.position)
    // 	);
    // 	console.log(
    // 		"Total duration: " +
    // 			millisToMinutesAndSeconds(audioPlaybackDetails.duration)
    // 	);
    // }

    const pauseEpisodeHandler = (sound: Audio.Sound) => {
        pauseEpisode(sound).then(() => {
            setIsPlayingHandler(false);
        });
    };

    const playFromPauseHandler = (sound: Audio.Sound, position: number) => {
        playFromPause(sound, position).then(() => {
            setIsPlayingHandler(true);
        });
    };

    const seekForwardHandler = async (sound: Audio.Sound, position: number) => {
        await seekForward(sound, position);
    };

    const seekBackwardsHandler = async (sound: Audio.Sound, position: number) => {
        await seekBackwards(sound, position);
    };

    const setIsPlayingHandler = (value: boolean) => {
        setIsPlaying(value);
    };


    return (
       <View style={tw.style('pb-4')}>
          <View style={tw.style('mr-5', 'ml-5')}>
             <Slider
                // style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor='black'
                maximumTrackTintColor='gray'
             />
             <View style={tw.style('flex-row', 'justify-between')}>
                <Text style={tw.style('text-black', { fontFamily: 'Gilroy-Bold' })}>{'00:00'}</Text>
                <></>
                <Text style={tw.style({ fontFamily: 'Gilroy-Bold' })}>{'23:00'}</Text>
             </View>
          </View>

          <View style={tw.style('flex-row', 'justify-evenly', 'w-9/12', '-mb-4', 'self-center')}>
             <View>
                <Text style={tw.style('text-xl', 'mt-2', 'text-black')}>
                   {audioPlaybackDetails !== null ? (
                      millisToMinutesAndSeconds(audioPlaybackDetails.position)
                   ) : (
                      <></>
                   )}
                </Text>
             </View>
             <View>
                <Pressable
                   onPress={() => {
                      seekBackwardsHandler(sound, audioPlaybackDetails.position)
                   }}>
                   <LeftSeek />
                </Pressable>
             </View>
             <View style={tw.style('-mt-3')}>
                <Pressable
                   onPress={() => {
                      isPlaying
                         ? pauseEpisodeHandler(sound)
                         : playFromPauseHandler(sound, audioPlaybackDetails.position)
                   }}>
                   <Ionicons name={isPlaying ? 'pause' : 'play'} size={40} color='black' />
                </Pressable>
             </View>
             <View>
                <Pressable
                   onPress={() => {
                      seekForwardHandler(sound, audioPlaybackDetails.position)
                   }}>
                   <RightSeek />
                </Pressable>
             </View>
             <View>
                <Text style={tw.style('text-xl', 'mt-2', 'text-black')}>
                   {audioPlaybackDetails !== null ? (
                      millisToMinutesAndSeconds(audioPlaybackDetails.duration)
                   ) : (
                      <></>
                   )}
                </Text>
             </View>
          </View>
       </View>
    )
};

export default PostMusicPlayerBar;
