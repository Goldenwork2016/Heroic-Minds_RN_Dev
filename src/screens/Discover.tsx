import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ImageBackground, Button, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";
import DiscoverHeader from '../components/DiscoverHeader';
import MasonryList from '@react-native-seoul/masonry-list';
import NotificationIconSVG from '../components/SVGs/NotificationIconSVG'



import tw from "../lib/tailwind";
import { color } from "react-native-elements/dist/helpers";
const DiscoverScreen = (props: any) => {
    const [community, setCommunnity] = useState(true);
    const [people, setPeople] = useState(false);
    const [library, setLibrary] = useState(false);
    const [search, setSearch] = useState('')

    const discoverCommunity = () => {
        setCommunnity(true);
        setPeople(false);
        setLibrary(false)
    }

    const discoverPeople = () => {
        setPeople(true);
        setCommunnity(false);
        setLibrary(false)

    }
    const discoverLibrary = () => {
        setPeople(false);
        setCommunnity(false);
        setLibrary(true)

    }

    const imgArray = [{
        img: 'https://cdn.pixabay.com/photo/2013/07/19/00/18/splashing-165192_960_720.jpg'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_960_720.jpg'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2021/12/26/17/30/beach-6895599_960_720.jpg'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2021/12/12/22/17/red-squirrel-6867105_960_720.jpg'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2022/01/04/19/01/fantastic-6915749_960_720.jpg'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2021/12/26/17/30/beach-6895599_960_720.jpg'
    },

    ]

    const image = { uri: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg" };
    const peopleList = [
        {

            userImg: image,
            name: "Chris Pine",
            accName: '@Chris_notMarvel',
            follow: true
        },
        {

            userImg: image,
            name: "Chris Evans",
            accName: '@Chris_Evans',
            follow: false
        },
        {

            userImg: image,
            name: "Chris Evans",
            accName: '@Chris_Evans',
            follow: false
        },
        {

            userImg: image,
            name: "Chris Pine",
            accName: '@Chris_notMarvel',
            follow: true
        },
        {

            userImg: image,
            name: "Chris Evans",
            accName: '@Chris_Evans',
            follow: false
        }
    ]
    return (

        <View style={{ flex: 1, backgroundColor: '#1C1C1C' }}>
            {/* <DiscoverHeader navigation={props.navigation}/> */}
            <View>
                <View style={tw.style("flex-row", "mt-5", 'items-center', "justify-end", "mr-5", "ml-5")}>
                    <View >
                        <View style={tw.style("mr-5", "ml-5", { backgroundColor: '' })}>
                            <View style={{ position: 'absolute', right: -10, top: -7, paddingHorizontal: 6, backgroundColor: '#000', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#fff' }}>2</Text>
                            </View>

                            <NotificationIconSVG />
                        </View>
                    </View>
                    <Image style={{ borderRadius: 100 }} source={require('../../assets/userImage.png')} />
                </View>
            </View>
            <View style={tw.style("mr-2", "ml-2", "mt-4")}>
                <SearchBar
                    // lightTheme
                    placeholder="Type to search..."
                    searchIcon={false}
                    placeholderTextColor='#E9D8A6'
                    inputStyle={{ backgroundColor: 'transparent', fontSize: 15 }}
                    // containerStyle={{backgroundColor: 'white', borderWidth: 0}}
                    inputContainerStyle={{ backgroundColor: 'transparent', borderWidth: 0, height: 20 }}
                    containerStyle={{
                        backgroundColor: 'rgba(233,216,166,0.1)',
                        height: 45,
                        //width:500,
                        // marginLeft: 20,
                        // padding: 10,
                        borderWidth: 0, //no effect
                        // shadowColor: 'white', //no effect
                        borderRadius: 8,
                        borderBottomColor: 'transparent',
                        borderTopColor: 'transparent'
                    }}
                    onChangeText={setSearch}
                    value={search}
                />
            </View>
            <View style={tw.style("flex-row", "justify-between", "mx-5")}>
                <TouchableOpacity style={tw.style("items-center",
                    "justify-center",
                    "mt-3",
                    "px-2",
                    "rounded-lg", "h-7")} onPress={discoverLibrary}>
                    <Text style={tw.style("text-base", { color: '#E9D8A6' }, library == true ? "font-bold" : "font-normal")}>{'Library'}</Text>
                    <View style={library == true ? { height: 2, width: '100%', backgroundColor: '#E9D8A6' } : null}></View>
                </TouchableOpacity>

                <TouchableOpacity style={tw.style("items-center",
                    "justify-center",
                    "mt-3",
                    "px-2",
                    "rounded-lg", "h-7")} onPress={discoverCommunity}>
                    <Text style={tw.style("text-base", { color: '#E9D8A6' }, community == true ? "font-bold" : "font-normal")}>{'Community'}</Text>
                    <View style={community == true ? { height: 2, width: '100%', backgroundColor: '#E9D8A6' } : null}></View>
                </TouchableOpacity>

                <TouchableOpacity style={tw.style("items-center",
                    "justify-center",
                    "mt-3",
                    "px-2",
                    "rounded-lg", "h-7")} onPress={discoverPeople}>
                    <Text style={tw.style("text-base", { color: '#E9D8A6' }, people == true ? "font-bold" : "font-normal")}>{'People'}</Text>
                    <View style={people == true ? { height: 2, width: '100%', backgroundColor: '#E9D8A6' } : null}></View>
                </TouchableOpacity>
            </View>

            {library == true ?
                <View style={{ flex: 1 }}>
                    <View style={tw.style("flex-1", "mt-5")}>
                        {/* <FlatList
                        data={imgArray}
                        renderItem={({ item }) =>
                            <View style={tw.style("flex-1")}>
                                <ImageBackground
                                    source={{ uri: item.img }}
                                    style={tw.style({ width: 250, height:250})}

                                />
                            </View>

                        }
                    /> */}
                        <MasonryList
                            data={imgArray}
                            ListHeaderComponent={<View />}
                            contentContainerStyle={{
                                alignSelf: 'stretch',
                            }}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <View style={tw.style("px-2", "py-2")}>
                                    <Image
                                        source={{ uri: item.img }}
                                        // imageStyle={tw.style("rounded-full")}
                                        style={tw.style("rounded-xl", { height: 190, })}
                                        resizeMode='cover'

                                    />
                                    <View style={tw.style("px-1", "py-2", "items-center")}>
                                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={tw.style("font-semibold", { fontSize: 16, color: '#E9D8A6' })}>{'In The Beginning '}</Text>

                                        {/* <Text style={{ color: '#E9D8A6' }}>{'John Page'}</Text> */}


                                    </View>
                                </View>
                            }

                        />


                    </View>
                </View>

                : null}
            {community == true ?
                <View style={{ flex: 1 }}>
                    <View style={{ paddingVertical: 10 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={tw.style("flex-row")}>
                            {/* <View style={tw.style()}> */}
                            {['fear', 'love', 'Purpose', 'Meaning', 'fear']?.map((data, index) => {
                                return <View style={tw.style("ml-5", "items-center",
                                    "justify-center",
                                    // "mt-3",
                                    "px-2",
                                    "rounded-lg", "h-7", "bg-black", { borderColor: '#E9D8A6', borderWidth: 1 })} >
                                    <Text style={tw.style("text-white", "capitalize", "font-bold", { color: "#E9D8A6" })}>{data}</Text>

                                </View>
                            })}

                        </ScrollView>
                    </View>
                    <View style={tw.style("flex-1")}>

                        <MasonryList
                            data={imgArray}
                            ListHeaderComponent={<View />}
                            contentContainerStyle={{
                                alignSelf: 'stretch',
                            }}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <View style={tw.style("px-2", "py-2")}>
                                    <Image
                                        source={{ uri: item.img }}
                                        // imageStyle={tw.style("rounded-full")}
                                        style={tw.style("rounded-xl", { height: 194, })}
                                        resizeMode='cover'

                                    />
                                    <View style={tw.style("px-1", "py-2", "items-center")}>
                                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={tw.style("font-semibold", { fontSize: 16, color: '#E9D8A6' })}>{'In The Beginning '}</Text>

                                        <Text style={{ color: '#E9D8A6' }}>{'John Page'}</Text>


                                    </View>
                                </View>
                            }

                        />


                    </View>
                </View>

                : null}

            {people == true ? <ScrollView>
                <View style={tw.style("mt-5")}>
                    {peopleList.map((data, index) => {
                        return <View style={tw.style("flex-row", "justify-start", "items-center", "mx-2", "mt-3", "px-2", "py-2", "rounded-xl", { backgroundColor: 'rgba(233,216,166,0.11)' })}>
                            <View style={tw.style("w-12", "h-12")}>
                                <ImageBackground
                                    source={data.userImg}
                                    imageStyle={tw.style("rounded-full")}
                                    style={tw.style({ width: "100%", height: "100%" })}
                                />
                            </View>
                            <View style={tw.style("ml-3", "flex-1")}>
                                <View style={tw.style("flex-row")}>
                                    <Text
                                        style={tw.style("text-xl", "leading-9", "break-words", "font-semibold", {
                                            color: "#E9D8A6",
                                            fontSize: 16
                                        })}
                                    >
                                        {data.name}
                                    </Text>
                                </View>

                                <Text
                                    style={tw.style({
                                        fontFamily: "Gilroy-Medium",
                                        color: "#E9D8A6",

                                    })}
                                >
                                    {data.accName}
                                </Text>

                            </View>
                            <View style={tw.style()}>

                                <TouchableOpacity
                                    style={tw.style(
                                        "items-center",
                                        "justify-center",
                                        "rounded-lg",
                                        {
                                            fontFamily: "Gilroy-Regular",
                                            backgroundColor: "#070B24",
                                            width: 75
                                        }, data.follow ? styles.subscribeBtnActive : styles.subscribeBtn
                                    )}
                                // onPress={onLoginButtonPress}
                                >
                                    <Text
                                        style={tw.style("text-sm", "p-2", {
                                            fontFamily: "Gilroy-SemiBold",
                                            fontSize: 13,
                                        }, data.follow ? { color: '#000' } : { color: '#E9D8A6' })}
                                    >
                                        {data.follow ? "Following" : "Follow"}
                                    </Text>
                                </TouchableOpacity>



                            </View>
                        </View>
                    })}



                </View>
            </ScrollView> :
                null
            }
        </View>


    )
}
const styles = StyleSheet.create({
    subscribeBtn: {
        borderWidth: 1,
        borderColor: '#E9D8A6',
        color: '#E9D8A6',
        backgroundColor: 'transparent'
    },
    subscribeBtnActive: {
        backgroundColor: '#E9D8A6'
    }
})

export default DiscoverScreen;
