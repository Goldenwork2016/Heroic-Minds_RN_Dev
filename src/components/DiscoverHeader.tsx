import React from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import tw from "../lib/tailwind";
import { signOut } from "../hooks/useAuth";
import { AuthContext } from "../context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type DiscoverScreenNavigationProps = {
	Discover:any,
     ProfileScreen:any
     NotificationScreen:any
};

const DiscoverHeader = ({
	navigation,
}: NativeStackScreenProps<DiscoverScreenNavigationProps>) => {
     
     const image = { uri: "https://reactjs.org/logo-og.png" };
	// const { navigateToSettings } = props;
     const { user, setUser } = React.useContext(AuthContext);

     const setUserHandler = (value: any) => {
          setUser(value);
     };
     const signOutHandler = () => {

     };
     const goToProfileScreen = () => {
          navigation.navigate('ProfileScreen');
         }
     
         const goToNotificationScreen = () => {
          navigation.navigate('NotificationScreen');
         }
  

    // const onIconPress=() => {
          
    //       navigation.navigate('Discover');
    // }


     return (
          
          <View style={tw.style("mt-14", "flex-row", "border-b-2", "mr-5","ml-5","border-gray-200")}>
               <View style={tw.style("flex-row", "justify-start", "w-1/2","leading-10",)}>
                    <Text
                         style={tw.style("text-2xl", "pb-3.5", {
                         	fontFamily: "Gilroy-Bold",
                              color: "#0B0B0B",
                         })}
                    >
                         Discover
                    </Text>
               </View>

               {/* <View style={tw.style("flex-row", "justify-end", "w-1/2","mr-5")}>
                    <Pressable >
                    <Ionicons
                              style={tw.style("px-2")}
                              name="search"
                              size={30}
                              color="black"
                         />
                          </Pressable>
                          <Pressable onPress={goToNotificationScreen}>
                         <Ionicons 
                              style={tw.style("px-2", "mr-2")}
                              name="notifications-outline"
                              size={30}
                              color="black"
                         />
                   </Pressable>
                   <Pressable style={tw.style("w-8", "h-8",)} onPress={goToProfileScreen}>
                   <ImageBackground 
                                source={image}
                                imageStyle={tw.style("rounded-full")}
                                style={tw.style({ width: "100%", height: "100%" })}
                            />
                   </Pressable>
                
               </View> */}
          </View>
     );
};

export default DiscoverHeader;
