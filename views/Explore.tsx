import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
export default function Explore(): JSX.Element {
    return (
        <View className="" >
            <Text className="text-2xl font-[600] dark:text-white mx-5">Categories</Text>
            <View className="flex flex-row justify-between items-center p-5 pt-3">

            <ScrollView  horizontal={true}>
                {
                    [1,2,3,4,5].map((item, index) => {
                        return (
                            <View key={index} className="mr-2">
                                <Image source={require('../assets/image/custom.jpeg')} className="w-[110] h-[110] rounded-full" />
                                <View className="w-[110] h-[110] rounded-full absolute  bg-white/40 dark:bg-black/40 flex items-center justify-center">
                                    <Text className="  dark:text-white text-lg">Categori</Text>
                                </View>
                            </View>
                        )
                    })

                }
            </ScrollView>
            </View>
        </View>
    );

}
