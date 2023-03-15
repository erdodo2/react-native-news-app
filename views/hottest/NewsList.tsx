import {Image, Pressable, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import moment from 'moment';

import healineJson from '../../api/headline.json';
import Detail from "../Detail";

export default function NewsList(): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [detail, setDetail] = useState({});

  const [news1, setNews1] = useState([]);
  const [news2, setNews2] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const news = healineJson.articles;
    news.map(async (item, index) => {
      if(!item.urlToImage) return;
      await Image.getSize(item.urlToImage, (width, height) => {
        const myWidth = 200;
        item.height = 0;
        item.height = (height / width) * myWidth;
      });
    }, []);
    setNews1(news.slice(0, news.length / 2));
    setNews2(news.slice(news.length / 2, news.length));



    setLoading(false);
  }, []);

  const openDetail = (item) => {
    setVisible(true);
    setDetail(item);
  }

  return (
    <>
      <View className="flex flex-col px-5 ">
        <View className="flex flex-row  gap-2 mt-2">
          <View className="flex flex-col basis-1/2">
            {news1.map((item, index) => {
              return (
                <Pressable onPress={()=>{openDetail(item)}}>
                  <View className=" bg-white/40 dark:bg-black/30 rounded-2xl p-2 mb-3">
                    <Image
                      source={
                        item.urlToImage
                          ? {uri: item.urlToImage}
                          : require('../../assets/image/placeholder.png')
                      }
                      className="rounded-2xl "
                      style={{
                        width: '100%',
                        height: item.height,
                      }}
                    />

                    <View className="flex flex-col justify-between my-1">
                      <Text className="dark:text-white  font-[200]">
                        {item.source.name}
                      </Text>

                      <Text className="dark:text-white  font-[200]">
                        {moment(item.publishedAt).fromNow()}
                      </Text>
                    </View>
                    <Text className="text-lg font-[600] dark:text-white">
                      {item.title}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
          <View className="flex flex-col basis-1/2">
            {news2.map((item, index) => {
              return (
                <Pressable onPress={()=>{openDetail(item)}}>

                  <View className=" bg-white/40 dark:bg-black/30 rounded-2xl p-2 mb-3">
                  <Image
                    source={
                      item.urlToImage
                        ? {uri: item.urlToImage}
                        : require('../../assets/image/placeholder.png')
                    }
                    className="rounded-2xl "
                    style={{
                      width: '100%',
                      height: item.height ?? 200,
                    }}
                  />
                  <View className="flex flex-col justify-between my-1">
                    <Text className="dark:text-white  font-[200]">
                      {item.source.name}
                    </Text>

                    <Text className="dark:text-white  font-[200]">
                      {moment(item.publishedAt).fromNow()}
                    </Text>
                  </View>
                  <Text className="text-lg font-[600] dark:text-white">
                    {item.title}
                  </Text>
                </View>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
      <Detail visible={visible} setVisible={e => setVisible(e)} detail={detail} />
    </>
  );
}
