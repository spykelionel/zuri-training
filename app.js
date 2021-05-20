

// Test temperature conversion
console.log("Testing temperature conversion")
let temp = convertFahrToCelcius(33.4);
console.log(temp);
temp = convertFahrToCelcius([]);
console.log(temp);
temp = convertFahrToCelcius({ temp: 23 });
console.log(temp);
temp = convertFahrToCelcius("this is a string");
console.log(temp);

console.log('')
console.log('')
// test checkisgiyu.
console.log("Testing checkYuGiYu")
let n = checkYuGiOh(10);
console.log(n);
n = checkYuGiOh("fizzbuzz is meh");
console.log(n);
n = checkYuGiOh("33");
console.log(n);
n = checkYuGiOh([]);
console.log(n);
n = checkYuGiOh(22.5);
console.log(n);

// convert from farheinheit to celcius

function convertFahrToCelcius(n) {
    // n = parseInt(n);
    let std = -17.7778;
    let num = parseFloat(n);
    let temp = 0;
    if (Array.isArray(n)) {
        return (`${n.length > 0 ? '[' + n + ']' : "[]"} is not a valid number but an array`);
    }

    if (isNaN(num)) {
        return (`${n} is not a valid number but a/an ${typeof n}`);
    }

    if (num == 0) {
        temp = std;
    } else {
        temp = (num - 32) * (5 / 9);
    }

    return (temp.toFixed(4) + " deg C");
}


// function checkYuGiOh
function checkYuGiOh(n) {
    word = '';
    list = [];

    if (!Number.isSafeInteger(n)) {
        return (`invalid paramenter: ${'"' + n + '"'}`);
    }
    for (i = 1; i <= n; i++) {
        if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
            word = "yu-gi-oh";
            list.push(word);
        } else if (i % 2 == 0 && i % 3 != 0 && i % 5 != 0) {
            word = "yu";
            list.push(word);
        } else if (i % 3 == 0 && i % 2 != 0 && i % 5 != 0) {
            word = "gi";
            list.push(word);
        } else if (i % 5 == 0 && i % 2 != 0 && i % 3 != 0) {
            word = "oh";
            list.push(word);
        } else if (i % 2 == 0 && i % 3 == 0) {
            word = "yu-gi";
            list.push(word);
        } else if (i % 2 == 0 && i % 5 == 0) {
            word = "yu-oh";
            list.push(word);
        } else if (i % 3 == 0 && i % 5 == 0) {
            word = "gi-oh";
            list.push(word);
        } else {
            word = "" + i + "";
            list.push(word);
        }
    }
    return list;
}
