/** TreeNode: node for a general tree. */

const Queue = require("./queue");

class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */

	sumValues() {
		if (!this.root) return 0;

		let sum = 0;

		// New Queue, initialized with the root TreeNode
		const queue = new Queue();
		queue.enqueue(this.root);

		while (queue.size > 0) {
			const currentNode = queue.dequeue();

			// Add children of currentNode to the Queue
			currentNode.children.map((child) => queue.enqueue(child));

			sum += currentNode.val;
		}

		return sum;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens() {
		if (!this.root) return 0;

		let count = 0;

		// New Queue, initialized with the root TreeNode
		const queue = new Queue();
		queue.enqueue(this.root);

		while (queue.size > 0) {
			const currentNode = queue.dequeue();

			// Add children of currentNode to the Queue
			currentNode.children.map((child) => queue.enqueue(child));

			if (currentNode.val % 2 === 0) {
				count++;
			}
		}

		return count;
	}

	/** numGreater(lowerBound): return a count of the number of nodes
	 * whose value is greater than lowerBound. */

	numGreater(lowerBound) {
		if (!this.root) return 0;

		let count = 0;

		// New Queue, initialized with the root TreeNode
		const queue = new Queue();
		queue.enqueue(this.root);

		while (queue.size > 0) {
			const currentNode = queue.dequeue();

			// Add children of currentNode to the Queue
			currentNode.children.map((child) => queue.enqueue(child));

			if (currentNode.val > lowerBound) {
				count++;
			}
		}
		return count;
	}
}

module.exports = { Tree, TreeNode };
