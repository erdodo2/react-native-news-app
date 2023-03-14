import {View, Text, Image, useColorScheme, StyleSheet} from 'react-native';
import Css from '../../assets/Css';
import React from 'react';
export default function NewsList(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const style = StyleSheet.create(Css(isDarkMode));

  const scaleHeight = ({ source, desiredWidth }) => {
    const { width, height } = Image.resolveAssetSource(source)

    return desiredWidth / width * height
  }

  return (
    <View className="flex flex-col px-5 mt-5">
      <Text className="text-2xl font-[600] dark:text-white">News</Text>

      <View className="flex flex-row  gap-2 mt-5">
        <View className="flex flex-col basis-1/2 ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return (
              <View className=" bg-white/40 dark:bg-black/30 rounded-2xl p-2 mb-3">
                <Image
                  source={require('../../assets/image/custom.jpeg')}
                  className="rounded-2xl w-[150]"
                  style={{width:"100%", height: scaleHeight({source: require('../../assets/image/custom.jpeg'), desiredWidth: 160})}}

                />
                <View className="flex flex-row justify-between my-1">
                  <Text className="dark:text-white  font-[200]">Kaynak</Text>
                  <Text className="dark:text-white  font-[200]">
                    2 Days Ago
                  </Text>
                </View>
                <Text className="text-lg font-[600] dark:text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </View>
            );
          })}
        </View>
        <View className="flex flex-col basis-1/2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return (
              <View className=" bg-white/40 dark:bg-black/30 rounded-2xl p-2 mb-3">
                <Image
                  source={require('../../assets/image/custom.jpeg')}
                  className="rounded-2xl"
                  style={{width:"100%", height: scaleHeight({source: require('../../assets/image/custom.jpeg'), desiredWidth: 160})}}
                />
                <View className="flex flex-row justify-between my-1">
                  <Text className="dark:text-white  font-[200]">Kaynak</Text>
                  <Text className="dark:text-white  font-[200]">
                    2 Days Ago
                  </Text>
                </View>
                <Text className="text-lg font-[600] dark:text-white">
                  Lorem ipsum dolor sit amet.
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}
