let n = 7;
let isPrime = true;

if (n < 2) {
    isPrime = false;
} 
else {
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log("Число " + n + " простое? " + isPrime);