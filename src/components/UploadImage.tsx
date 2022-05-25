import React, {useState} from "react";
import { View, Text, Pressable, Button , Image, TouchableOpacity, ImageBackground} from "react-native";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import tw from "../lib/tailwind";
import GoBack from "./GoBack";
import SingleWordHeader from "./SingleWordHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as ImagePicker from 'expo-image-picker';
import ImageFilters, { Constants } from 'react-native-gl-image-filters';

import { Modal } from "./ProfileModal";
import * as FileSystem from 'expo-file-system';

type UploadImageScreenNavigationProps = {
    CreatePost: any,
    ImageFilter: any
};

interface DefaultValues {
    sepia: number;
    hue: number;
    blur: number;
    sharpen: number;
    negative: number;
    temperature: number;
    brightness: number;
    contrast: number;
    saturation: number;
    exposure: number;
    colorOverlay: Array<number>;
  }


const UploadImage = (props: any, {
    navigation,
}: NativeStackScreenProps<UploadImageScreenNavigationProps>) => {
  
    const [image, setImage] = useState(null);
    const goBack = () => {
        props.CloseUploadImageModal();
    }

    const goToImageFilters = () => {
        props.navigation.navigate('ImageFilter');
    }
    
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
          const base64 = await FileSystem.readAsStringAsync(result.uri, { encoding: 'base64' });
          console.log(base64)
         
       
        }
      };


    return (
        <View>
            <View style={tw.style("flex-row", "mt-10", "ml-5", "mr-5")}>
                <Pressable style={tw.style("w-10", "h-8", "mb-2",)} onPress={goBack}>
                <ImageBackground
                        source={require("../../assets/back.png")}
                        imageStyle={tw.style( "h-8", "w-8",)}
                        style={tw.style({ width: "12%", height: "100%" })}
                    />
                </Pressable>
                <View style={tw.style("flex-1","mr-5")}>
                    <Text style={tw.style("text-lg", "text-black","text-center", { fontFamily: "Gilroy-Bold" })}>{'Upload image or video'}</Text>
                </View>
            </View>
         {!image &&   <Pressable style={tw`bg-gray-200 m-5 h-90  rounded-md `} onPress={pickImage}>
                <Ionicons 
                    style={tw.style("px-2", "text-center", "items-center", "mt-32")}
                    name="images-outline"
                    size={50}
                    color="black"
                />
            </Pressable>}
            <Pressable >

            {image && <Image source={{ uri: image }} style={{ width: 300, height: 300, alignSelf:'center', marginTop:5 }}  />}
            </Pressable>
           
            <TouchableOpacity onPress={goBack}
                    style={tw.style(
                        "m-5",
                        "rounded-xl",
                        "border-2",
                        "border-black",
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
                        {"Continue"}
                    </Text>
                </TouchableOpacity>
            {/* <View style={tw.style("bg-black", "m-5", "rounded-lg", "px-2", "py-2", "text-white", "mb-0",)} >
                <Button title="Continue" color="white" />
            </View> */}

        </View>

    );

}
export default UploadImage;