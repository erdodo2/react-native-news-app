import React, {useState, useEffect} from 'react';
import {View, Image, Pressable, Text, ScrollView} from 'react-native';
import moment from 'moment';
import headline from '../../api/headline.json';
export default function Slider({changeRoute}): JSX.Element {
  const api = '077a3bb4ee364d009a29e2b07f3bb210';
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api}&pageSize=10`;
  const [news, setNews] = useState(headline.articles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //getNews();
  }, []);

  getNews = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        //setNews(data.articles);
      });
  };
  const dateParse = date => {
    let newDate = date.split('');
    let year = newDate.splice(0, 4);
    let month = newDate.splice(0, 2);
    let day = newDate.splice(0, 2);
    let hour = newDate.splice(1, 2);

    let returnDate =
      year.join('') +
      '-' +
      month.join('') +
      '-' +
      day.join('') +
      ' ' +
      hour.join('') +
      ':00:00';

    return new Date(returnDate);
  };
  return (
    <>
      <View className="px-6 flex flex-row justify-between items-center">
        <Text className="text-2xl font-[600] dark:text-white">
          Hottest News
        </Text>
        <Pressable onPress={() => changeRoute('hottest')}>
          <Text className=" font-[300] text-black/70 dark:text-white/70">
            See More
          </Text>
        </Pressable>
      </View>
      <View className="flex flex-row justify-between items-center p-5">
        <ScrollView horizontal={true}>
          {news.map((item, index) => {
            return (
              <View
                key={index}
                className="flex flex-col  bg-white/40 dark:bg-black/30 rounded-2xl p-2 mr-2">
                <Image
                  source={
                    item.urlToImage
                      ? {uri: item.urlToImage}
                      : require('../../assets/image/placeholder.png')
                  }
                  className="w-[300] h-[200] rounded-2xl"
                />
                <View className="flex flex-col pt-1">
                  <View className="flex flex-row justify-between">
                    <Text className="dark:text-white text-lg font-[200]">
                      {item.source.name}
                    </Text>
                    <Text className="dark:text-white text-lg font-[200]">
                      {moment(dateParse(item.publishedAt)).fromNow()}
                    </Text>
                  </View>

                  <Text className="text-2xl dark:text-white font-[500] mt-3 whitespace-pre w-[280]">
                    {item.title}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}
