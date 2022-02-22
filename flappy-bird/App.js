import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Bird from './components/Bird.js'
import Obstacles from './components/Obstacles.js';

export default function App() {
	const screenWidth = Dimensions.get("screen").width
	const screenHeight = Dimensions.get("screen").height
	const gravity = 3
	const gap = 300
	
	// variaveis do pássaro
	const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
	const birdLeft = screenWidth / 2
	let timer
	

	// variaveis dos obstaculos
	const [obsHeightOne, setObsHeightOne] = useState(generateRandomHeight())
	// const obsHeightOne = generateRandomHeight()
	// const [obsHeightTwo, setObsHeightTwo] = useState(screenHeight - obsHeightOne - gap)
	// const obsHeightTwo = screenHeight - obsHeightOne - gap
	const [obsHeightOne2, setObsHeightOne2] = useState(generateRandomHeight())
	// const obsHeightOne2 = generateRandomHeight()
	// const [obsHeightTwo2, setObsHeightTwo2] = useState(screenHeight - obsHeightOne2 - gap)
	// const obsHeightTwo2 = screenHeight - obsHeightOne2 - gap
	
	const [obsLeft, setObsLeft] = useState(screenWidth + 60)
	const [obsLeft2, setObsLeft2] = useState(screenWidth + screenWidth/2 + 60)
	let timer2
	let timer3

	function generateRandomHeight() {
		const maxHeight = screenHeight - gap - 200
		const randomHeight = Math.random() * maxHeight
		return randomHeight
	}

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
		} else {
			setObsLeft(screenWidth + 80)
			setObsHeightOne(generateRandomHeight())
		}
	}, [obsLeft])

	useEffect(()=> {
		if (obsLeft2 > - 80) {
			timer3 = setInterval(() => {
				setObsLeft2(obsLeft2 => obsLeft2 - 5)
			}, 30)

			return () => {
				clearInterval(timer3)
			}
		} else {
			setObsLeft2(screenWidth + 80)
			setObsHeightOne2(generateRandomHeight())
		}
	}, [obsLeft2])


	return (
		<View style={styles.container}>
			<Text style={styles.textScore}>Pontuação : 0</Text>
			<Bird
				birdBottom={birdBottom}
				birdLeft={birdLeft}
			/>
			<Obstacles 
				obstacleHeight={obsHeightOne}
				obstacleLeft={obsLeft}
				obstacleWidth={80}
				gap={gap}
				screen={screenHeight}
			/>
			<Obstacles 
				obstacleHeight={obsHeightOne2}
				obstacleLeft={obsLeft2}
				obstacleWidth={80}
				gap={gap}
				screen={screenHeight}
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
