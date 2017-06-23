/*

  Exercise 6.4

  Write a code for Raynolds Wandering behaviour
*/
import AnimationPlayer from '../../../src/lib/AnimationPlayer';
import Vector from '../../../src/lib/Vector';
import Vehicle from './lib/Vehicle';
import FlowField from './lib/FlowField';

window.onload = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const width = window.innerWidth;
  const height = window.innerHeight-4;
  const center = { x: width/2, y: height/2 };

  canvas.height = height;
  canvas.width = width;

  let car = new Vehicle(center.x, center.y, 5, Math.PI*2, 10, 0.8);
  let target = new Vector({ x: center.x, y: center.y });
  let flow = new FlowField(width, height, 14);




  // Demo player
  let player = new AnimationPlayer();
  player.setUpdateFn(updateFn);

  // Play a loop function
  player.play();


  function updateFn(delta, elapsed) {

    ctx.clearRect(0, 0, width, height);

    car.update();

    // car.wander(null, null, delta);
    // car.stayWithinWalls();

    flow.draw(ctx);

    car.draw(ctx);

    // Draw Target
    // ctx.beginPath();
    // ctx.fillStyle = "rgba(0,0,0,0.5)";
    // ctx.arc(target.getX(), target.getY(), 2, 0, Math.PI*2, true);
    // ctx.fill();
    // ctx.closePath();
  }

  document.onclick = (e) => {
    target.setX(e.clientX);
    target.setY(e.clientY);
  };
};
