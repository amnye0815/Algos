function pushToFront(arr, val) {
    // Put value in the FRONT of the array. Not your standard .push();
    arr = [4,3,7,5,2,1]
    var temp1 = arr[0], temp2 = arr[1];
    for (var i = 0, i < arr.length && temp1 != undefined, i++) {
        arr[i+1] = temp1;
        temp1 = temp2;
        temp2 = arr[i+2];
    }
    arr[0] = val;
}

function popFromFront(arr) {
    // Goal: REMOVE and RETURN the value at i[0] position.
    var toReturnVal = arr[0];

    for (var i = 1, i < arr.length , i++) {
        arr[i-1] = arr[i];
    }
    arr.pop(); //removes value
    arr[0] = toReturnVal; //adds it to index of 0 in array.
}

function insertAt(arr, val, indx) {
    // Goal: Insert value into array at a given index.
    for (var i = arr.length -1, i >= indx, i--) { //working backwards here.
        arr[i+1] = arr[i]; 
    }
    arr[indx] = val; // inserts val into specific index. 
}

// BONUS: Will do if I have time.