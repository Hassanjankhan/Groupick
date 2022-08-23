import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen")
const data = [
    {
        "image": "../Assets/IMages/3.png", id: "0"
    },
    {
        "image": "../Assets/IMages/3.png", id: "1"
    },
    {
        "image": "../Assets/IMages/3.png", id: "2"
    },
]

const Indicator = ({ scrollX, Data }) => {
    return <View style={{ flexDirection: "row", }}>
        {
            Data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate: 'clamp'
                })
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.6, 0.9, 0.6],
                    extrapolate: 'clamp'
                })
                return <Animated.View key={i}
                    style={{
                        opacity,
                        backgroundColor: "yellow",
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        margin: 3,
                        transform: [
                            {
                                scale,
                            }
                        ]
                    }}

                />


            })
        }
    </View>
}
export default Indicator