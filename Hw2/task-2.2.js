let original = [9, 8, 7, 6, 5, 4, 3, 2, 1];

let copy1 = original.slice();
copy1.reverse();

let copy2 = original.slice();
let reversedCopy2 = [];
for (let i = copy2.length - 1; i >= 0; i--) {
    reversedCopy2.push(copy2[i]);
}

console.log("Оригинал:", original);
console.log("Копия 1 (reverse):", copy1);
console.log("Копия 2 (цикл):", reversedCopy2);