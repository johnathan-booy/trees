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
		let sum = 0;

		// New Queue with the root TreeNode
		const queue = new Queue();
		if (this.root) {
			queue.enqueue(this.root);
		}

		// Keep summing as long as their are TreeNodes left in the queue
		while (queue.size > 0) {
			// Dequeue the first TreeNode in the Queue
			const currentNode = queue.dequeue();

			// Add children of currentNode to the Queue
			if (currentNode.children) {
				currentNode.children.map((child) => queue.enqueue(child));
			}

			// Add dequeue'd TreeNode's value to the sum
			sum += currentNode.val;
		}

		return sum;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens() {}

	/** numGreater(lowerBound): return a count of the number of nodes
	 * whose value is greater than lowerBound. */

	numGreater(lowerBound) {}
}

module.exports = { Tree, TreeNode };
