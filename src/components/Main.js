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
    this.createAnimation(this.rotateAnimated, 1, 200);
    this.createAnimation(this.scaleAnimated, 1, 200);

    this.setState({ isClicked: !this.state.isClicked });

    if (this.state.isClicked) {
      this.createAnimation(this.rotateAnimated, 2, 200);
      this.createAnimation(this.scaleAnimated, 0, 200);
    }
  }

  render() {
    const rotateMe = this.rotateAnimated.interpolate({
	    inputRange: [0, 1, 2],
	    outputRange: ['0deg', '45deg', '0deg']
	  });

    const scaleMe = this.scaleAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [SIZE, SIZE*3]
	  });

    return (
      <View style={styles.container}>
        <Animated.View style={[ styles.buttonWrapper, {transform: [{rotate: rotateMe}]} ]}>
          <TouchableOpacity onPress={this._onPress} activeOpacity={1} style={styles.button}>
            <Image source={addIcon} style={styles.addImage} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[ styles.circle, {width: scaleMe, height: scaleMe} ]} />
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
    marginTop: -SIZE,
		borderRadius: 360,
		backgroundColor: '#459186',
    zIndex: -9999,
	},
});

export default Main;
