import React, { useState } from 'react'
import {View, Image, Pressable, Text, ScrollView} from 'react-native'
export default function Slider(): JSX.Element {
    return (
        <>
            <View className="px-6 flex flex-row justify-between items-center" >
                <Text className="text-2xl font-[600] dark:text-white">Hottest News</Text>
                <Text className=" font-[300] text-black/70 dark:text-white/70">See More</Text>
            </View>
            <View className="flex flex-row justify-between items-center p-5">

                <ScrollView horizontal={true}>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item, index) => {
                            return (
                                <View key={index} className="flex flex-col  bg-white/40 dark:bg-black/30 rounded-2xl p-2 mr-2">
                                    <Image
                                        source={require('../assets/image/custom.jpeg')}
                                        className="w-[300] h-[200] rounded-2xl"
                                    />
                                    <View className="flex flex-col py-1">
                                        <View className="flex flex-row justify-between">
                                            <Text className="dark:text-white text-lg font-[200]">Trend No.1</Text>
                                            <Text className="dark:text-white text-lg font-[200]">2 Days Ago</Text>
                                        </View>
                                        <Text className="text-2xl dark:text-white font-[500] mt-3 mb-4 whitespace-pre w-[280]">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </Text>

                                        <View className="flex flex-row justify-between items-center">
                                            <View className="flex flex-row items-center">
                                                <Image source={require('../assets/image/profile.png')} className="w-10 h-10 rounded-full" />
                                                <Text className="dark:text-white text-lg font-[200] ml-2">Erdoğan Yeşil</Text>
                                            </View>
                                            <Pressable className="bg-yellow-400 dark:bg-yellow-500 rounded-full p-2">
                                                <Image source={require('../assets/image/more.png')} className="w-6 h-6" />
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            )
                        })

                    }
                </ScrollView>

            </View>
        </>
    )
}
