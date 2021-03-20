import React, {useCallback} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import CalendarModule from './ios/CalendarNativeModule/NativeCalendarModule';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const invokeCalendarModuleEvent = useCallback(() => {
    CalendarModule.createCalendarEventCallback(
      'testName',
      'testLocation',
      error => {
        console.error(`Error found! ${error}`);
      },
      eventId => {
        console.log(`event id ${eventId} returned`);
      },
    );
  }, []);

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle, styles.container]}
        contentContainerStyle={styles.content}>
        <Button title="Press me" onPress={invokeCalendarModuleEvent} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
