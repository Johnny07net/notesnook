import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {enableScreens} from 'react-native-screens';
import Notifications from './src/services/Notifications';
import jsdom from 'jsdom-jscore-rn';
import {SafeAreaProvider} from 'react-native-safe-area-context';
global.HTMLParser = jsdom.html();
global.Buffer = require('buffer').Buffer;
enableScreens(true);

let Provider;
let App;
let NotesnookShare;
Notifications.init();
let QuickNoteIOS;

const AppProvider = () => {
  Provider = require('./src/provider').Provider;
  App = require('./App').default;
  return (
    <Provider>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppProvider);

const ShareProvider = () => {
  NotesnookShare = require('./share/index').default;
  return (
    <SafeAreaProvider>
      <NotesnookShare quicknote={false} />
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent('NotesnookShare', () => ShareProvider);

const QuickNoteProvider = () => {
  QuickNoteIOS = require('./share/quicknote').default;
  return (
    <SafeAreaProvider>
      <QuickNoteIOS />
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent('QuickNoteIOS', () => QuickNoteProvider);
