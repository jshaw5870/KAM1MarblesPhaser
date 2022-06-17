import Phaser from 'phaser'

export default class customButton extends Phaser.GameObjects.Container 

{
    private upImage: Phaser.GameObjects.Image
    private overImage: Phaser.GameObjects.Image
    private  text: Phaser.GameObjects.Text
    private  text2: Phaser.GameObjects.Text

    constructor(scene: Phaser.Scene, x: number, y: number, upTexture: string, overTexture: string)
    {
        super (scene, x, y)

        this.upImage = scene.add.image(0,0, upTexture)
        this.overImage = scene.add.image(0,0, upTexture)
        this.text = scene.add.text(0,0, "Play")
            .setOrigin(0.5)
        this.text2 = scene.add.text(0,50, "Quit")
            .setOrigin(0.5)

        this.add(this.upImage)
        this.add(this.overImage)
        this.add(this.text)
        this.add(this.text2)

        this.overImage.setVisible(false)

        this.setSize(this.upImage.width, this.upImage.width)
        
        this.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                this.upImage.setVisible(false)
                this.overImage.setVisible(true)
            })

            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                this.upImage.setVisible(true)
                this.overImage.setVisible(false)
            })
    }
}