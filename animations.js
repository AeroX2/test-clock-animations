WIDTH = 8;
HEIGHT = 16;

numbers = [
  /* 48 0x30 '0' */
  [ 0x27, 0x27, 0x45, 0x45, 0x45, 0x45, 0x45, 0x45, 0x39, 0x39 ]
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

//numbers = [
//[0x3C,0x3C,0x42,0x42,0x46,0x46,0x5A,0x5A,0x62,0x62,0x42,0x42,0x3C,0x3C,0x00,0x00],  // 0
//[0x08,0x08,0x18,0x18,0x08,0x08,0x08,0x08,0x08,0x08,0x08,0x08,0x1C,0x1C,0x00,0x00],  // 1
//[0x3C,0x3C,0x42,0x42,0x02,0x02,0x1C,0x1C,0x20,0x20,0x40,0x40,0x7E,0x7E,0x00,0x00],  // 2
//[0x7E,0x7E,0x02,0x02,0x04,0x04,0x1C,0x1C,0x02,0x02,0x42,0x42,0x3C,0x3C,0x00,0x00],  // 3
//[0x04,0x04,0x0C,0x0C,0x14,0x14,0x24,0x24,0x7E,0x7E,0x04,0x04,0x04,0x04,0x00,0x00],  // 4
//[0x7E,0x7E,0x40,0x40,0x7C,0x7C,0x02,0x02,0x02,0x02,0x42,0x42,0x3C,0x3C,0x00,0x00],  // 5
//[0x1E,0x1E,0x20,0x20,0x40,0x40,0x7C,0x7C,0x42,0x42,0x42,0x42,0x3C,0x3C,0x00,0x00],  // 6
//[0x7E,0x7E,0x02,0x02,0x04,0x04,0x08,0x08,0x10,0x10,0x10,0x10,0x10,0x10,0x00,0x00],  // 7
//[0x3C,0x3C,0x42,0x42,0x42,0x42,0x3C,0x3C,0x42,0x42,0x42,0x42,0x3C,0x3C,0x00,0x00],  // 8
//[0x3C,0x3C,0x42,0x42,0x42,0x42,0x3E,0x3E,0x02,0x02,0x04,0x04,0x78,0x78,0x00,0x00]];

//numbers = [
//[0x00,0x00,0x78,0xCC,0xCC,0xDC,0xDC,0xEC,0xEC,0xCC,0xCC,0x78,0x00,0x00,0x00],
//[0x00,0x00,0x30,0x70,0xF0,0x30,0x30,0x30,0x30,0x30,0x30,0x30,0x00,0x00,0x00],
//[0x00,0x00,0x78,0xCC,0xCC,0x0C,0x18,0x30,0x60,0xC0,0xC0,0xFC,0x00,0x00,0x00],
//[0x00,0x00,0x78,0xCC,0xCC,0x0C,0x38,0x0C,0x0C,0xCC,0xCC,0x78,0x00,0x00,0x00],
//[0x00,0x00,0x18,0x38,0x38,0x78,0x58,0xD8,0xD8,0xFC,0x18,0x18,0x00,0x00,0x00],
//[0x00,0x00,0xFC,0xC0,0xC0,0xF8,0xCC,0x0C,0x0C,0xCC,0xCC,0x78,0x00,0x00,0x00],
//[0x00,0x00,0x30,0x30,0x60,0x60,0xF8,0xCC,0xCC,0xCC,0xCC,0x78,0x00,0x00,0x00],
//[0x00,0x00,0xFC,0xCC,0xCC,0x18,0x18,0x18,0x30,0x30,0x30,0x30,0x00,0x00,0x00],
//[0x00,0x00,0x78,0xCC,0xCC,0x58,0x30,0x68,0xCC,0xCC,0xCC,0x78,0x00,0x00,0x00],
//[0x00,0x00,0x78,0xCC,0xCC,0xCC,0xCC,0x7C,0x18,0x18,0x30,0x30,0x00,0x00,0x00],
//[0x00,0x00,0x00,0x00,0x30,0x30,0x00,0x00,0x00,0x30,0x30,0x00,0x00,0x00,0x00],
//]
  
number = 0;
gridItems = document.getElementsByClassName("grid-item");

function dec(x,y) {
  return (numbers[number][y] >> (8-x)) & 1
  //return ((numbers[number][x] & 1<<(7-(y))) != 0)
}

function decs(shift) {
  return (numbers[number][Math.floor(shift / WIDTH)] >> (WIDTH-(shift%WIDTH))) & 1
}

function enc(x,y) {
  return y*WIDTH+x
}

function clear() {
  for (let gridItem of gridItems) gridItem.style.opacity = "0";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function normal() {
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      gridItems[enc(x,y)].style.opacity = dec(x,y);
    }
  }
}

async function tetris() {
  for (let i = HEIGHT-1; i >= 0; i--) {
    let line = numbers[number][i];
    if (line == 0) continue;

    for (let y = 0; y <= i; y++) {
      if (y > 0) {
        for (let x = 0; x < WIDTH; x++) {
          gridItems[enc(x,y-1)].style.opacity = "0";
        }
      }
      

      for (let x = 0; x < WIDTH; x++) {
        gridItems[enc(x,y)].style.opacity = (line >> WIDTH-x) & 1
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
  for (let y = HEIGHT-1; y >= 0; y--) {
    while (x >= 0 && x <= WIDTH-1) {
      gridItems[enc(x,y)].style.opacity = '1'; 

      snake[snake.length % (length+1)] = dec(x,y);
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

function snake2() {
}

function fade() {}

function splitapart() {}

function randomdisappearing() {}

async function tick() {
  await sleep(500);
  await clear();
  await normal();
  await sleep(500);

  //await sleep(500);
  //await clear();
  //await tetris();
  //await sleep(500);

  //await sleep(500);
  //await clear();
  //await snake();
  //await sleep(500);
  
  number = (number + 1) % numbers.length;
  tick();
}

function autorun() {
  let grid = document.getElementById("grid");
  grid.style.width = WIDTH*(54)+'px'

  let block = grid.innerHTML;
  for (let i = 1; i < WIDTH*HEIGHT; i++) {
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
