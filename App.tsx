import React, {useState, useEffect} from 'react';
import { SafeAreaView, StatusBar, useColorScheme, StyleSheet, ScrollView, Text } from "react-native";


import Css from "./assets/Css";
import Home from './views/Home';
import Hottest from "./views/Hottest";


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const style = StyleSheet.create(Css(isDarkMode));
  const [route, setRoute] = useState("home");



  return (
    <SafeAreaView style={style.backgroundStyle} className="h-full">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>{route}</Text>
        {route === "home" && <Home changeRoute={e => setRoute(e)} />}
        {route === "hottest" && <Hottest changeRoute={e => setRoute(e)} />}

      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
