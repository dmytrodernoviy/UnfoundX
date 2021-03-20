import React, {useCallback} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import NativeCalendarModule from './ios/CalendarNativeModule/NativeCalendarModule';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const invokeCalendarModuleEvent = useCallback(() => {
    NativeCalendarModule.createCalendarEvent('foo', 'bar');
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Button title="Press me" onPress={invokeCalendarModuleEvent} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
