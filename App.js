/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler'
import Signup from './src/Autehntication/Signup/signup'
import Dashboard from './src/dashboard/dashboard'
import Navigator from './src/Navigation/navigation'
import { Provider } from 'react-redux';
import store from './src/redux/store/store'
import NavigtionService from './src/Navigation/NavigationService';
class App extends React.Component {

  render() {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <Navigator 
        ref={(navigatorRef) => {
          NavigtionService.setTopLevelNavigator(navigatorRef);
          }} />
        </Provider>
    </View>
  );
}
};


export default App;
