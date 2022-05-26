
import React, { Component, useEffect, useState } from "react";
import { View, Text, Pressable, TouchableOpacity, Image, ImageBackground, Platform } from "react-native";
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
import { Modal } from "./ProfileModal";
import ProfileModalHeader from "./ProfileModalHeader";

interface Props {
  CloseUploadAudioModal: () => any
  navigation: any
  isAudioRecorded: Boolean
  updateAudioRecordingState: Function
  setRecordedAudioParentUri: Function //Set Audio URI in ProfileContent
}
const UploadAudio = (props: Props) => {

  const [recordingEnable, setRecordingEnable] = useState(false);
  const [recordAudio, setAudioRecording] = useState<Audio.Recording>(new Audio.Recording())
  const [duration, setDuration] = useState('00');
  const [recordedURI, setrecordedURI] = useState('');
  const [playAudio, setPlayAudio] = useState(false);
  const [timeLapse, setTimeLapse] = useState('')

  useEffect(() => {
    return () => {
      unloadRecording()
    }
  }, [])

  useEffect(() => {
    recordedURI != '' && reRecordAudio()
  }, [recordAudio])

  //Unload Recording if Modal is closed while Recording
  const unloadRecording = async () => {
    const status = await recordAudio.getStatusAsync()
    if (status.isRecording) {
      recordAudio.stopAndUnloadAsync()

    }

  }
  const goBack = () => {
    props.CloseUploadAudioModal();
  }

  const goToPlayAudio = () => {
    setPlayAudio(true)
  }

  async function startRecording() {
    try {
      //Clear old Timer
      setTimeLapse('')

      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      await recordAudio.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      //Set Listener Interval
      await recordAudio.setProgressUpdateInterval(1000)

      //Add Listener for Recorder
      recordAudio.setOnRecordingStatusUpdate(updateRecorderTimer)

      //Start Recording
      await recordAudio.startAsync();

      setRecordingEnable(true);
    } catch (err) {
      console.error("Failed to start recording", err)
    }
  }

  const getMMSSFromMillis = (millis: number) => {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = (number: number) => {
      const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
      return string;
    };
    return padWithZero(minutes) + ":" + padWithZero(seconds);
  }

  const updateRecorderTimer = (status: Audio.RecordingStatus) => {
    const time = getMMSSFromMillis(status.durationMillis)
    setTimeLapse(time)
  }

  const clearRecording = () => {
    // Create a new instance of Audio
    setAudioRecording(new Audio.Recording())
  }

  /**
   * Re Record Audio
   */
  const reRecordAudio = async () => {

    //Clear old recording
    setrecordedURI('');

    setRecordingEnable(true);

    await recordAudio.prepareToRecordAsync(
      Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
    );
    //Add Listener for Recorder Status
    recordAudio.setOnRecordingStatusUpdate(updateRecorderTimer)

    //Start Recording
    await recordAudio.startAsync();
  }


  async function stopRecording() {
    setRecordingEnable(false);
    await recordAudio.stopAndUnloadAsync();
    var ms = recordAudio._finalDurationMillis
    var min = Math.floor((ms / 1000 / 60) << 0)
    var sec = Math.floor((ms / 1000) % 60)
    if (min > 0) {
      setDuration(min + " min " + sec + " sec");
    } else {
      setDuration(sec + " sec");
    }
    const url = recordAudio.getURI();
    setrecordedURI(url!);

    //Clear Time Update Listener
    recordAudio.setOnRecordingStatusUpdate(null)

  }

  return (


    <View >
      <Modal isVisible={true} >
        <Modal.Container>
          <Modal.Body>
            {!playAudio && <View style={tw.style(`mb-10 mt-2`)}>


              <ProfileModalHeader goBack={goBack} />
              <View style={tw.style("mt-10")}>

                <Text
                  style={tw.style("text-sm", "mt-2", "text-center", {
                    fontFamily: 'Gilroy-SemiBold'
                  })}
                >
                  {recordingEnable ? `Recording.... ${timeLapse}s` : recordedURI != '' ? `Recorded ${timeLapse}s` : 'Record'}

                </Text>
              </View>
              <View >
                <View style={tw.style("mt-4")}>
                  <Image
                    style={tw.style('w-4/5', {
                      alignSelf: 'center',

                      resizeMode: "contain",
                    })}
                    source={require("../../assets/record.png")}
                  />
                </View>

                {/* Buttons */}
                <TouchableOpacity
                  onPress={recordingEnable ? stopRecording : recordedURI != '' ? clearRecording : startRecording}
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
                    {recordingEnable ? "Stop" : recordedURI != '' ? 'Re record' : 'Record'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={goToPlayAudio}
                  disabled={recordingEnable || recordedURI == ''}
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
                    style={tw.style("text-sm", "text-center", "p-2 text-lightYellow")}
                  >
                    {"Done"}
                  </Text>
                </TouchableOpacity>
              </View>

            </View>}
            {
              playAudio &&

              <PlayAudio
                audioFile={recordedURI}
                CloseUploadAudioModal={props.CloseUploadAudioModal}
                audioDuration={duration}
                updateAudioRecordingState={props.updateAudioRecordingState}
                setRecordedAudioParentUri={props.setRecordedAudioParentUri}
              />
            }
          </Modal.Body>
        </Modal.Container>
      </Modal>

    </View >

  );
};

export default UploadAudio;
