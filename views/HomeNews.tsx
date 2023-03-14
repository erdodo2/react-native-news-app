import {StyleSheet, View, Text, Image, useColorScheme} from "react-native";
import Css from "../assets/Css";
export default function HomeNews(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const style = StyleSheet.create(Css(isDarkMode));
    return (
        <View className="mt-5">
            {
                [1,2,3,4,5].map((item, index) => {
                    return(
                        <View className="flex flex-col px-5 mt-1 relative mb-1">
                            <Image source={require('../assets/image/custom.jpeg')} className="rounded-2xl" style={style.objectFit} />
                            <View className="absolute bg-white/60 dark:bg-black/60 w-full h-[200] mx-5 rounded-2xl">
                                <View className="flex flex-col justify-end h-[200] p-5">
                                    <Text className="text-xl font-[600] dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                    <View className="flex-row items-center">
                                        <Text className=" font-[300] dark:text-white">Kaynak</Text>
                                        <Image source={require('../assets/image/dot.png')} style={style.menu} className="w-5 h-5" />
                                        <Text className=" font-[300] dark:text-white">2 Days Ago</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
            </View>
    )
}
