import * as React from "react";
import { ScrollView, Text, SafeAreaView, View } from "react-native";
import tw from "../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
// import { Container,Button } from 'native-base';
import ContactDetail from "../components/ContactDetail";
import SingleWordHeader from "../components/SingleWordHeader";

const ContactScreen = (props: any) => {


    return (
        <View >
            <SingleWordHeader navigation={props.navigation} headerName={'Contact Us'} />
            <ScrollView>
                <ContactDetail navigation={props.navigation} />
            </ScrollView>
        </View>


    );

}

export default ContactScreen;