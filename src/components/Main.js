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

class Main extends Component {
  constructor() {
    super();

    this.state = {
			isClicked: false,
		};

    this.rotateAnimated = new Animated.Value(0);
    this.scaleAnimated = new Animated.Value(0);
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
    const DURATION = 200;

    this.createAnimation(this.rotateAnimated, 1, DURATION);
    this.createAnimation(this.scaleAnimated, 1, DURATION);

    this.setState({ isClicked: !this.state.isClicked });

    if (this.state.isClicked) {
      this.createAnimation(this.rotateAnimated, 2, DURATION);
      this.createAnimation(this.scaleAnimated, 0, DURATION);
    }
  }

  render() {
    const rotateMe = this.rotateAnimated.interpolate({
	    inputRange: [0, 1, 2],
	    outputRange: ['0deg', '45deg', '0deg']
	  });

    const scaleMe = this.scaleAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [1, 3]
	  });

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPress} activeOpacity={1} style={styles.button}>
          <Animated.View style={{transform: [{rotate: rotateMe}]}}>
            <Image source={addIcon} style={styles.addImage} />
          </Animated.View>
        </TouchableOpacity>
        <Animated.View style={[ styles.circle, {transform: [{scale: scaleMe}]} ]} />
      </View>
    );
  }
}

const SIZE = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: 360,
    backgroundColor: '#41727E',
    zIndex: 9999,
  },
  text: {
    color: '#EECE69',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  addImage: {
    width: SIZE - 5,
    height: SIZE - 5,
  },
  circle: {
    width: SIZE,
    height: SIZE,
    marginTop: -SIZE,
    borderWidth: 0,
		borderRadius: 360,
		alignSelf: 'center',
		backgroundColor: '#459186',
    zIndex: -9999,
	},
});

export default Main;
