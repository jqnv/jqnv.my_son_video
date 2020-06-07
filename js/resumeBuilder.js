var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = _array;
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.

    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];

    // Your code goes in here!

    var newValue=newArray.pop()+1;
    newArray=newArray.push(newValue);

    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));
