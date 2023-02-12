import { INodeGraph, GlobalNode } from './node'

export default class BinarySearchTree {
  root: INodeGraph | null = null

  insert (data: string | number) {
    const newNode = new GlobalNode(data)
    if (this.root == null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode (node: INodeGraph, newNode: INodeGraph) {
    if (newNode.data < node.data) {
      if (node.left == null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right == null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  remove (data: string | number) {
    this.root = this.removeNode(this.root, data)
  }

  removeNode (node: INodeGraph | null, key: string | number): INodeGraph | null {
    if (node == null) {
      return null
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      if (node.left == null && node.right == null) {
        node = null
        return node
      }

      if (node.left == null) {
        node = node.right
        return node
      } else if (node.right == null) {
        node = node.left
        return node
      }

      const aux = this.findMinNode(node.right)
      node.data = aux?.data ?? node.data

      if (aux != null) {
        node.right = this.removeNode(node.right, aux.data)
      }
      return node
    }
  }

  inorder (node: INodeGraph | null) {
    if (node !== null) {
      this.inorder(node.left)
      console.log(node.data)
      this.inorder(node.right)
    }
  }

  preorder (node: INodeGraph | null) {
    if (node !== null) {
      console.log(node.data)
      this.preorder(node.left)
      this.preorder(node.right)
    }
  }

  postorder (node: INodeGraph | null) {
    if (node !== null) {
      this.postorder(node.left)
      this.postorder(node.right)
      console.log(node.data)
    }
  }

  findMinNode (node: INodeGraph): INodeGraph | null {
    if (node.left == null) {
      return node
    } else {
      return this.findMinNode(node.left)
    }
  }

  getRootNode () {
    return this.root
  }

  search (data: string | number) {
    this.searchNode(this.root, data)
  }

  searchNode (node: INodeGraph | null, data: string | number): INodeGraph | null {
    if (node == null) {
      return null
    } else if (data < node.data) {
      return this.searchNode(node.left, data)
    } else if (data > node.data) {
      return this.searchNode(node.right, data)
    } else {
      return node
    }
  }
}
