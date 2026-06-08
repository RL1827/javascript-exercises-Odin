const findTheOldest = function(arr) {
    arr.sort((a,b) => a.yearOfBirth - b.yearOfBirth)
    return arr[arr.length - 1]
};

// Do not edit below this line
module.exports = findTheOldest;
