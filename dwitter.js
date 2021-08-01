// u(t) is called 60 times per second.
// t: elapsed time in seconds.
// c: A 1920x1080 canvas.
// x: A 2D context for that canvas.
// S: Math.sin
// C: Math.cos
// T: Math.tan
// R: Generates rgba-strings, ex.: R(255, 255, 255, 0.5)

// function u(t) {
//   for (
//     i = 82;
//     i--;
//     T(
//       (f = (m) =>
//         x.fillRect(
//           S ? 0 : 70 + ((t * 60) % 19) * 99 - X * m,
//           S ? 0 : 8 + Y * 8 + ((t * 3) | 0) * 98,
//           (a = S ? 2e3 : 8),
//           a,
//           (S = 0)
//         ))
//     ) > 9 || S
//       ? T((T = (e) => Math.random() * 255)) ** 2 / 2e3 > X * X + (Y - 5) ** 2 &&
//         f(8) + f(-8)
//       : (x.fillStyle = R(T(), T(), T()))
//   )
//     (X = i & 7), (Y = i >> 3);
// }

const newDwitter = () => {
  const cnvs = document.getElementById("myCanvas");
  const ctx = cnvs.getContext("2d");
  const rgb = (red, green, blue, alpha) => {
    alpha = alpha === undefined ? 1 : alpha;
    return (
      "rgba(" +
      (red | 0) +
      "," +
      (green | 0) +
      "," +
      (blue | 0) +
      "," +
      alpha +
      ")"
    );
  };

  const start = Date.now();

  setInterval(() => {
    const elapsedMs = Date.now() - start;
    dwitter(elapsedMs / 1000);
  }, 1000 / 60);

  const getX = (i) => i & 7;

  const getY = (i) => i >> 3;

  const fcn = (m, t, i) =>
    ctx.fillRect(
      Math.sin ? 0 : 70 + ((t * 60) % 19) * 99 - getX(i) * m,
      Math.sin ? 0 : 8 + getY(i) * 8 + ((t * 3) | 0) * 98,
      (a = Math.sin ? 2e3 : 8),
      a,
      (Math.sin = 0)
    );

  const getTan = () => Math.random() * 255;

  const dwitter = (t) => {
    for (
      i = 82;
      i--;
      getTan() > 9 || Math.sin
        ? getTan() ** 2 / 2e3 > getX(i) * getX(i) + (getY(i) - 5) ** 2 &&
          fcn(8, t, i) + fcn(-8, t, i)
        : (ctx.fillStyle = rgb(getTan(), getTan(), getTan()))
    );
  };
};

document.addEventListener("load", newDwitter());
