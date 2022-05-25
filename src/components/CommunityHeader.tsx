import React from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import tw from "../lib/tailwind";
import { signOut } from "../hooks/useAuth";
import { AuthContext } from "../context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type CommunityScreenNavigationProps = {
     Discover: any
     ProfileScreen: any
     NotificationScreen: any
};

const CommunityHeader = ({
     navigation,
}: NativeStackScreenProps<CommunityScreenNavigationProps>) => {

     const image = { uri: "https://reactjs.org/logo-og.png" };
     // const { navigateToSettings } = props;
     const { user, setUser } = React.useContext(AuthContext);

     const setUserHandler = (value: any) => {
          setUser(value);
     };
     const signOutHandler = () => {

     };

     const onIconPress = () => {
          navigation.navigate('Discover');
     }

     const goToProfileScreen = () => {
          navigation.navigate('ProfileScreen');
     }

     const goToNotificationScreen = () => {
          navigation.navigate('NotificationScreen');
     }


     return (

          <View style={tw.style("flex-row", "ml-5", "mr-5")}>
               <View style={tw.style("flex-row", "justify-start", "w-1/2", "leading-10")}>
                    <Text
                         style={tw.style("text-2xl", "pb-3.5", 'text-lightYellow', {
                              fontFamily: "Gilroy-Bold",
                         })}
                    >
                         Community
                    </Text>
               </View>

               <View style={tw.style("flex-row", "justify-end", "w-1/2",)}>
                    {/* <Pressable onPress={onIconPress}>
                         <Ionicons
                              style={tw.style("px-2")}
                              name="search"
                              size={30}
                              color="black"
                         />
                    </Pressable> */}
                    <Pressable onPress={goToNotificationScreen}>
                         <Ionicons
                              style={tw.style("px-2", "mr-2")}
                              name="notifications-outline"
                              size={30}
                              color="#E9D8A6"
                         />
                    </Pressable>

                    {/* <Pressable onPress={navigateToSettings}> */}
                    <Pressable style={tw.style("w-8", "h-8",)} onPress={goToProfileScreen}>
                         <ImageBackground
                              source={image}
                              imageStyle={tw.style("rounded-full")}
                              style={tw.style('text-lightYellow', { width: "100%", height: "100%" })}
                         />
                    </Pressable>




                    {/* </Pressable> */}
               </View>
          </View>
     );
};

export default CommunityHeader;
