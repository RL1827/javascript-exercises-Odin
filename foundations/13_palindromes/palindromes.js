const palindromes = function (a) {
    let b = a.split("")
    b.reverse()
    b = b.join("")

    if (b === a){
        return true
    }
    return false
};


// Do not edit below this line
module.exports = palindromes;
