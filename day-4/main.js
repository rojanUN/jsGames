const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let numOfParticles = 70;

class Particle {
  constructor() {
    this.x = Math.random() * (400 - 0) + 0;
    this.y = Math.random() * (400 - 0) + 0;
    this.radius = Math.random() * (70 - 10) + 10;
    this.color = setBg();
    this.minRadius = 10;
    this.maxRadius = 70;
    this.growing = true;
  }

  render() {
    c.beginPath();
    c.fillStyle = this.color;
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.fill();
  }
  movement() {
    this.x += Math.random() * (1 - -1) + -1;
    this.y += Math.random() * (1 - -1) + -1;
  }
  grow() {
    if (this.growing && this.radius < this.maxRadius) {
      this.radius += 1;
    } else {
      this.growing = false;
    }
  }

  shrink() {
    if (!this.growing && this.radius > this.minRadius) {
      this.radius -= 1;
    } else {
      this.growing = true;
    }
  }
}

function setBg() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

const particleArr = [];
for (let i = 0; i < numOfParticles; i++) {
  particleArr.push(new Particle());
}

function animateParticle() {
  c.clearRect(0, 0, 400, 400);
  for (let i = 0; i < particleArr.length; i++) {
    particleArr[i].render();
    particleArr[i].movement();
    particleArr[i].grow();
    particleArr[i].shrink();
  }
  requestAnimationFrame(animateParticle);
}
animateParticle();
