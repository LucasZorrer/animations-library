let canvas;
let cpx;
let flowField;
let flowFieldAnimation;

window.onload = function () {
  canvas = document.getElementById("canvas1");
  cpx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  flowField = new FlowFieldEffect(cpx, canvas.width, canvas.height);
  flowField.animate();
};

window.addEventListener("resize", function () {
  cancelAnimationFrame(flowFieldAnimation);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  flowField = new FlowFieldEffect(cpx, canvas.width, canvas.height);
  flowField.animate();
});

class FlowFieldEffect {
  //private class fields
  #ctx;
  #width;
  #height;
  constructor(ctx, width, height) {
    this.#ctx = ctx;
    this.#width = width;
    this.#height = height;
    this.#ctx.strokeStyle = "white";
    this.angle = 0;
  }

  #draw(x, y) {
    const length = 300;
    this.#ctx.beginPath();
    this.#ctx.moveTo(x, y);
    this.#ctx.lineTo(x + length, y + length);
    this.#ctx.stroke();
  }

  animate() {
    this.angle += 0.1;
    this.#ctx.clearRect(0, 0, this.#width, this.#height);
    this.#draw(
      this.#width / 2 + Math.sin(this.angle) * 100,
      this.#height / 2 + Math.cos(this.angle) * 100
    );
    console.log("animating");
    flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
  }
}
