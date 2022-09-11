// Write Code!
let cscore = 0;
let uscore = 0;
let cpu;
let user;
let win;
let cpuref = { 1: `Rock`, 2: `Paper`, 3: `Scissors` };
let jawab = { Rock: `Paper wrapped Rock`, Scissors: `Rock crushed Scissors`, Paper: `Scissors cuts down Paper` };
let image = { Rock: `rock.jpeg`, Scissors: `scissors.jpeg`, Paper: `paper.jpeg` };

// helper function
const winner = (x) => {
  cpuchoice();
  pic(x);
  if (cpu == x) {
    return `it's a Tie<br>Try Again 😒`;
  } else {
    win = jawab[cpu];
    if (win.includes(x)) {
      uscore++; scores();
      return jawab[cpu] + `<br>Congratulations!😍 you win`;
    } else {
      cscore++; scores();
      return jawab[x] + `<br>Game over!😵‍💫 you lose`;
    }
  }
  console.log('yes');
}
const scores = () => {
  document.getElementById("cscore").innerHTML = `${cscore}`;
  document.getElementById("uscore").innerHTML = `${uscore}`;
}
const pic = (x) => {
  document.getElementById("uicon").src = `${image[x]}`;
  document.getElementById("cicon").src = `${image[cpu]}`;
}
const cpuchoice = () => {
  cpu = Math.floor(Math.random() * 3) + 1;
  cpu = cpuref[cpu];
}

const clicks = () => {
  document.getElementById("para").innerHTML = `${winner('Scissors')}`;
}
const clickr = () => {
  document.getElementById("para").innerHTML = `${winner('Rock')}`;
}
const clickp = () => {
  document.getElementById("para").innerHTML = `${winner('Paper')}`;
}
