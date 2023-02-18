/** Node: node for a queue. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	/** enqueue(val): add new value to end of the queue. Returns undefined. */

	enqueue(val) {
		// Create a newNode
		const newNode = new Node(val);

		// If the queue is empty, then the newNode is in front of the queue
		if (this.size === 0) {
			this.first = newNode;
		}

		// Make sure the previous last Node points to the newNode
		if (this.last) {
			this.last.next = newNode;
		}

		// Add newNode to the back of the queue
		this.last = newNode;

		// Increment the size of the queue
		this.size++;
	}

	/** dequeue(): remove the node from the start of the queue
	 * and return its value. Should throw an error if the queue is empty. */

	dequeue() {
		// Throws an error if the queue is empty
		if (!this.size) throw new Error("Queue is empty");

		// Retrieve the first in the queue
		const node = this.first;

		// Set new first
		this.first = this.first.next;

		// Decrement size of the queue
		this.size--;

		return node.val;
	}

	/** peek(): return the value of the first node in the queue. */

	peek() {
		if (this.size) {
			return this.first.val;
		}
	}

	/** isEmpty(): return true if the queue is empty, otherwise false */

	isEmpty() {
		if (this.size > 0) {
			return false;
		} else {
			return true;
		}
	}
}

module.exports = Queue;
