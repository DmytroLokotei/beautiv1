import { Defs, Stop, Svg, RadialGradient as SVGRadialGradient, Path } from 'react-native-svg'

export function RadialGradient() {
  return (
    <Svg
      height="100%"
      width="100%"
      style={{
        position: 'absolute',
      }}
    >
      <Path
        // d="M0 0H375V279C375 283.418 371.418 287 367 287H8C3.58172 287 0 283.418 0 279V0Z"
        d="M0 0H100V100H-100Z"
        fill="url(#grad)"
      />
      <Defs>
        <SVGRadialGradient
          id="grad"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(50 50) rotate(90) scale(50 50)"
        >
             
          <Stop stopColor={'#FF0000'} />
          <Stop stopColor={'#00FF00'}  offset={0.5} />
          <Stop stopColor={'#0000FF'} offset={1} />
        </SVGRadialGradient>
      </Defs>
    </Svg>
  )
}