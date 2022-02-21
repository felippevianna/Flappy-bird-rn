import React from 'react';
import { View, Image } from 'react-native';

const Obstacles = ({obstacleLeft, obstacleWidth, obstacleHeight, obstacleHeightTwo, gap, randomBottom}) => {
    return (
        <>
            <View
            // source={require('../assets/canoVerde.png')}
            style={{
                position: 'absolute',
                backgroundColor:'red',
                width: 80,
                height: obstacleHeight,
                left: obstacleLeft,
                top: 0,
                // bottom: randomBottom + obstacleHeight + gap,

            }}/>
            <View 
            // source={require('../assets/canoVerde.png')}
            style={{
                position: 'absolute',
                backgroundColor:'red',
                width: 80,
                height: obstacleHeightTwo,
                left: obstacleLeft,
                bottom: 0,
                // bottom: randomBottom,

            }}/>
        </>
    )
}

export default Obstacles