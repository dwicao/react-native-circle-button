import React, { Component, PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Easing,
} from 'react-native';
import addIcon from '../images/add.png';
import settingIcon from '../images/setting.png';

class Main extends Component {
  constructor() {
    super();

    this.state = {
			isClicked: false,
		};

    this.rotateAnimated = new Animated.Value(0);
    this.scaleAnimated = new Animated.Value(0);
    this.bringToBackAnimated = new Animated.Value(0);
    this.bringToLeftAnimated = new Animated.Value(0)
    this._onPress = this._onPress.bind(this);
  }

  createAnimation(obj, toValue, duration, easing) {
    return Animated.timing(
      obj,
      {
        toValue,
        duration,
        easing: Easing.linear
      }
    ).start();
  }

  _onPress() {
    this.createAnimation(this.rotateAnimated, 1, 200);
    this.createAnimation(this.scaleAnimated, 1, 200);
    this.createAnimation(this.bringToBackAnimated, 1, 200);
    this.createAnimation(this.bringToLeftAnimated, 1, 200);

    this.setState({ isClicked: !this.state.isClicked });

    if (this.state.isClicked) {
      this.createAnimation(this.rotateAnimated, 2, 200);
      this.createAnimation(this.scaleAnimated, 0, 200);
      this.createAnimation(this.bringToBackAnimated, 0, 200);
      this.createAnimation(this.bringToLeftAnimated, 0, 200);
    }
  }

  render() {
    const rotateMe = this.rotateAnimated.interpolate({
	    inputRange: [0, 1, 2],
	    outputRange: ['0deg', '45deg', '0deg']
	  });

    const scaleMe = this.scaleAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [SIZE, SIZE*2.8]
	  });

    const bringToBack = this.bringToBackAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [99, -1]
	  });

    const bringMeToLeft = this.bringToLeftAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [SIZE, 0]
	  });

    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={1} style={styles.buttonTop}>
          <Image source={settingIcon} style={styles.childImage} />
        </TouchableOpacity>

        <Animated.View style={[ styles.circle, {width: scaleMe, height: scaleMe, zIndex: bringToBack } ]}>
          <Animated.View style={{ left: bringMeToLeft }}>
            <TouchableOpacity activeOpacity={1} style={styles.buttonLeft}>
              <Image source={settingIcon} style={styles.childImage} />
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={[ styles.buttonWrapper, {transform: [{rotate: rotateMe}]} ]}>
            <TouchableOpacity onPress={this._onPress} activeOpacity={1} style={styles.buttonCenter}>
              <Image source={addIcon} style={styles.centerImage} />
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ zIndex: bringMeToLeft }}>
            <TouchableOpacity activeOpacity={1} style={styles.buttonRight}>
              <Image source={settingIcon} style={styles.childImage} />
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>

        <TouchableOpacity activeOpacity={1} style={styles.buttonBottom}>
          <Image source={settingIcon} style={styles.childImage} />
        </TouchableOpacity>
      </View>
    );
  }
}

const SIZE = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
  },
  buttonLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE - 5,
    height: SIZE - 5,
    borderRadius: 360,
  },
  buttonRight: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE - 5,
    height: SIZE - 5,
    borderRadius: 360,
  },
  buttonCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: 360,
    backgroundColor: '#41727E',
  },
  buttonTop: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -SIZE+5,
    width: SIZE - 5,
    height: SIZE - 5,
    borderRadius: 360,
  },
  buttonBottom: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -SIZE+5,
    width: SIZE - 5,
    height: SIZE - 5,
    borderRadius: 360,
  },
  text: {
    color: '#EECE69',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  centerImage: {
    width: SIZE - 5,
    height: SIZE - 5,
  },
  childImage: {
    width: SIZE - 15,
    height: SIZE - 15,
  },
  circle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
		borderRadius: 360,
		backgroundColor: '#459186',
	},
});

export default Main;
