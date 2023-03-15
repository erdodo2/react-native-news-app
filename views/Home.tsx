import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, Pressable,
  useColorScheme,
  View
} from "react-native";

import Css from "../assets/Css";
//import getHeadline from "./api/getHeadline";
import headline from '../api/headline.json';

import Header from './Header';
import Slider from './home/Slider';
import Explore from "./home/Explore";
import Weather from "./home/Weather";
import HomeNews from "./home/HomeNews";


function App({changeRoute}): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const style = StyleSheet.create(Css(isDarkMode));

  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*getHeadline().then((data) => {
      setHeadlines(data);

    });*/
    setHeadlines(headline);
    setLoading(false);
  }, []);




  return (
    <SafeAreaView style={style.backgroundStyle} className="h-full">
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}

      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" >

        <Header />
        <Slider changeRoute={e => changeRoute(e)} />
        <Explore changeRoute={e => changeRoute(e)}/>
        <Weather/>
        <HomeNews/>

      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
