import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { ImageBackground } from "react-native";
import { Linking, TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({ item, index }) => {

    return (
        <View
            style={{
                height: windowHeight,
                width: windowWidth,
                transform: [{ scaleY: -1 }],

            }}
        >
            <Image
                source={{ uri: item.urlToImage }}
                style={{ height: "45%", resizeMode: "cover", with: windowWidth }}
            />
            <View
                style={{
                    ...styles.description,
                    backgroundColor: "#282C35",
                }}
            >
                <Text style={{ ...styles.title, color: "white" }}>{item.title}</Text>
                <Text style={{ ...styles.content, color: "white" }}>
                    {item.description}
                </Text>
                <Text style={{ color: "white" }}>
                    Short by
                    <Text> {item.autor ?? "unknown"}</Text>
                </Text>
                <ImageBackground
                    blurRadius={30}
                    style={styles.footer}
                    source={{ uri: item.urlToImage }}
                >

                    <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                        <Text style={{ fontSize: 15, color: "white" }}>
                            '{item?.content?.slice(0, 45)}...'
                        </Text>
                        <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
                            Read More
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    content: {
        fontSize: 18,
        paddingBottom: 10,
    },
    footer: {
        height: 80,
        width: windowWidth,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#d7be69",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    description: {
        padding: 15,
        flex: 1,
    },
});

export default SingleNews;
