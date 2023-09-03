window.onload = function () {
  const canvas = document.getElementById("canvas1");
  const cpx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const flowField = new FlowFieldEffect(cpx, canvas.width, canvas.height);
};

class FlowFieldEffect {
  //private class fields
  #ctx;
  #width;
  #height;
  constructor(ctx, width, height) {
    this.#ctx = ctx;
    this.#width = width;
    this.#height = height;
    console.log("loaded");
    this.#ctx.strokeStyle = "white";
    this.#draw(100, 100);
  }

  #draw(x, y) {
    const length = 400;
    this.#ctx.beginPath();
    this.#ctx.moveTo(x, y);
    this.#ctx.lineTo(x + length, y + length);
    this.#ctx.stroke();
  }
}
