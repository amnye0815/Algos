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

// Remove front ////////////////////////////////////////////////////////////////////
    removeFront() {
        if (this.head == null) {
            return this.head;
        }
        const removeNode = this.head; //picking head
        this.head = removeNode.next; //making head the next node
        removeNode.next = null; // making the value null (nothing)
        return this.head; //return the value of null.
    }

    // // Front ////////////////////////////////////////////////////////////////////////
    front() {
        if (this.head == null) {
            return null;
        } else {
            return this.head.value;
        }
    }

}


const mySLL = new SLL(); // starting off with an empty list.

mySLL.addFront(3);
mySLL.addFront(15);
console.log(mySLL);
mySLL.removeFront();
console.log(mySLL);
console.log(mySLL.front()); 
