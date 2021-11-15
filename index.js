const main = document.querySelector('.main');
main.style.marginTop = '-500px';
// if (window.screen.width > 600) {
//   console.log(true);
// } else {
//   console.log(window.screen.width);
// }
document.body.onload = function () {
  if (window.screen.width > 600) {
    anime({
      targets: main,
      translateY: 650,
      duration: 1200,
    });
  } else {
    anime({
      targets: main,
      translateY: 550,
      duration: 1200,
    });
  }
};
