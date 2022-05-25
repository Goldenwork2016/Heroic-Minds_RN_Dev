import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ImageBackground, Button, Pressable, FlatList, Image } from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";
import DiscoverHeader from '../components/DiscoverHeader';
import MasonryList from '@react-native-seoul/masonry-list';



import tw from "../lib/tailwind";
const DiscoverScreen = (props:any) => {
    const [post, onCheckChange] = useState(true);
    const [people, onCheckPeople] = useState(false);
    const [search,setSearch]  = useState('')
    const discoverPost = () => {
        onCheckChange(true);
        onCheckPeople(false);
    }

    const discoverPeople = () => {
        onCheckPeople(true);
        onCheckChange(false);

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
    return (
        <>
            <DiscoverHeader navigation={props.navigation}/>
            <View style={tw.style("mr-5", "ml-5",)}>
                <SearchBar
                    lightTheme
                    placeholder="Type to search..."
                    searchIcon={false}
                    placeholderTextColor='black'
                    inputStyle={{ backgroundColor: 'white', fontSize: 15 }}
                    // containerStyle={{backgroundColor: 'white', borderWidth: 0}}
                    inputContainerStyle={{ backgroundColor: 'white', borderWidth: 0, height: 20 }}
                    containerStyle={{
                        backgroundColor: 'white',
                        height: 45,
                        //width:500,
                        // marginLeft: 20,
                        padding: 10,
                        borderWidth: 0, //no effect
                        shadowColor: 'white', //no effect
                        borderBottomColor: 'black',
                        borderTopColor: 'transparent'
                    }}
                onChangeText={setSearch}
                value={search}
                />
            </View>
            <View style={tw.style("flex-row", "justify-between","mr-10")}>
            <Pressable style={tw.style("ml-10", "items-center",
                    "justify-center",
                    "mt-3",
                    "px-2",
                    "rounded-lg", "h-7",)} onPress={discoverPost}>
                    <Text style={tw.style("text-base")}>{'Library'}</Text>

                </Pressable>
                <Pressable style={tw.style( "items-center",
                    "justify-center",
                    "mt-3",
                    "px-2",
                    "rounded-lg", "h-7", )} onPress={discoverPost}>
                    <Text style={tw.style("text-base", post == true ?"font-bold" : "font-normal")}>{'Community'}</Text>

                </Pressable>

                <Pressable style={tw.style( "items-center",
                    "justify-center",
                    "mt-3",
                    "px-2",
                    "rounded-lg", "h-7", )} onPress={discoverPeople}>
                    <Text style={tw.style("text-base", post == false ?"font-bold" : "font-normal")}>{'People'}</Text>

                </Pressable>
            </View>

            {post == true ? <View><ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={tw.style("flex-row" )}>
                {/* <View style={tw.style()}> */}
                
                <View style={tw.style("ml-5", "border-2",  "items-center",
                "justify-center",
                "mt-3",
                "px-2",
                "rounded-lg", "h-7", "bg-black")} >
                <Text style={tw.style("text-white")}>{'Fear'}</Text>

            </View>
            <View style={tw.style( "ml-3", "border-2",  "items-center",
                "justify-center",
                "mt-3",
                "px-2",
                "rounded-lg", "h-7", "bg-black")} >
                <Text style={tw.style("text-white")}>{'Love'}</Text>

            </View><View style={tw.style( "ml-3", "border-2",  "items-center",
                "justify-center",
                "mt-3",
                "px-2",
                "rounded-lg", "h-7", "bg-black")} >
                <Text style={tw.style("text-white")}>{'Purpose'}</Text>

            </View><View style={tw.style( "ml-3", "border-2", "items-center",
                "justify-center",
                "mt-3",
                "px-2",
                "rounded-lg", "h-7", "bg-black")} >
                <Text style={tw.style("text-white")}>{'Meaning'}</Text>

            </View><View style={tw.style( "ml-3", "border-2",  "items-center",
                "justify-center",
                "mt-3",
                "px-2",
                "rounded-lg", "h-7", "bg-black")} >
                <Text style={tw.style("text-white")}>{'Fear'}</Text>

            </View><View style={tw.style( "ml-5", "border-2",  "items-center",
                "justify-center",
                "mt-3",
                "px-2",
                "rounded-lg", "h-7", "bg-black")} >
                <Text style={tw.style("text-white")}>{'Fear'}</Text>
                
            </View></ScrollView></View>: null}

            {post == false ? <ScrollView>
                <View style={tw.style("mt-5",)}>
                    <View style={tw.style("flex-row", "justify-start", "ml-5")}>
                        <View style={tw.style("w-12", "h-12", "mt-3")}>
                            <ImageBackground
                                source={image}
                                imageStyle={tw.style("rounded-full")}
                                style={tw.style({ width: "100%", height: "100%" })}
                            />
                        </View>
                        <View style={tw.style("m-3","flex-1")}>
                            <View style={tw.style("flex-row")}>
                                <Text
                                    style={tw.style("text-xl", "leading-9", "break-words", {
                                        fontFamily: "Gilroy-Bold",
                                        color: "#0B0B0B",
                                    })}
                                >
                                    {"Ben Fanelli"}
                                </Text>
                                {/* <View style={tw.style("ml-3","bg-black", "h-6", "rounded-full", )}>
                                <Text
                                    style={tw.style( "text-sm", "break-words",  "text-center", "px-5",{
                                        fontFamily: "Gilroy-Medium",
                                        
                                        color: "#fff",
                                        
                                    })}
                                >
                                    {" Love"}
                                </Text>
                                </View> */}
                            </View>
                            <View>
                                <Text
                                    style={tw.style("text-sm", "leading-1", "break-words", {
                                        fontFamily: "Gilroy-Medium",
                                        color: "#c1c1c1",

                                    })}
                                >
                                    {"2 hours ago"}
                                </Text>
                            </View>
                        </View>
                        <View style={tw.style("mr-5", "mt-3", "flex-1", "px-1","py-1",)}>

                        <Pressable
                        style={tw.style(
                            "items-center",
                            "justify-center",

                            "rounded-lg",
                            {
                                fontFamily: "Gilroy-Regular",
                                backgroundColor: "#070B24",
                            }
                        )}
                        // onPress={onLoginButtonPress}
                        >
                        <Text
                            style={tw.style("text-sm", "p-2", {
                                fontFamily: "Gilroy-SemiBold",
                                color: "white",
                            })}
                        >
                            {"Subscribe"}
                        </Text>
                        </Pressable>

                        

                        </View>
                    </View>
                    <View style={tw.style("flex-row", "justify-start", "ml-5")}>
                        <View style={tw.style("w-12", "h-12", "mt-3")}>
                            <ImageBackground
                                source={image}
                                imageStyle={tw.style("rounded-full")}
                                style={tw.style({ width: "100%", height: "100%" })}
                            />
                        </View>
                        <View style={tw.style("m-3","flex-1")}>
                            <View style={tw.style("flex-row")}>
                                <Text
                                    style={tw.style("text-xl", "leading-9", "break-words", {
                                        fontFamily: "Gilroy-Bold",
                                        color: "#0B0B0B",
                                    })}
                                >
                                    {"Ben Fanelli"}
                                </Text>
                                {/* <View style={tw.style("ml-3","bg-black", "h-6", "rounded-full", )}>
                                <Text
                                    style={tw.style( "text-sm", "break-words",  "text-center", "px-5",{
                                        fontFamily: "Gilroy-Medium",
                                        
                                        color: "#fff",
                                        
                                    })}
                                >
                                    {" Love"}
                                </Text>
                                </View> */}
                            </View>
                            <View>
                                <Text
                                    style={tw.style("text-sm", "leading-1", "break-words", {
                                        fontFamily: "Gilroy-Medium",
                                        color: "#c1c1c1",

                                    })}
                                >
                                    {"2 hours ago"}
                                </Text>
                            </View>
                        </View>
                        <View style={tw.style("mr-5",  "mt-3", "flex-1", "px-1","py-1",)}>

                        <Pressable
                        style={tw.style(
                            "items-center",
                            "justify-center",

                            "rounded-lg",
                            {
                                fontFamily: "Gilroy-Regular",
                                backgroundColor: "#070B24",
                            }
                        )}
                        // onPress={onLoginButtonPress}
                        >
                        <Text
                            style={tw.style("text-sm",  "p-2", {
                                fontFamily: "Gilroy-SemiBold",
                                color: "white",
                            })}
                        >
                            {"Subscribe"}
                        </Text>
                        </Pressable>

                        </View>
                    </View>
                    <View style={tw.style("flex-row", "justify-start", "ml-5")}>
                        <View style={tw.style("w-12", "h-12", "mt-3")}>
                            <ImageBackground
                                source={image}
                                imageStyle={tw.style("rounded-full")}
                                style={tw.style({ width: "100%", height: "100%" })}
                            />
                        </View>
                        <View style={tw.style("m-3", "flex-1")}>
                            <View style={tw.style("flex-row")}>
                                <Text
                                    style={tw.style("text-xl", "leading-9", "break-words", {
                                        fontFamily: "Gilroy-Bold",
                                        color: "#0B0B0B",
                                    })}
                                >
                                    {"Ben Fanelli"}
                                </Text>
                                {/* <View style={tw.style("ml-3","bg-black", "h-6", "rounded-full", )}>
                                <Text
                                    style={tw.style( "text-sm", "break-words",  "text-center", "px-5",{
                                        fontFamily: "Gilroy-Medium",
                                        
                                        color: "#fff",
                                        
                                    })}
                                >
                                    {" Love"}
                                </Text>
                                </View> */}
                            </View>
                            <View>
                                <Text
                                    style={tw.style("text-sm", "leading-1", "break-words", {
                                        fontFamily: "Gilroy-Medium",
                                        color: "#c1c1c1",

                                    })}
                                >
                                    {"2 hours ago"}
                                </Text>
                            </View>
                        </View>
                        
                        <View style={tw.style("mr-5","mt-3", "flex-1", "px-1","py-1",)}>

                        

                        <Pressable
                        style={tw.style(
                            "items-center",
                            "justify-center",
                            
                            "rounded-lg",
                            {
                                fontFamily: "Gilroy-Regular",
                                backgroundColor: "#e4c166",
                            }
                        )}
                        // onPress={onLoginButtonPress}
                        >
                        <Text
                            style={tw.style("text-sm", "p-2", {
                                fontFamily: "Gilroy-SemiBold",
                                color: "white",
                            })}
                        >
                            {"Subscribed"}
                        </Text>
                        </Pressable>

                        

                        </View>
                    </View>
                </View>
            </ScrollView> :
                <View style={tw.style("flex-1", "mt-3")}>
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
                            paddingHorizontal: 24,
                            alignSelf: 'stretch',
                        }}
                        numColumns={2}
                        renderItem={({ item }) =>
                            <View style={tw.style("px-2", "py-2")}>
                                <Image
                                    source={{ uri: item.img }}
                                    // imageStyle={tw.style("rounded-full")}
                                    style={tw.style("rounded-xl",{ height: Math.random() < 0.5 ? 150 : 280 })}

                                />
                                <View style={tw.style("px-1", "py-1")}>
                                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={tw.style("font-bold")}>{'In The Beginning '}</Text>
                                    <View style={tw.style("flex-row")}>
                                        <Text style={tw.style("text-gray-400")}>{'John Page'}</Text>
                                        {/* <Text style={tw.style()}>{'Flag'}</Text> */}
                                    </View>
                                </View>
                            </View>
                        }

                    />


                </View>

            }

        </>

    )
}

export default DiscoverScreen;