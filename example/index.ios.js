import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import CircleButton from 'react-native-circle-button';

export default class sparkClick extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CircleButton />
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
