// convert from farheinheit to celcius

function convertFahrToCelcius(n) {
    // n = parseInt(n);
    let std = -17.7778;
    let num = parseFloat(n);
    let temp = 0;
    console.log(num)
    if (Array.isArray(n)) {
        return (`${n.length>0? '[' + n + ']' : "[]"} is not a valid number but an array`);
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

let n = convertFahrToCelcius([2,]);
console.log(n);