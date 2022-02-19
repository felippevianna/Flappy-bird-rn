import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Bird from './components/Bird.js'
import Obstacles from './components/Obstacles.js';

export default function App() {
	const screenWidth = Dimensions.get("screen").width
	const screenHeight = Dimensions.get("screen").height

	const birdLeft = screenWidth / 2;
	const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
	const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
	const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth / 2 + 30)
	const gravity = 3
	const [score, setScore] = useState(0)

	const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0)
	const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0)


	const obstacleWidth = 60
	const obstacleHeight = 300
	const gap = 150

	let gameTimerId
	let obstaclesLeftTimerId
	let obstaclesLeftTimerIdTwo
	const [isGameOver, setIsGameOver] = useState(false)  
	// iniciando  aparte de queda do personagem central
	useEffect(() => {
		if (birdBottom > 0) {
			gameTimerId = setInterval(() => {
				setBirdBottom(birdBottom => birdBottom - gravity)

			}, 30)

			return () => {
				clearInterval(gameTimerId)
			}
		}
	}, [birdBottom])

	const jump = () => {
		if(!isGameOver && (birdBottom < screenHeight)) {
			setBirdBottom(birdBottom => birdBottom +50)
			console.log('jump')
		}
	}

	// iniciando a criação dos obstáculos
	useEffect(() => {
		if (obstaclesLeft > -obstacleWidth) {
			obstaclesLeftTimerId = setInterval(() => {
				setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
			}, 30)

			return () => {
				clearInterval(obstaclesLeftTimerId)
			}
		} else {
			setObstaclesLeft(screenWidth)
			setObstaclesNegHeight( - Math.random() * 100)
			setScore(score => score + 1)
		}

	}, [obstaclesLeft])

	// iniciando o segundo obstáculo
	useEffect(() => {
		if (obstaclesLeftTwo > -obstacleWidth) {
			obstaclesLeftTimerIdTwo = setInterval(() => {
				setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5)
			}, 30)

			return () => {
				clearInterval(obstaclesLeftTimerIdTwo)
			}
		} else {
			setObstaclesLeftTwo(screenWidth)
			setObstaclesNegHeightTwo( - Math.random() * 100)
			setScore(score => score + 1)
		}

	}, [obstaclesLeftTwo])

	// checando colisões

	useEffect(()=> {
		if (
			((birdBottom < (obstaclesNegHeight + obstacleHeight + 30) || 
			birdBottom > (obstaclesNegHeight + obstacleHeight - 30 + gap)) && 
			(obstaclesLeft > screenWidth / 2 - 30 && obstaclesLeft < screenWidth / 2 + 30) 
			)
			||
			((birdBottom < (obstaclesNegHeightTwo + obstacleHeight + 30) || 
			birdBottom > (obstaclesNegHeightTwo + obstacleHeight - 30 + gap)) && 
			(obstaclesLeftTwo > screenWidth / 2 - 30 && obstaclesLeftTwo < screenWidth / 2 + 30)
			) 
		)
		{
			console.log('gameover')
			gameOver()
		}
	})
	
	const gameOver = () => {
		clearInterval(gameTimerId)
		clearInterval(obstaclesLeftTimerId)
		clearInterval(obstaclesLeftTimerIdTwo)
		setIsGameOver(true)
	}



	return (
		<TouchableWithoutFeedback onPress={jump}>
			<View style={styles.container}>
				<Text>Pontuação : {score}</Text>

				<Bird
					birdBottom={birdBottom}
					birdLeft={birdLeft}
				/>
				<Obstacles
					obstacleLeft={obstaclesLeft}
					obstacleWidth={obstacleWidth}
					obstacleHeight={obstacleHeight}
					randomBottom={obstaclesNegHeight}
					gap={gap}
				/>
				<Obstacles
					obstacleLeft={obstaclesLeftTwo}
					obstacleWidth={obstacleWidth}
					obstacleHeight={obstacleHeight}
					randomBottom={obstaclesNegHeightTwo}
					gap={gap}
				/>
			</View>

		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		color: 'green',
		backgroundColor: 'grey',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
