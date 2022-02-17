import React from 'react';
import { View } from 'react-native';

const Obstacles = () => {
    const obstacleWidth = 60
    const obstacleHeight = 300
    return (
        <>
            <View style={{
                position: 'absolute',
                backgroundColor:'red',
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstacleLeft,
                bottom: 0,

            }}></View>
        </>
    )
}

export default Obstacles