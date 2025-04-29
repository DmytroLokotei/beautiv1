import React from 'react'
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';


export type LineDividerProps = {
    type?: "gradient" | "blue";
};

export function LineDivider({ type }: LineDividerProps) {
    switch (type) {
        case "gradient":
            return (
                <Svg height={2} width={"100%"}>
                    <Rect x={0} y={0} width={"100%"} height={"100%"} fill={'url(#grad1)'} />
                    <Defs>
                        <LinearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
                            <Stop offset="0%" stopColor="#87AEFF" />
                            <Stop offset="50%" stopColor="#FF9AD8" />
                            <Stop offset="100%" stopColor="#FFF75E" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            )
            break;

        default:
            return (
                <Svg height={2} width={"100%"}>
                    <Rect x={0} y={0} width={"100%"} height={"100%"} fill={'#87AEFF33'} />
                </Svg>
            )
            break;
    }
}

export default LineDivider