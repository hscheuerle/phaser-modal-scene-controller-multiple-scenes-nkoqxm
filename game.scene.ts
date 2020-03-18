import * as Phaser from "phaser";
import atlasJson from "./assets/default_name_atlas.json";
import animJson from "./assets/default_name_anim.json";

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "game-scene" });
  }

  preload() {
    this.load.atlas(
      "default-name",
      "https://cdn.jsdelivr.net/gh/hscheuerle/phaser-modal-scene-controller-multiple-scenes-nkoqxm@master/assets/default_name.png",
      atlasJson
    );

    this.load.animation(animJson.anims[0]);
  }

  create() {
    const frames = this.anims.generateFrameNames('default-name', { prefix: 'sprite_', start: 0, end: 4});
    console.log(...(animJson.anims));
    console.log(frames);
    const an = this.anims.get('progressing');
    console.log(an);
    const sprite = this.add.sprite(100, 100, 'default-name').play('progressing');  
  }
}
