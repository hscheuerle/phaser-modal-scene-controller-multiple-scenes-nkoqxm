import * as Phaser from "phaser";
import atlasJson from "./assets/default_name_atlas.json";
import animJson from "./assets/default_name_anim.json";

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "game-scene" });
  }

  preload() {
    this.load.atlas(
      "default_name",
      "https://cdn.jsdelivr.net/gh/hscheuerle/phaser-modal-scene-controller-multiple-scenes-nkoqxm@master/assets/default_name.png",
      atlasJson
    );
  }

  create() {
    const an = this.anims.create(animJson.anims[0]);

    const sprite = this.add.sprite(100, 100, 'default_name').play('progressing');  
  }
}
