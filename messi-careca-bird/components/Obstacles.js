import React from 'react';
import { View, Image } from 'react-native';

const Obstacles = ({obstacleLeft, obstacleWidth, obstacleHeight, gap, randomBottom}) => {
    return (
        <>
            <View
            // source={require('../assets/canoVerde.png')}
            style={{
                position: 'absolute',
                backgroundColor:'red',
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstacleLeft,
                // top: 0,
                bottom: randomBottom + obstacleHeight + gap,

            }}/>
            <View 
            // source={require('../assets/canoVerde.png')}
            style={{
                position: 'absolute',
                backgroundColor:'red',
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstacleLeft,
                bottom: randomBottom,

            }}/>
        </>
    )
}

export default Obstacles