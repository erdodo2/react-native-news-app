import React from 'react';
import {View, Text, ScrollView, Image,Pressable} from 'react-native';
export default function Explore({changeRoute}): JSX.Element {

  const [categories, setCategories] = React.useState([
    {
      key: 'business',
      name: 'Business',
      image: require('../../assets/image/business-1.jpeg'),
    },
    {
      key: 'entertainment',
      name: 'Entertainment',
      image: require('../../assets/image/entertainment-1.jpeg'),
    },
    {
      key: 'general',
      name: 'General',
      image: require('../../assets/image/general-1.jpeg'),
    },
    {
      key: 'health',
      name: 'Health',
      image: require('../../assets/image/health-1.jpeg'),
    },
    {
      key: 'science',
      name: 'Science',
      image: require('../../assets/image/science-1.jpeg'),
    },
    {
      key: 'sports',
      name: 'Sports',
      image: require('../../assets/image/sports-1.jpeg'),
    },
    {
      key: 'technology',
      name: 'Technology',
      image: require('../../assets/image/technology.webp'),
    },
  ]);
  return (
    <View className="">
      <Text className="text-2xl font-[600] dark:text-white mx-5">
        Categories
      </Text>
      <View className="flex flex-row justify-between items-center p-5 pt-3">
        <ScrollView horizontal={true}>
          {categories.map((item, index) => {
            return (
              <Pressable onPress={()=>changeRoute(item.key)}>
                <View key={index} className="mr-2">
                  <Image
                    source={item.image}
                    className="w-[120] h-[120] rounded-full"
                  />
                  <View className="w-[120] h-[120] rounded-full absolute  bg-black/50 flex items-center justify-center">
                    <Text className="text-white font-[400]" style={{fontSize:17}}>{item.name}</Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
