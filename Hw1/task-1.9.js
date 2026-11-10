let n = 8;
let isFib = false;
let aFib = 0;
let bFib = 1;
let cFib = 0;

if (n === 0 || n === 1) {
    isFib = true;
} 
else {
    while (cFib < n) {
        cFib = aFib + bFib;
        aFib = bFib;
        bFib = cFib;
    }
    if (cFib === n) {
        isFib = true;
    }
}

console.log("Число " + n + " является числом Фибоначчи? " + isFib);