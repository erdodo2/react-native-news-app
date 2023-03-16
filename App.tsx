import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Text,
} from 'react-native';

import Css from './assets/Css';
import Home from './views/Home';
import Hottest from './views/Hottest';
import Categories from './views/Categories';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const style = StyleSheet.create(Css(isDarkMode));
  const [route, setRoute] = useState('home');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={style.backgroundStyle} className="h-full">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <Home
          className={route != 'home' ? 'hidden' : ''}
          changeRoute={e => setRoute(e)}
        />
        <Hottest
          className={route != 'hottest' ? 'hidden' : ''}
          changeRoute={e => setRoute(e)}
        />
        {route !== 'home' && route !== 'hottest' && (
          <Categories changeRoute={e => setRoute(e)} route={route} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
