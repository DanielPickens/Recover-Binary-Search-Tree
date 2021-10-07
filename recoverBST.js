let recoverTree = function(root, first) {
	let x = null, y = null, pred = null, node = root;

	while (node != null) {
		if (node.left != null) {
			let predecessor = node.left;
			while (predecessor.right != null && predecessor.right != node) {
				predecessor = predecessor.right;
			}
			if (predecessor.right == null) {
				predecessor.right = node;
				node = node.left;
			} else {
				if (pred != null && pred.val > node.val) {
					y = node;
					if (x == null) x = pred;
				}

				pred = node;
				predecessor.right = null;
				node = node.right;
			}
		} else {
			if (pred != null && pred.val > node.val) {
				y = node;
				if (x == null) x = pred;
			}

			pred = node;
			node = node.right;
		}
	}
	swap(x, y);
}

let swap = function( x,  y) {
	if (x != y) {
		let tmp = x.val;
		x.val = y.val;
		y.val = tmp;
	}
}


/*
Success
Details 
Runtime: 132 ms, faster than 100.00% of JavaScript online submissions for Recover Binary Search Tree.
Memory Usage: 48.1 MB, less than 83.50% of JavaScript online submissions for Recover Binary Search Tree.
*/
