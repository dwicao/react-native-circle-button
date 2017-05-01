# react-native-circle-button

A Customizable React Native Circle Button, works on both Android and iOS.

![demo](https://raw.githubusercontent.com/dwicao/react-native-circle-button/master/demo_app.gif)

> UPDATE v1.0.6: Support transparent background  
> note: It's lags due to gif recorder app, it actually works more smooth

## Inspiration
[Ux Concept](https://dribbble.com/shots/2233249-Ux-Concept) by [Nick Kumbari](https://dribbble.com/kumbari)

## Installation
* `npm install --save react-native-circle-button`

## Usage
```js
import React, { Component } from 'react';
import { View } from 'react-native';
import CircleButton from 'react-native-circle-button';

class MyExample extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CircleButton size={45} />
            </View>
        );
    }
}

export default MyExample;
```

## Props

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| size | number | 40 | Setting overall size |
| primaryColor | string | '#41727E' | Color on inner button |
| secondaryColor | string | '#459186' | Color on outer button |
| onPressButtonTop | function | () => {} | Event onPress Button Top |
| onPressButtonRight | function | () => {} | Event onPress Button Right |
| onPressButtonBottom | function | () => {} | Event onPress Button Bottom |
| onPressButtonLeft | function | () => {} | Event onPress Button Left |
| iconButtonCenter | enum |  | Source path to icon image on center |
| iconButtonTop | enum |  | Source path to icon image on top|
| iconButtonRight | enum |  | Source path to icon image on right |
| iconButtonBottom | enum |  | Source path to icon image on bottom |
| iconButtonLeft | enum |  | Source path to icon image on left |

## License
MIT

