module.exports = {
    factorialize: function (num) {
        if (num < 10 || num > 99) {
            return "Please enter a 2-digit integer.";
        } else if (num > 22) {
            let factorial = BigInt(1);
            for (let i = 2n; i <= BigInt(num); i++) {
                factorial *= i;
            }
            const factorialStr = Number(factorial).toExponential(15);
            const [coefficient, exponent] = factorialStr.split("e+");
            return `The factorial of ${num} is: ${coefficient}e+${exponent}`;
        } else if (num == 22) {
            let factorial = BigInt(1);
            for (let i = 2n; i <= BigInt(num); i++) {
                factorial *= i;
            }
            const factorialStr = Number(factorial).toExponential(16);
            const [coefficient, exponent] = factorialStr.split("e+");
            return `The factorial of ${num} is: ${coefficient}e+${exponent}`;
        } else {
            let factorial = 1;
            for (let i = 2; i <= num; i++) {
                factorial *= i;
            }
            return `The factorial of ${num} is: ${factorial}`;
        }
    }
}