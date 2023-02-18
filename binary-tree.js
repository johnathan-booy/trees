/** BinaryTreeNode: node for a general tree. */

const Queue = require("./queue");

class BinaryTreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	constructor(root = null) {
		this.root = root;
	}

	/** minDepth(): return the minimum depth of the tree -- that is,
	 * the length of the shortest path from the root to a leaf. */

	minDepth() {
		if (!this.root) return 0;

		function minDepthHelper(node) {
			if (node.left === null && node.right === null) return 1;
			if (node.left === null) return minDepthHelper(node.right) + 1;
			if (node.right === null) return minDepthHelper(node.left) + 1;
			return (
				Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1
			);
		}

		return minDepthHelper(this.root);
	}

	/** maxDepth(): return the maximum depth of the tree -- that is,
	 * the length of the longest path from the root to a leaf. */

	maxDepth() {
		if (!this.root) return 0;

		// Each element in the stack contains [node, depth]
		const stack = [[this.root, 1]];

		// Depth of the deepest leaf node
		let max = 0;

		while (stack.length > 0) {
			const [node, depth] = stack.pop();

			// If node is the deepest leaf node so far, set new max
			if (!node.left && !node.right) {
				max = Math.max(max, depth);
			}

			// Add descendants to the stack
			if (node.left) {
				stack.push([node.left, depth + 1]);
			}
			if (node.right) {
				stack.push([node.right, depth + 1]);
			}
		}

		return max;
	}

	/** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
	 * The path doesn't need to start at the root, but you can't visit a node more than once. */

	maxSum() {}

	/** nextLarger(lowerBound): return the smallest value in the tree
	 * which is larger than lowerBound. Return null if no such value exists. */

	nextLarger(lowerBound) {}

	/** Further study!
	 * areCousins(node1, node2): determine whether two nodes are cousins
	 * (i.e. are at the same level but have different parents. ) */

	areCousins(node1, node2) {}

	/** Further study!
	 * serialize(tree): serialize the BinaryTree object tree into a string. */

	static serialize() {}

	/** Further study!
	 * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

	static deserialize() {}

	/** Further study!
	 * lowestCommonAncestor(node1, node2): find the lowest common ancestor
	 * of two nodes in a binary tree. */

	lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
