import Phaser from "phaser"

import customButton from "./customButton"

export default class HomeScreen extends Phaser.Scene
{
    constructor()
    {
        super("button")
    }

    preload() 
    {
        //this.load.image('background', 'src/assets/background.png')
        this.load.image('button', './assets/button.png')
        this.load.image('izuno', 'assets/background.png')
        //this.load.image('quitButton', 'assets/button.png')
    }

    create() 
    {
        // //this.add.image(400, 300, 'background')
        // this.add.image(400, 300, 'button')
        // .setInteractive()
        // .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        //     console.log('pressed')
        // })

        const button = new customButton(this, 400, 300, 'button', 'button')
        this.add.existing(button)

        button.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => 
            {
                this.scene.start('hello-world')
            })
    }
}