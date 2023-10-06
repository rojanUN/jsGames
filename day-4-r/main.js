const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let particleNum = 100;
class Particle {
  constructor() {
    this.hWidth = Math.random() * (70 - 20) + 20;
    this.x = Math.random() * (350 - 0) + 0;
    this.y = Math.random() * (350 - 0) + 0;
    this.width = this.hWidth;
    this.height = this.hWidth;
    this.xSpeed = randomizeSpeed();
    this.ySpeed = randomizeSpeed();
    this.color = setColor();
  }
  render() {
    c.beginPath();
    c.fillStyle = this.color;
    c.rect(this.x, this.y, this.height, this.width);
    c.fill();
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  checkCollision() {
    if (this.x + this.width > canvas.width || this.x < 0) {
      this.xSpeed *= -1;
      this.color = setColor();
    }
    if (this.y + this.height > canvas.height || this.y < 0) {
      this.ySpeed *= -1;
      this.color = setColor();
    }
  }
}
let particleArr = [];
for (let i = 0; i < particleNum; i++) {
  particleArr.push(new Particle());
}

function setColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function randomizeSpeed() {
  return Math.random() * (4 - 1) + 1;
}
const particle = new Particle();

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleArr.length; i++) {
    particleArr[i].checkCollision();
    particleArr[i].render();
    particleArr[i].move();
  }
  requestAnimationFrame(animate);
}
animate();
