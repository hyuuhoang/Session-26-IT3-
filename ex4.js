let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let filternumber = number.filter(function(element) {
    return isPrime(element) && element % 2 !== 0;
});

console.log(filternumber);
