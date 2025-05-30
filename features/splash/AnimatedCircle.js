import React, {Component} from 'react';
import {View, Text, Animated, StyleSheet, Easing} from 'react-native';

export default class AnimatedCircle extends Component {
    constructor() {
        super();
        this.animated = new Animated.Value(0);
        var inputRange = [0, 1];
        var outputRange = ['0deg', '360deg'];
        this.rotate = this.animated.interpolate({inputRange, outputRange});
        outputRange = ['0deg', '-360deg'];
        this.rotateOpposit = this.animated.interpolate({inputRange, outputRange});
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
      Animated.loop(
        Animated.timing(this.animated, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true,
            easing: Easing.linear,
        }),
      ).start();
    }
    render() {
        const transform = [{rotate: this.rotate}];
        const transform1 = [{rotate: this.rotateOpposit}];
        return (
          <View style={styles.container}>
            <Animated.View style={[styles.item, {transform}]}>
              <Animated.View style={[styles.topItem, {transform: transform1}]}>
                <Text style={styles.text}>Loading Line</Text>
              </Animated.View>
            </Animated.View>
          </View>
        );
    }
 }
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // height: "100%",
        backgroundColor: '#550000',
    },
    item: {
        position: 'absolute',
        width: "100%",
        height: 100, // this is the diameter of circle
        backgroundColor: '#55000055',
    },
    topItem: {
        width: '100%',
        height: 20,
        backgroundColor: 'blue',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
 });