import React from 'react';
import { View, Image, requireNativeComponent } from 'react-native';

const Bird = ({birdBottom, birdLeft}) => {
    const birdWidth = 50
    const birdHeight = 60

    return (
        <Image  
        source={require('../assets/messi.png')}
        style={{
            position: 'absolute',
            // backgroundColor: '',
            width: birdWidth,
            height: birdHeight,
            bottom: birdBottom - (birdHeight/2),
            left: birdLeft - (birdWidth/2)
        }}/>
    )
}

export default Bird;