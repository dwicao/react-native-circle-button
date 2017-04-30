import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import CircleButton from './src';

export default class sparkClick extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CircleButton primaryColor="rgba(0, 0, 0, 0.2)" secondaryColor="rgba(0, 0, 0, 0.1)"/>
      </View>
    );
  }
}

const top = (Platform.OS === 'ios') ? 20 : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cccccc'
  },
});

AppRegistry.registerComponent('sparkClick', () => sparkClick);
