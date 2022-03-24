// Add front ///////////////////////////////////////////////////////////////////////
class SLLNode { // Node class
    constructor(val) {
        this.value = val; // holds value for node
        this.next = null; // goes to next node
    }
}

class SLL {
    constructor() {
    	this.head = null; // head points to first node in SL List.
    }

    // methods for class SLL listed here
    addFront(value) {
        const newNode = new SLLNode(value);
        newNode.next = this.head; //adding new node to next position at beginning of list.
        this.head = newNode; // cont of above.
        return this; // return value at front of list.
    }
}

const mySLL = new SLL();
mySLL.addFront(3);
mySLL.addFront(15);
console.log(mySLL);

// Remove front ////////////////////////////////////////////////////////////////////
class SLL {
    removeFront() {
    }
}

// // Front /////////////////////////////////////////////////////////////////////////
// class SLL {
//     front() {

//     }
// }