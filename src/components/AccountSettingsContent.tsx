import * as React from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import tw from "../lib/tailwind";
import { signOut } from "../hooks/useAuth";
import { AuthContext } from "../context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Flex } from "native-base";
import PencilIconSVG from "./SVGs/PencilIconSVG";
import * as ImagePicker from 'expo-image-picker';

type NotificationScreenNavigationProps = {
  ContactScreen: any;
  TcScreen: any;
  AccountSettingScreen: any;
};

const AccountSettingsContent = ({
  navigation,
}: NativeStackScreenProps<NotificationScreenNavigationProps>) => {
  const defaultImage = {
    uri:
      "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg",
  };

  const [name, setName] = React.useState('Ben Faneli');
  const [handle, sethandle] = React.useState('@benfaneli');
  const [email, setEmail] = React.useState('BenFanelli82@gmail.com')
  const [bio, setBio] = React.useState('Ben');
  const [age, setAge] = React.useState('22');
  const [city, setCity] = React.useState('Waterloo,ON,Canada');
  const [coutry, setCountry] = React.useState('Canada');
  const [nameD, setNameD] = React.useState(false)
  const [bioD, setBioD] = React.useState(false);
  const [handleD, sethandleD] = React.useState(false);
  const [emailD, setEmailD] = React.useState(false);
  const [ageD, setAged] = React.useState(false)
  const [cityD, setCityD] = React.useState(false)
  const [countryD, setCountryD] = React.useState(false)
  const [profileImage, setProfileImage] = React.useState(null);


  const goToContactScreen = () => {
    navigation.navigate("ContactScreen");
  };

  const goToAccountSettings = () => {
    navigation.navigate("AccountSettingScreen");
  };

  const goToTcScreen = () => {
    navigation.navigate("TcScreen");
  };

  const pickImage = async () => {

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.cancelled) {
      setProfileImage({ uri: result.uri });
    }
  };


  return (
    <View>

      <View
        style={tw.style(
          'flex-1'
        )}
      >
        <View style={tw.style("w-40", "h-40", "mt-8", "self-center")}>
          <View style={tw.style("flex-1")}>
            <ImageBackground
              source={!profileImage ? defaultImage : profileImage}
              imageStyle={tw.style("rounded-lg")}
              style={tw.style({ width: undefined, height: undefined, flex: 1 })}
            />
          </View>
          <Pressable onPress={pickImage} style={tw.style('absolute bottom-1 right-1')}>
            <PencilIconSVG />
          </Pressable>
        </View>

      </View>
      <View style={tw.style('mt-4')}>
        <View style={tw`m-5`}>
          <View style={tw.style()}>
            <Text
              style={tw.style("text-base", "leading-6", 'text-lightYellow', {
                fontFamily: "Gilroy-Medium",
              })}
            >
              Full Name
            </Text>
            <View
              style={tw.style(
                "mt-2",
                "flex-row",
                "rounded-xl",
                "h-13",
                "pl-4",
                "flex-1",
                'text-lightYellow',
                {
                  backgroundColor: 'rgba(233,216,166,0.1)',
                }
              )}
            >
              <TextInput
                style={tw.style("flex-1", "text-lightYellow")}
                value={name}
                underlineColorAndroid="transparent"
                onChangeText={text => setName(text)}
                editable={nameD}
              />
              <Pressable style={tw.style("p-4")} onPress={() => setNameD(true)}>
                <Ionicons
                  style={tw.style("justify-end", "text-lightYellow")}
                  name="ios-pencil"
                  size={20}
                />
              </Pressable>
            </View>
          </View>

        </View>
        <View style={tw.style("mx-5")}>
          <Text
            style={tw.style("text-base", "leading-4", 'text-lightYellow', {
              fontFamily: "Gilroy-Medium",
            })}
          >
            Handle
          </Text>
          <View
            style={tw.style(
              "mt-2",
              "flex-row",
              "rounded-xl",
              "h-13",
              "pl-4",
              "flex-1",
              {
                backgroundColor: 'rgba(233,216,166,0.1)',
              }
            )}
          >
            <TextInput
              style={tw.style("flex-1", 'text-lightYellow',)}
              value={handle}
              underlineColorAndroid="transparent"
              onChangeText={text => sethandle(text)}
              editable={handleD}
            />
            <Pressable style={tw.style("p-4")} onPress={() => sethandleD(true)}>
              <Ionicons
                style={tw.style("justify-end", 'text-lightYellow',)}
                name="ios-pencil"
                size={20}
              />
            </Pressable>
          </View>
        </View>
        <View style={tw.style("mx-5")}>
          <View style={tw.style("my-5")}>
            <Text
              style={tw.style("text-base", "leading-6", 'text-lightYellow', {
                fontFamily: "Gilroy-Medium",
              })}
            >
              Email
            </Text>
            <View
              style={tw.style(
                "mt-2",
                "flex-row",
                "rounded-xl",
                "h-13",
                "pl-4",
                "flex-1",
                {
                  backgroundColor: 'rgba(233,216,166,0.1)',
                }
              )}
            >
              <TextInput
                style={tw.style("flex-1", 'text-lightYellow')}
                value={email}
                editable={false}
                underlineColorAndroid="transparent"
              />
              <Pressable style={tw.style("p-4")} onPress={() => setEmailD(true)}>
                <Ionicons
                  style={tw.style("justify-end", "text-lightYellow")}
                  name="ios-pencil"
                  size={20}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={tw.style("mx-5")}>
          <View >
            <Text
              style={tw.style("text-base", "leading-6", 'text-lightYellow', {
                fontFamily: "Gilroy-Medium",
              })}
            >
              Age
            </Text>
            <View
              style={tw.style(
                "mt-2",
                "flex-row",
                "rounded-xl",
                "pl-4",
                'text-lightYellow',
                {
                  backgroundColor: 'rgba(233,216,166,0.1)',
                }
              )}
            >
              <TextInput
                style={tw.style('flex-1', 'text-lightYellow',)}
                keyboardType="numeric"
                value={age}
                underlineColorAndroid="transparent"
                onChangeText={text => setAge(text)}
                editable={ageD}

              />
              <Pressable style={tw.style("p-4",)} onPress={() => setAged(true)}>
                <Ionicons
                  style={tw.style("justify-end", 'text-lightYellow')}
                  name="ios-pencil"
                  size={20}
                />
              </Pressable>
            </View>
          </View>
          <View style={tw.style("my-5")} >
            <Text
              style={tw.style("text-base", "leading-6", 'text-lightYellow', {
                fontFamily: "Gilroy-Medium",
              })}
            >
              Country
            </Text>
            <View
              style={tw.style(
                "flex-row",
                "rounded-xl",
                "mt-2",
                "pl-4",

                {
                  backgroundColor: 'rgba(233,216,166,0.1)',
                }
              )}
            >
              <TextInput
                style={tw.style('flex-1', 'text-lightYellow')}
                value={coutry}
                underlineColorAndroid="transparent"
                onChangeText={text => setCountry(text)}
                editable={countryD}

              />
              <Pressable style={tw.style("p-4")} onPress={() => { setCountryD(true) }}>
                <Ionicons
                  style={tw.style("justify-end", 'text-lightYellow')}
                  name="ios-pencil"
                  size={20}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={tw.style("mx-5")}>
          <Text
            style={tw.style("text-base", "leading-6", 'text-lightYellow', {
              fontFamily: "Gilroy-Medium",
            })}
          >
            Bio
          </Text>
          <View
            style={tw.style(
              "mt-2",
              "flex-row",
              "rounded-xl",
              "h-13",
              "pl-4",
              "flex-1",
              {
                backgroundColor: 'rgba(233,216,166,0.1)',
              }
            )}
          >
            <TextInput
              style={tw.style("flex-1", 'text-lightYellow', { height: 50 })}
              value="Bio"
              underlineColorAndroid="transparent"
              onChangeText={text => sethandle(text)}
              editable={handleD}
            />
            <Pressable style={tw.style("p-4")} onPress={() => sethandleD(true)}>
              <Ionicons
                style={tw.style("justify-end", 'text-lightYellow')}
                name="ios-pencil"
                size={20}
              />
            </Pressable>
          </View>
        </View>


      </View>


      <View style={tw.style('my-10')}>
        <View style={tw.style()}>
          <TouchableOpacity
            style={tw.style(
              "rounded-xl",
              "flex",
              'w-26',
              'mx-auto',
              "justify-center",
              "items-center",
              'border',
              'border-lightYellow',
            )}
          >
            <Text
              style={tw.style("text-base", "text-center", "text-lightYellow",
                'p-3', {
                fontFamily: "Gilroy-Medium",
              })}
            >
              {"Save"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={tw.style()}>
        <View style={tw.style("h-20",)}>
          <TouchableOpacity
            style={tw.style(
              "mr-5",
              "ml-5",
          
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
              {"Save"}
            </Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </View >
  );
};

export default AccountSettingsContent;
