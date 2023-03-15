import React, {useState, useEffect} from 'react';
import { SafeAreaView, StatusBar, useColorScheme, StyleSheet, ScrollView, Text } from "react-native";


import Css from "./assets/Css";
import Home from './views/Home';
import Hottest from "./views/Hottest";
import Categories from "./views/Categories";


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const style = StyleSheet.create(Css(isDarkMode));
  const [route, setRoute] = useState("home");




  return (
    <SafeAreaView style={style.backgroundStyle} className="h-full">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">

        {route === "home" && <Home changeRoute={e => setRoute(e)} />}
        {route === "hottest" && <Hottest changeRoute={e => setRoute(e)} />}
        {route !== "home" && route !== "hottest" && <Categories changeRoute={e => setRoute(e)} route={route} />}

      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
