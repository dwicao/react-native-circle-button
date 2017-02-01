import React, { Component, PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Easing,
  Alert,
} from 'react-native';
import iconAdd from '../images/add.png';
import iconSetting from '../images/setting.png';
import iconEmail from '../images/email.png';
import iconPerson from '../images/person.png';
import iconAttach from '../images/attach.png';

class Main extends Component {
  constructor() {
    super();

    this.state = {
			isClicked: false,
		};

    this.rotateAnimated = new Animated.Value(0);
    this.scaleAnimated = new Animated.Value(0);
    this.bringToBackAnimated = new Animated.Value(0);
    this.bringToLeftAnimated = new Animated.Value(0);
    this.bringToRightAnimated = new Animated.Value(0);
    this.bringToTopAnimated = new Animated.Value(0);
    this.bringToBottomAnimated = new Animated.Value(0);
    this._buttonCenter = this._buttonCenter.bind(this);
    this._buttonTop = this._buttonTop.bind(this);
    this._buttonRight = this._buttonRight.bind(this);
    this._buttonBottom = this._buttonBottom.bind(this);
    this._buttonLeft = this._buttonLeft.bind(this);
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

  startAnimation() {
    this.createAnimation(this.rotateAnimated, 1, 200);
    this.createAnimation(this.scaleAnimated, 1, 200);
    this.createAnimation(this.bringToBackAnimated, 1, 150);
    this.createAnimation(this.bringToLeftAnimated, 1, 200);
    this.createAnimation(this.bringToRightAnimated, 1, 200);
    this.createAnimation(this.bringToTopAnimated, 1, 200);
    this.createAnimation(this.bringToBottomAnimated, 1, 200);
  }

  endAnimation() {
    this.createAnimation(this.rotateAnimated, 2, 200);
    this.createAnimation(this.scaleAnimated, 0, 200);
    this.createAnimation(this.bringToBackAnimated, 0, 2000);
    this.createAnimation(this.bringToLeftAnimated, 0, 200);
    this.createAnimation(this.bringToRightAnimated, 0, 200);
    this.createAnimation(this.bringToTopAnimated, 0, 200);
    this.createAnimation(this.bringToBottomAnimated, 0, 200);  
  }

  _buttonCenter() {
    this.startAnimation();
    this.setState({ isClicked: !this.state.isClicked });

    if (this.state.isClicked) this.endAnimation();
  }

  _buttonTop() {
    this.setState({ isClicked: !this.state.isClicked });
    this.endAnimation();
    this.props.onPressButtonTop();
  }

  _buttonRight() {
    this.setState({ isClicked: !this.state.isClicked });
    this.endAnimation();
    this.props.onPressButtonRight();
  }

  _buttonBottom() {
    this.setState({ isClicked: !this.state.isClicked });
    this.endAnimation();
    this.props.onPressButtonBottom();
  }
  _buttonLeft() {
    this.setState({ isClicked: !this.state.isClicked });
    this.endAnimation();
    this.props.onPressButtonLeft();
  }

  render() {
    const { size, primaryColor, secondaryColor } = this.props;

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonWrapper: {
        right: (size * 2) - 10,
      },
      buttonLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        width: size - 5,
        height: size - 5,
        borderRadius: 360,
      },
      buttonRight: {
        alignItems: 'center',
        justifyContent: 'center',
        width: size - 5,
        height: size - 5,
        borderRadius: 360,
      },
      buttonCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: 360,
        backgroundColor: primaryColor,
      },
      buttonTop: {
        right: (-size * 2) + 7,
        alignItems: 'center',
        justifyContent: 'center',
        width: size - 5,
        height: size - 5,
        borderRadius: 360,
      },
      buttonBottom: {
        right: size-7,
        alignItems: 'center',
        justifyContent: 'center',
        width: size - 5,
        height: size - 5,
        borderRadius: 360,
      },
      text: {
        color: '#EECE69',
        fontWeight: 'bold',
        letterSpacing: 1,
      },
      centerImage: {
        width: size - 5,
        height: size - 5,
      },
      childImage: {
        width: size - 15,
        height: size - 15,
      },
      circle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 360,
        backgroundColor: secondaryColor,
      },
    });

    const rotateMe = this.rotateAnimated.interpolate({
	    inputRange: [0, 1, 2],
	    outputRange: ['0deg', '45deg', '0deg']
	  });

    const scaleMe = this.scaleAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [size, size * 2.8]
	  });

    const bringToBack = this.bringToBackAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [99, -1]
	  });

    const bringMeToLeft = this.bringToLeftAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [size, 0]
	  });

    const bringMeToRight = this.bringToRightAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [0, size]
	  });

    const bringMeToTop = this.bringToTopAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [0, -size + 2]
	  });

    const bringMeToBottom = this.bringToBottomAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, size - 2]
    });

    return (
      <View style={styles.container}>
        <Animated.View style={[ styles.circle, {width: scaleMe, height: scaleMe } ]}>
          <Animated.View style={{ top: bringMeToTop }}>
            <TouchableOpacity onPress={this._buttonTop} activeOpacity={1} style={styles.buttonTop}>
              <Image source={iconPerson} style={styles.childImage} />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{ left: bringMeToLeft }}>
            <TouchableOpacity onPress={this._buttonLeft} activeOpacity={1} style={styles.buttonLeft}>
              <Image source={iconEmail} style={styles.childImage} />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{ left: bringMeToRight }}>
            <TouchableOpacity onPress={this._buttonRight} activeOpacity={1} style={styles.buttonRight}>
              <Image source={iconAttach} style={styles.childImage} />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{ top: bringMeToBottom }}>
            <TouchableOpacity onPress={this._buttonBottom} activeOpacity={1} style={styles.buttonBottom}>
              <Image source={iconSetting} style={styles.childImage} />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={[ styles.buttonWrapper, {transform: [{rotate: rotateMe}]} ]}>
            <TouchableOpacity onPress={this._buttonCenter} activeOpacity={1} style={styles.buttonCenter}>
              <Image source={iconAdd} style={styles.centerImage} />
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

Main.defaultProps = {
  size: 40,
  onPressButtonTop: () => {},
  onPressButtonRight: () => {},
  onPressButtonBottom: () => {},
  onPressButtonLeft: () => {},
  iconButtonCenter: iconAdd,
  iconButtonTop: iconAdd,
  iconButtonRight: iconAttach,
  iconButtonBottom: iconSetting,
  iconButtonLeft: iconEmail,
  primaryColor: '#41727E',
  secondaryColor: '#459186',
};

Main.propTypes = {
  size: PropTypes.number,
  onPressButtonTop: PropTypes.func,
  onPressButtonRight: PropTypes.func,
  onPressButtonBottom: PropTypes.func,
  onPressButtonLeft: PropTypes.func,
  iconButtonCenter: PropTypes.number,
  iconButtonTop: PropTypes.number,
  iconButtonRight: PropTypes.number,
  iconButtonBottom: PropTypes.number,
  iconButtonLeft: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

module.exports = SubmitButton;