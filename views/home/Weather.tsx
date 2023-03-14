import {View, Text, Image} from 'react-native';
import React from 'react';
export default function Weather(): JSX.Element {
  const key = '486770da27244a32820131529231303';
  const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=Kütahya&aqi=no`;
  const [weather, setWeather] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data.current);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <View className="px-6 flex flex-row justify-between items-center mb-3">
        <Text className="text-2xl font-[600] dark:text-white">Weather</Text>
        <Text className=" font-[300] text-black/70 dark:text-white/70" />
      </View>
      <View className="mx-5 bg-white/40 dark:bg-black/30 rounded-2xl p-3">
        <Text className="text-2xl mb-3 font-[300] dark:text-white">
          Kütahya
        </Text>
        <View className="flex flex-row">
          <Image
            source={{uri:'https:'+ weather.condition?.icon}}
            className="h-20 w-20"
          />
          <View className="flex flex-col   ml-3">
            <Text className="text-2xl font-[600] dark:text-white">{weather.temp_c}°</Text>
            <Text className="text-lg font-[300] dark:text-white">{weather.condition?.text}</Text>
          </View>
        </View>
      </View>
    </>
  );
}
