export class GlobalNode {
  data: string | number
  left: GlobalNode | null
  right: GlobalNode | null
  constructor (_data: string | number) {
    this.data = _data
    this.left = null
    this.right = null
  }
}

export interface INode {
  data: string | number
  next: INode | null
}

export interface INodeGraph {
  data: string | number
  left: INodeGraph | null
  right: INodeGraph | null
}

export default GlobalNode
