import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Css from "./assets/Css";
import Header from './views/Header';
import Slider from './views/Slider';
import Explore from "./views/Explore";
import Weather from "./views/Weather";
import HomeNews from "./views/HomeNews";
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const style = StyleSheet.create(Css(isDarkMode));

  return (
    <SafeAreaView style={style.backgroundStyle} className="h-full">
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}

      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" >
            <Header />
            <Slider />
            <Explore/>
            <Weather/>
          <HomeNews/>
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
