let a = 15;
let b = 28;
let tempA = a;
let tempB = b;

while (tempB !== 0) {
    let temp = tempB;
    tempB = tempA % tempB;
    tempA = temp;
}

if (tempA === 1) {
    console.log(a + " и " + b + " взаимно просты");
} else {
    console.log(a + " и " + b + " НЕ взаимно просты");
}