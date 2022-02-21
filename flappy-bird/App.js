import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Bird from './components/Bird.js'
import Obstacles from './components/Obstacles.js';

export default function App() {
	const screenWidth = Dimensions.get("screen").width
	const screenHeight = Dimensions.get("screen").height
	const gravity = 3
	const gap = 250
	
	// variaveis do pássaro
	const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
	const birdLeft = screenWidth / 2
	let timer
	

	// variaveis dos obstaculos
	const maxHeight = screenHeight - gap - 150
	const [obsHeightOne, setObsHeightOne] = useState(Math.random() * maxHeight)
	const obsHeightTwo = screenHeight - obsHeightOne - gap
	const [obsHeightOne2, setObsHeightOne2] = useState(Math.random() * maxHeight)
	const obsHeightTwo2 = screenHeight - obsHeightOne2 - gap
	const [obsLeft, setObsLeft] = useState(screenWidth + 60)
	let timer2

	// tentando fazer a queda do pássaro
	useEffect(() => {
		if (birdBottom > 30) {
			timer = setInterval(() => {
				setBirdBottom(birdBottom => birdBottom - gravity)

			}, 30)

			return () => {
				clearInterval(timer)
			}
		}
		
	}, [birdBottom])

	// fazendo os obstaculos se moverem
	useEffect(()=> {
		if (obsLeft > - 80) {
			timer2 = setInterval(() => {
				setObsLeft(obsLeft => obsLeft - 5)
			}, 30)

			return () => {
				clearInterval(timer2)
			}
		} 
	}, [obsLeft])


	return (
		<View style={styles.container}>
			<Text style={styles.textScore}>Pontuação : 0</Text>
			<Bird
				birdBottom={birdBottom}
				birdLeft={birdLeft}
			/>
			<Obstacles 
				obstacleHeight={obsHeightOne}
				obstacleHeightTwo={obsHeightTwo}
				obstacleLeft={obsLeft}
			/>
			<Obstacles 
				obstacleHeight={obsHeightOne2}
				obstacleHeightTwo={obsHeightTwo2}
				obstacleLeft={obsLeft + screenWidth/2}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		color: 'green',
		backgroundColor: 'tan',
		alignItems: 'center',
		justifyContent: 'center',
	},

	textScore: {
		zIndex: 10,
		position: 'absolute',
		top: 15,
		fontSize: 35,
	}
});
