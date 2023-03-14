import { View, Text,Image } from 'react-native'
import React from "react";
export default function Weather(): JSX.Element {
    return (
        <>
            <View className="px-6 flex flex-row justify-between items-center mb-3" >
                <Text className="text-2xl font-[600] dark:text-white">Weather</Text>
                <Text className=" font-[300] text-black/70 dark:text-white/70"></Text>
            </View>
            <View className="mx-5 bg-white/40 dark:bg-black/30 rounded-2xl p-4" >
                <Text className="text-3xl mb-3 font-[300] dark:text-white">Kütahya</Text>
                <View className="flex flex-row">
                    <Image source={require('../assets/image/profile.png')} className="h-20 w-20" />
                    <View className="flex flex-col justify-center  ml-3">
                        <Text className="text-2xl font-[600] dark:text-white">25°</Text>
                        <Text className="text-lg font-[300] dark:text-white">Cloudy</Text>
                    </View>
                </View>
            </View>
        </>
    )
}
