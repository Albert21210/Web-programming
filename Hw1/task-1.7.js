let N = 4;
let allPerfect = [6, 28, 496, 8128];
let result = [];

for (let i = 0; i < N && i < allPerfect.length; i++) {
    result.push(allPerfect[i]);
}

console.log("Первые " + N + " совершенных чисел:", result);