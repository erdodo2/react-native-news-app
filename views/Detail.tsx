import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  Alert,
  StatusBar,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from 'react-native';
import moment from 'moment';
import Css from '../assets/Css';
export default function Detail({visible, setVisible, detail}): JSX.Element {
  useEffect(() => {
    getImageSize();
  }, [detail, visible, detail.urlToImage]);
  const getImageSize= async ()=>{
    const window = Dimensions.get('window');
    if (!detail.urlToImage) {
      return;
    }
    await Image.getSize(detail.urlToImage, (width, height) => {
      console.log(width, height);
      const myWidth = window.width;
      detail.detailHeight = 0;
      if (height > width) {
        detail.detailHeight = (width / height) * myWidth;
      } else if (width > height) {
        detail.detailHeight = (height / width) * myWidth;
      } else {
        detail.detailHeight = myWidth;
      }
    });

  }

  const isDarkMode = useColorScheme() === 'dark';
  const style = StyleSheet.create(Css(isDarkMode));
  return (
    <>

        <Modal animationType="slide" transparent={false} visible={visible}>
          <SafeAreaView className="h-full" style={style.backgroundStyle}>
            <ScrollView>
              {visible && (
              <View className="p-5">
                <StatusBar />
                <View className="flex flex-row justify-between items-center my-4">
                  <Pressable className="p-2" onPress={() => setVisible(!visible)}>
                    <Image
                      source={require('../assets/image/left.png')}
                      style={style.menu}
                      className="h-[20] w-[20] "
                    />
                  </Pressable>
                  <Text className="text-2xl font-[600] dark:text-white">
                    Details
                  </Text>
                </View>
                <Image
                  source={{uri: detail.urlToImage}}
                  className="w-full rounded-2xl min-h-[200]"
                  style={{height: detail.detailHeight}}
                />
                <Text className="dark:text-white text-3xl my-3 ">
                  {detail.title}
                </Text>
                <Text className="dark:text-white text-xl my-3 ">
                  {detail.description}
                </Text>
                <Text className="dark:text-white text-xl my-3 ">
                  {detail.content}
                </Text>
                <Text className="dark:text-white text-xl my-3 ">
                  {' '}
                  {moment(detail.publishedAt).format('DD/MM/YYYY HH:mm')}
                </Text>
                <Text className="dark:text-white text-xl my-3 ">
                  {' '}
                  {detail.author}
                </Text>
                <Text className="dark:text-white text-xl my-3 ">
                  {' '}
                  {detail.source?.name}
                </Text>
                <Pressable onPress={() => setVisible(!visible)}>
                  <Text className="dark:text-white bg-yellow-300/70 dark:bg-yellow-600/70 p-2 rounded-2xl">
                    Turn Back
                  </Text>
                </Pressable>
              </View>
              )}
            </ScrollView>
          </SafeAreaView>
        </Modal>

    </>

  );
}
