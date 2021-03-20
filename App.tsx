import React, {useCallback} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  NativeModules,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const {CalendarModule} = NativeModules;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const invokeCalendarModuleEvent = useCallback(() => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
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
