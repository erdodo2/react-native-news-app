import React, {useState, useEffect} from 'react';
import {View, Image, Pressable, Text, ScrollView,ActivityIndicator} from 'react-native';
import moment from 'moment';
import headline from '../../api/headline.json';
import Detail from '../Detail';
import axios from "axios";

export default function Slider({changeRoute}): JSX.Element {
  const [detailVisible, setDetailVisible] = useState(false);
  const [newsDetail, setNewsDetail] = useState({});
  const api = '077a3bb4ee364d009a29e2b07f3bb210';
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api}&pageSize=10`;
  const [news, setNews] = useState(headline.articles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //getNews();
    setLoading(false)
  }, []);

  const getNews = () => {
    axios.get(url).then((response) => {
      //setNews(response.data.articles );
      //setLoading(false)
    })

  };

  return (
    <>
      {loading ? (
        <View className="h-[200] flex items-center justify-center">
          <ActivityIndicator />
        </View>
      ) : (
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
                  <Pressable
                    onPress={() => {
                      setDetailVisible(true), setNewsDetail(item);
                    }}>
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
                            {moment(item.publishedAt).fromNow()}
                          </Text>
                        </View>

                        <Text className="text-2xl dark:text-white font-[500] mt-3 whitespace-pre w-[280]">
                          {item.title}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
          <Detail
            visible={detailVisible}
            setVisible={e => setDetailVisible(e)}
            detail={newsDetail}
          />
        </>
      )}
    </>
  );
}
