import React from 'react';
import { View, Image } from 'react-native';

const Obstacles = ({obstacleLeft, obstacleWidth, obstacleHeight, gap, screen}) => {
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
                top: 0,

            }}/>
            <View 
            // source={require('../assets/canoVerde.png')}
            style={{
                position: 'absolute',
                backgroundColor:'red',
                width: obstacleWidth,
                height: screen - obstacleHeight - 100 - gap,
                left: obstacleLeft,
                bottom: 0,

            }}/>
        </>
    )
}

export default Obstacles