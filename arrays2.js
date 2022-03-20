// Arrays TO DO 2

// Reverse
function reverse(arr) {
    // loop through array until the middle...then insert values in front of. 
    for (var i = 0, i < arr.length/2, i++) {
        var temp = arr[i]; //holding value 
        arr[i] = arr[arr.length -1 -i]; //set value
        arr[arr.length - 1 - i]=temp; //swap value
    }
}

// Rotate
function rotate(arr, shiftBy) {
    reverse(arr); //reverse array from above 
    var movements; //create variable for movements.
    if (shiftBy > 0) {
        movements = shiftBy % arr.length;
    } else {
        movements = Math.abs(shiftBy) % arr.length;
    }
    if (shiftBy > 0) {
        reverse(arr,0,movements - 1); 
        reverse(arr,0,movements, arr.length - 1); 
    } else {
        reverse(arr,0,arr.length-movements-1);
        reverse(arr, arr.length - movements, arr.length -1);
    }
}

// Filter Range

function filter(arr, min, max) {
    // Loop through the array
    for (var i = 0; i < arr.length; i++) {
        // If value is outside of min and max values - Move everything that comes afterwards left one index
        if (arr[i] < min || arr[i] > max) {
            for (var x = i+1; x < arr.length; x++) {
                arr[x-1] = arr[x];
            }
            arr.length--; // shorten array by one
            i--; // end loop
        }
    }
}

// Concat

function concat(arr1, arr2) {
    var newArr = [];
    var idx = 0; 
    for (var i = 0; i < arr1.length; i++) {
        newArr[idx] = arr1[i];
        idx++;
    }
    for (var i = 0; i < arr2.length; i++) {
        newArr.push(arr1[i]);
        newArr[idx] = arr2[i];
        idx++;
    }
    return newArr;
}