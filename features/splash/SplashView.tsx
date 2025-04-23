import { View, Text, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { RadialGradient } from './RadialGradient'
import AnimatedCircle from './AnimatedCircle'


const SplashView = () => {
  return (
    <View>
      <Text>It a SplashView</Text>
      <View
        style={{

          // backgroundColor:  '#93acfd',
          padding: 50,
          borderRadius: '50%',
          shadowColor: '#992222',
          shadowRadius: 50,
          position: 'relative'
        }}
      >
        <RadialGradient />
        {/* <ActivityIndicator /> */}
        <AnimatedCircle/>
        <Image
          source={require('@/assets/images/splash_logo_x2.png')}
          style={{ width: 105, height: 99 }}
        />
      </View>

    </View>
  )
}

export default SplashView