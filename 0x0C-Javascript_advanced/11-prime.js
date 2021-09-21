function countPrimeNumbers() {
    let count = 0;
    for (let j = 2; j < 100; j++) {
        let prime = 0;
        for (var i = 2; i < 100; i++) if (j % i === 0) prime++;
        if (prime < 2) {
            count++;
        }
    }
    return count;
}

var t0 = performance.now();
for (let i = 0; i < 100; i++) {
    setTimeout(() => countPrimeNumbers(), 0);
}
var t1 = performance.now();

console.log("Execution time of calculating prime numbers 100 times was " + (t1 - t0) + " milliseconds.");
