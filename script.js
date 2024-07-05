sumofdigits = (num) => {
    var sum = 0;
    while (num > 0) {
        sum += num % 10;
        num /= 10;
        num = parseInt(num);
    }
    return sum;
};
prodofdigits = (num) => {
    var prod = 1;
    while (num > 0) {
        prod *= num % 10;
        num /= 10;
        num = parseInt(num);
    }
    return prod;
}
function checkSpyNumber() {
    let inputval = parseInt(document.getElementById("input").value);
    let ans = "The Given Value is Not a Spy Number";
    console.log(typeof inputval, sumofdigits(inputval), prodofdigits(inputval))
    if (sumofdigits(inputval) == prodofdigits(inputval)) {
        ans = "The Given Value is a Spy Number"
    }
    document.getElementById("res-text").innerHTML = ans;
}