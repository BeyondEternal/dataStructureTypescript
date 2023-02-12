import { INode } from './node'

export class Linked {
  head: INode
  tail: INode
  size: number = 0

  constructor (node: INode) {
    this.head = node
    this.tail = node
    this.size = 1
  }

  getHead (): INode {
    return this.head
  }

  prepend (node: INode) {
    node.next = this.head
    this.head = node
    this.size++
  }

  append (node: INode) {
    node.next = null
    this.tail.next = node
    this.tail = node
    this.size++
  }

  traverse () {
    let node: INode | null = this.head
    while (node != null) {
      console.log(node.data)
      node = node.next
    }
  }

  contains (value: string | number): boolean {
    let node: INode | null = this.head
    while (node != null) {
      if (value == node.data) {
        return true
      }
      node = node.next
    }
    return false
  }

  getTail (): INode {
    return this.tail
  }
}

export default Linked
