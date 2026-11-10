let n = 24;
let divisors = [];

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        divisors.push(i);
    }
}

console.log("Делители числа " + n + ":", divisors);