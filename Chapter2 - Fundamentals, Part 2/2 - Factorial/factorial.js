const factorial = (num) => {
    let total = 1;
    for (let i = 1; i <= num; i++) {
        total *= i;
    }
    console.log(total);
    return total;
};

factorial(5);
