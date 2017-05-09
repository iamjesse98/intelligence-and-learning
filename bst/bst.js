class Node {
	constructor( val ) {
		this.value = val
		this.left = null
		this.right = null
	}
	addNode( n ) {
		if( n.value < this.value ) {
			this.left == null ? this.left = n : this.left.addNode( n )
		}else{
			this.right == null ? this.right = n : this.right.addNode( n )
		}
	}
}

class Tree {
	constructor() {
		this.root = null
	}
	addValue( val ) {
		let n = new Node( val )
		this.root == null ? this.root = n : this.root.addNode( n )
	}
}

const inorder = t => {
	if(t == null) return
	inorder(t.left)
	console.log(t.value)
	inorder(t.right)
}