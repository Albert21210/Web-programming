let str = "background-color";
let parts = str.split("-");
let result = parts[0];

for (let i = 1; i < parts.length; i++) {
    let word = parts[i];
    let capitalized = word.at(0).toUpperCase() + word.slice(1);
    result = result + capitalized;
}

console.log(result); // backgroundColor