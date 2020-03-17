import * as Phaser from 'phaser';
import { GameScene } from './game.scene';

const game = new Phaser.Game({
  height: 800,
  width: 400,
});

game.registry.set('test', { nested: 'data got'});

const gameScene = new GameScene();
game.scene.add(gameScene.sys.settings.key, gameScene, true);

