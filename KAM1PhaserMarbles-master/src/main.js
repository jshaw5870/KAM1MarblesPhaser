import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import HomeScreen from './scenes/HomeScreen'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [HomeScreen, HelloWorldScene]
}

export default new Phaser.Game(config)
