import { View, Text, Image, useColorScheme, StyleSheet, Pressable } from "react-native";
import Css from '../assets/Css';
import React from 'react';

import Header from "./Header";
import NewsList from "./hottest/NewsList";
export default function Hottest({changeRoute}): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const style = StyleSheet.create(Css(isDarkMode));



  return (
    <>
      <Header />
      <View className="flex flex-row justify-between items-center mx-5">
        <Pressable className="p-2" onPress={()=> changeRoute('home')}>
          <Image source={require('../assets/image/left.png')} className="h-[20] w-[20] " />
        </Pressable>
        <Text className="text-2xl font-[600] dark:text-white">Hottest News</Text>
      </View>
      <NewsList />
    </>
  );
}
