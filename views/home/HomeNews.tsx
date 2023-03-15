import {
  StyleSheet,
  View,
  Text,
  Image,
  useColorScheme,
  Pressable,
} from 'react-native';
import Css from '../../assets/Css';
import {useEffect, useState} from 'react';
import general from '../../api/general.json';
import moment from 'moment/moment';
import Detail from '../Detail';

export default function HomeNews(): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [detail, setDetail] = useState({});
  const isDarkMode = useColorScheme() === 'dark';
  const style = StyleSheet.create(Css(isDarkMode));

  const api = '077a3bb4ee364d009a29e2b07f3bb210';
  const url = `https://newsapi.org/v2/everything?q=general&apiKey=${api}`;
  const [news, setNews] = useState(general.articles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //getNews();
    setLoading(false);
  }, []);

  const getNews = () => {

  };

  return (
    <>
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
