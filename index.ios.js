/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import Main from './src/components/Main';

export default class sparkClick extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

const top = (Platform.OS === 'ios') ? 20 : 0;

const styles = StyleSheet.create({
  container: {
    top: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('sparkClick', () => sparkClick);
