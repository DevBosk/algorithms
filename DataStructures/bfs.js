import { Node } from "./bst.js";

let rootNode = new Node(10);
rootNode.left = new Node(6);
rootNode.right = new Node(15);
rootNode.right.right = new Node(20);
rootNode.left.left = new Node(3);
rootNode.left.right = new Node(8);

function BFS() {
	let tempArr = [], 
			resultArr = [],
			element = null;

	tempArr.push(rootNode);

	while(tempArr.length > 0) {
		element = tempArr.shift();
		resultArr.push(element.value);

		if(element.left) tempArr.push(element.left);
		if(element.right) tempArr.push(element.right);
	}

	console.log(resultArr);
}

BFS();