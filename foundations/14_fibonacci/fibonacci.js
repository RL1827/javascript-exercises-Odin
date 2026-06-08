const fibonacci = function(a) {
    first = 1
    second = 1
    third = 2
    if (a == 1){
        return first
    } else if (a == 2){
        return second
    } else if (a == 3){
        return third
    }
    for (let i = 3; i<a; i++){
        let temp = 0
        temp = third
        third = third + second
        first = second
        second = temp
    }
    return third
};

// Do not edit below this line
module.exports = fibonacci;
