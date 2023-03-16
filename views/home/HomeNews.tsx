import {
  StyleSheet,
  View,
  Text,
  Image,
  useColorScheme,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import Css from '../../assets/Css';
import React, {useEffect, useState} from 'react';
import general from '../../api/general.json';
import moment from 'moment/moment';
import Detail from '../Detail';
import Requests from '../../api/Requests';

export default function HomeNews(): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [detail, setDetail] = useState({});
  const isDarkMode = useColorScheme() === 'dark';
  const style = StyleSheet.create(Css(isDarkMode));
  const [news, setNews] = useState(general.articles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*Requests.homeNews().then((res) => {
      setNews(res.data.articles);
      setLoading(false);

    });*/
    setTimeout(() => {
      setLoading(false);
    }, 1000);

  }, []);

  return (
    <>
      <View className="relative w-full z-10">
        {loading && (
          <View className="h-[400]  w-full  absolute flex items-center justify-center">
            <ActivityIndicator />
          </View>
        )}
      </View>

        <View className="mt-5">
          {news.map((item, index) => {
            return (
              <Pressable
                onPress={() => {
                  setVisible(true), setDetail(item);
                }}>
                <View className="flex flex-col px-5 mt-1 relative mb-1">
                  <Image
                    source={{uri: item.urlToImage}}
                    className="rounded-2xl"
                    style={style.objectFit}
                  />
                  <View className="absolute bg-white/70 dark:bg-black/70 w-full h-[200] mx-5 rounded-2xl">
                    <View className="flex flex-col justify-end h-[200] p-5">
                      <Text className="text-xl font-[600] dark:text-white">
                        {item.title}
                      </Text>
                      <View className="flex-row items-center">
                        <Text className=" font-[300] dark:text-white">
                          {item.source.name}
                        </Text>
                        <Image
                          source={require('../../assets/image/dot.png')}
                          style={style.menu}
                          className="w-5 h-5"
                        />
                        <Text className=" font-[300] dark:text-white">
                          {moment(item.publishedAt).fromNow()}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>


      <Detail
        visible={visible}
        detail={detail}
        setVisible={e => setVisible(e)}
      />
    </>
  );
}
