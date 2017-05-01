import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated
} from 'react-native';
import CircleButton from './src';
import imgWallpaper from './src/images/wallpaper.jpg';
import imgAdd from './src/images/add.png';
import imgAttach from './src/images/attach.png';
import imgEmail from './src/images/email.png';
import imgPerson from './src/images/person.png';
import imgSetting from './src/images/setting.png';

export default class sparkClick extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={imgWallpaper} style={styles.img}>
          <CircleButton primaryColor="rgba(255, 255, 255, 0.4)" secondaryColor="rgba(255, 255, 255, 0.2)">
            {/* Center Icon */}
            <Image source={imgAdd}/>

            {/* Top Icon */}
            <Image source={imgAttach}/>

            {/* Right Icon */}
            <Image source={imgEmail}/>

            {/* Bottom Icon */}
            <Image source={imgPerson}/>
            
            {/* Left Icon */}
            <Image source={imgSetting}/>
          </CircleButton>
        </Image>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cccccc'
  },
  img: {
    flex: 1,
		width: DEVICE_WIDTH,
		height: null,
		resizeMode: 'cover',
  },
});

AppRegistry.registerComponent('sparkClick', () => sparkClick);
