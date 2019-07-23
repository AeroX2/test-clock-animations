numbers = [
  /* 48 0x30 '0' */
  [ 0x00, 0x00, 0x38, 0x6c, 0xc6, 0xc6, 0xd6, 0xd6, 0xc6, 0xc6, 0x6c, 0x38, 0x00, 0x00, 0x00, 0x00 ],
  /* 49 0x31 '1' */
  [ 0x00, 0x00, 0x18, 0x38, 0x78, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x7e, 0x00, 0x00, 0x00, 0x00 ],
  /* 50 0x32 '2' */
  [ 0x00, 0x00, 0x7c, 0xc6, 0x06, 0x0c, 0x18, 0x30, 0x60, 0xc0, 0xc6, 0xfe, 0x00, 0x00, 0x00, 0x00 ],
  /* 51 0x33 '3' */
  [ 0x00, 0x00, 0x7c, 0xc6, 0x06, 0x06, 0x3c, 0x06, 0x06, 0x06, 0xc6, 0x7c, 0x00, 0x00, 0x00, 0x00 ],
  /* 52 0x34 '4' */
  [ 0x00, 0x00, 0x0c, 0x1c, 0x3c, 0x6c, 0xcc, 0xfe, 0x0c, 0x0c, 0x0c, 0x1e, 0x00, 0x00, 0x00, 0x00 ],
  /* 53 0x35 '5' */
  [ 0x00, 0x00, 0xfe, 0xc0, 0xc0, 0xc0, 0xfc, 0x06, 0x06, 0x06, 0xc6, 0x7c, 0x00, 0x00, 0x00, 0x00 ],
  /* 54 0x36 '6' */
  [ 0x00, 0x00, 0x38, 0x60, 0xc0, 0xc0, 0xfc, 0xc6, 0xc6, 0xc6, 0xc6, 0x7c, 0x00, 0x00, 0x00, 0x00 ],
  /* 55 0x37 '7' */
  [ 0x00, 0x00, 0xfe, 0xc6, 0x06, 0x06, 0x0c, 0x18, 0x30, 0x30, 0x30, 0x30, 0x00, 0x00, 0x00, 0x00 ],
  /* 56 0x38 '8' */
  [ 0x00, 0x00, 0x7c, 0xc6, 0xc6, 0xc6, 0x7c, 0xc6, 0xc6, 0xc6, 0xc6, 0x7c, 0x00, 0x00, 0x00, 0x00 ],
  /* 57 0x39 '9' */
  [ 0x00, 0x00, 0x7c, 0xc6, 0xc6, 0xc6, 0x7e, 0x06, 0x06, 0x06, 0x0c, 0x78, 0x00, 0x00, 0x00, 0x00 ]
];

number = 0;
gridItems = document.getElementsByClassName("grid-item");

function dec(x, y) {
  return (numbers[number][y] >> (8-x)) & 1
}

function decs(shift) {
  return (numbers[number][Math.floor(shift / 8)] >> (8-(shift%8))) & 1
}

function enc(x,y) {
  return y*8+x
}

function clear() {
  for (let gridItem of gridItems) gridItem.style.opacity = "0";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function normal() {
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 8; x++) {
      gridItems[enc(x,y)].style.opacity = dec(x,y);
    }
  }
}

async function tetris() {
  for (let i = 15; i >= 0; i--) {
    let line = numbers[number][i];
    if (line == 0) continue;

    for (let y = 0; y < i; y++) {
      if (y > 0) {
        for (let x = 0; x < 8; x++) {
          gridItems[enc(x,y-1)].style.opacity = "0";
        }
      }
      

      for (let x = 0; x < 8; x++) {
        gridItems[enc(x,y)].style.opacity = (line >> 8-x) & 1
      }

      await sleep(50);
    }
  }
}

async function snake() {
  let left = false;

  let length = 15;
  let snake = []

  let x = 0;
  for (let y = 15; y >= 0; y--) {
    while (x >= 0 && x <= 7) {
      gridItems[enc(x,y)].style.opacity = '1'; 

      snake[snake.length % (length+1)] = y*8+x;
      if (snake.length > length) {
        let shift = snake.shift();
        gridItems[shift].style.opacity = decs(shift);
      }

      if (left) x--; else x++;
      await sleep(30);
    }
    if (left) x = 0; else x = 7;
    left = !left;
  }

  while (snake.length > 0) {
    let shift = snake.shift();
    gridItems[shift].style.opacity = decs(shift);
    await sleep(30);
  }
}

function fade() {}

function splitapart() {}

function randomdisappearing() {}

async function tick() {
  number = (number + 1) % 10;

  clear();

  await normal();
  //await tetris();
  //await snake();
  
  await sleep(1000);
  tick();
}

function autorun() {
  let grid = document.getElementById("grid");
  let block = grid.innerHTML;
  for (let i = 1; i < 8 * 8 * 2; i++) {
    grid.innerHTML += block;
  }

  for (let gridItem of gridItems) {
    gridItem.addEventListener("click", e => {
      let target = e.target;
      if (!target.style.opacity) target.style.opacity = "0";
      else target.style.opacity = "";
    });
  }

  tick();
}
if (window.addEventListener) window.addEventListener("load", autorun, false);
else if (window.attachEvent) window.attachEvent("onload", autorun);
else window.onload = autorun;
