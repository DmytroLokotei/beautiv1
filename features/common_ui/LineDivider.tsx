import { StyleSheet, View } from 'react-native'
import React from 'react'
import Svg, { Rect } from 'react-native-svg';

const LineDivider = () => {
    return (
        <Svg height={20} width={"100%"}>
            <Rect x={0} y={0} width={"100%"} height={"100%"} fill={'url(#grad1)'} />
            <defs>
                <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="yellow" />
                    <stop offset="100%" stopColor="red" />
                </linearGradient>
            </defs>
        </Svg>
    )
}

export default LineDivider

const styles = StyleSheet.create({
    all_container: {
        backgroundColor: '#1E212B',
        width: '100%',
        height: 2
    }
});