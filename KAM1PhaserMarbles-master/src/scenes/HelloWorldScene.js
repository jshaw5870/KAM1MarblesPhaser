import Phaser from 'phaser'
import customButton from "./customButton"

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        this.load.setBaseURL('http://labs.phaser.io')

        this.load.image('sky', 'assets/skies/space3.png')
        this.load.image('logo', 'assets/sprites/phaser3-logo.png')
        this.load.image('red', 'assets/particles/red.png')
        this.load.image('button', 'assets/button.png')
        this.load.image('izuno', 'assets/background.png')
    }

    create()
    {
         this.add.image(400, 300, 'izuno')

        // const particles = this.add.particles('red')

        // const emitter = particles.createEmitter({
        //     speed: 100,
        //     scale: { start: 1, end: 0 },
        //     blendMode: 'ADD'
        // })

        // const logo = this.physics.add.image(400, 100, 'logo')

        // logo.setVelocity(100, 200)
        // logo.setBounce(1, 1)
        // logo.setCollideWorldBounds(true)

        // emitter.startFollow(logo)
        let clickCount = 0;
        this.clickCountText = this.add.text(400, 275, '');

        const clickButton = this.add.text(400, 175, 'Click to bet IZU!')
            .setInteractive()
            .on('pointerdown', () => this.updateClickCountText(++clickCount) )
            .setOrigin(0.5);

        this.updateClickCountText(clickCount);
        this.add.text(400,375, 'ENTER THE IZUNO')
            .setOrigin(0.5);

    }

    updateClickCountText(clickCount) {
        this.clickCountText.setText(`You are now betting ${clickCount} IZU`)
        .setOrigin(0.5);
      }
}
