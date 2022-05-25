import React from "react";
import { ScrollView, Text, SafeAreaView, View, ImageBackground, Pressable, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import tw from "../lib/tailwind";
import { signOut } from "../hooks/useAuth";
import { AuthContext } from "../context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


type NotificationScreenNavigationProps = {
    ContactScreen:any,
    TcScreen:any
    AccountSettingScreen: any
    NotificationSettingsScreen:any
};

interface SettingsNameProps {
	navigateToChangePassword(): any;
	navigateToSendFeedBack(): any;
}

const SettingsNewDetail = ({
    navigation,
}: NativeStackScreenProps<NotificationScreenNavigationProps>, props: SettingsNameProps) => {

    const image = { uri: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg" };

    const goToContactScreen = () => {
        navigation.navigate('ContactScreen');
    }

    const goToAccountSettings = () => {
        navigation.navigate('AccountSettingScreen');
    }

    const goToTcScreen = () => {
        navigation.navigate('TcScreen');
    }

    const goToNotificationSettingScreen = () => {
        navigation.navigate('NotificationSettingsScreen');
    }

    const windowHeight = Dimensions.get('window').height;

    const { navigateToChangePassword, navigateToSendFeedBack } = props;
     const { user, setUser } = React.useContext(AuthContext);

     const setUserHandler = (value: any) => {
          setUser(value);
     };

	const signOutHandler = () => {
      
          signOut()
               .then(() => {() =>
               
                    setUserHandler(null);
               })
               .catch(() => {
                    // error signing out
               });
     };

    return (
        <View style={tw.style("flex", "flex-col", {height:windowHeight})}>
            <ScrollView>
                <View style={tw.style("flex-1", "border-t-2", "border-gray-200",  "border-b-2")}>
                    <Pressable style={tw.style("mr-5", "ml-5", "mt-7", "flex-row")} onPress={goToAccountSettings}>
                        <View style={tw.style("w-11/12")}>
                            <Text style={tw.style("text-xl", {fontFamily: "Gilroy-Medium"})}>
                                {"Account/Profile Settings"}
                            </Text>
                        </View>
                        <View style={tw.style("w-1/12")}>
                            <Pressable style={tw.style("h-10", "mb-2")} >
                                <Ionicons name="chevron-forward-outline" size={35}
                                    color="black" />
                            </Pressable>
                        </View>
                    </Pressable>

                    <Pressable style={tw.style("mr-5", "ml-5", "flex-row")} onPress={goToNotificationSettingScreen}>
                        <View style={tw.style("w-11/12")}>
                            <Text style={tw.style("text-xl", {fontFamily: "Gilroy-Medium"})}>
                                {"'Remind Me'"}
                            </Text>
                        </View>
                        <View style={tw.style("w-1/12")}>
                            <View style={tw.style("h-10", "mb-2")}>
                                <Ionicons name="chevron-forward-outline" size={35}
                                    color="black" />
                            </View>
                        </View>
                    </Pressable>
                </View>
                <View style={tw.style("flex-1", "border-gray-200",  "border-b-2")}>
                    <Pressable style={tw.style("mr-5", "ml-5", "mt-7", "flex-row")} onPress={goToContactScreen}>
                        <View style={tw.style("w-11/12")}>
                            <Text style={tw.style("text-xl", {fontFamily: "Gilroy-Medium"})}>
                                {"Contact Us"}
                            </Text>
                        </View>
                        <View style={tw.style("w-1/12")}>
                            <View style={tw.style("h-10", "mb-2")}>
                                <Ionicons name="chevron-forward-outline" size={35}
                                    color="black" />
                            </View>
                        </View>
                    </Pressable>

                    <Pressable style={tw.style("mr-5", "ml-5", "flex-row")} onPress={goToTcScreen}>
                        <View style={tw.style("w-11/12")}>
                            <Text style={tw.style("text-xl", {fontFamily: "Gilroy-Medium"})}>
                                {"See Terms and Privacy"}
                            </Text>
                        </View>
                        <View style={tw.style("w-1/12")}>
                            <View style={tw.style("h-10", "mb-2")}>
                                <Ionicons name="chevron-forward-outline" size={35}
                                    color="black" />
                            </View>
                        </View>
                    </Pressable>
                </View>
                <View style={tw.style("flex-1")}>
                    <Pressable style={tw.style("mr-5", "ml-5", "mt-7", "flex-row")} onPress={() => {
						signOutHandler()
					}}>
                        <View style={tw.style("w-11/12")}>
                            <Text style={tw.style("text-xl", {fontFamily: "Gilroy-Medium"})}>
                                {"Log Out"}
                            </Text>
                        </View>
                    </Pressable>
                </View>
                
            </ScrollView>

            <View style={tw.style("flex", "flex-grow")}>
                <View style={tw.style("h-20", "justify-end")}>
                    <Pressable style={tw.style("mb-10")}>
                        <Text style={tw.style("align-bottom", "text-md", "text-center", {fontFamily: "Gilroy-Bold",color: "#A4A4A4"})}>
                            {"Cancel Subscription"}
                        </Text>
                    </Pressable>
                    <TouchableOpacity style={tw.style("mr-5", "ml-5","rounded-xl","bg-black", "flex", "justify-center","items-center")}>
                        
                            <Text style={tw.style("text-md", "text-center", "text-white", "p-4",
                            {fontFamily: "Gilroy-Medium"})}>
                                {"Deactivate Account"}
                            </Text>
                 
                    </TouchableOpacity>
                </View>
            </View>
         </View>


    );
};

export default SettingsNewDetail;
