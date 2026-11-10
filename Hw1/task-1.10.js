let n = 6;
let result = 1;
let tempN = n;

while (tempN > 1) {
    result *= tempN;
    tempN -= 2;
}

console.log("Двойной факториал " + n + "!! = " + result);