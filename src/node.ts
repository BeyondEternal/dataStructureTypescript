export class GlobalNode {
  data: string | number
  next: object | null
  constructor(_data: string | number){
    this.data = _data
    this.next = null
  }
}

export interface INode {
  data: string | number
  next: INode | null
}

export default GlobalNode