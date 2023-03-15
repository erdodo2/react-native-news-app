import NewsList from "./categories/NewsList";
import { Image, Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "./Header";
export default function Categories({route,changeRoute}): JSX.Element {
  const [category, setCategory] = useState({
    business: "Business",
    entertainment: "Entertainment",
    general: "General",
    health: "Health",
    science: "Science",
    sports: "Sports",
    technology: "Technology",
  });

  return (
    <View>
      <Header />
      <View className="flex flex-row justify-between items-center mx-5">
        <Pressable className="p-2" onPress={()=> changeRoute('home')}>
          <Image source={require('../assets/image/left.png')} className="h-[20] w-[20] " />
        </Pressable>
        <Text className="text-2xl font-[600] dark:text-white">{category[route]}</Text>
      </View>

      <NewsList category={category[route]} route={route} />
    </View>
  );
}
