import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Bird from './components/Bird.js'

export default function App() {
  const screenWidth = Dimensions.get("screen").width
  const screenHeight = Dimensions.get("screen").height
  
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight/2)
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
  const gravity  = 3
  let gameTimerId
  let obstaclesLeftTimerId
  // iniciando  aparte de queda do personagem central
  useEffect(() => {
      if (birdBottom > 0) {
        gameTimerId = setInterval(() => {
          setBirdBottom(birdBottom => birdBottom - gravity )
        }, 30)

        return () => {
          clearInterval(gameTimerId)
        }
      }
  }, [birdBottom])

  // iniciando a criação dos obstáculos
  useEffect(() => {
    if (obstaclesLeft > 0) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
      }, 30)
    }

    return () => {
      clearInterval(obstaclesLeftTimerId)
    }
  }, [obstaclesLeft])

  return (
    <View style={styles.container}>
      <Bird 
        birdBottom={birdBottom}
        birdLeft={birdLeft}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'green',
    backgroundColor: 'snow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
