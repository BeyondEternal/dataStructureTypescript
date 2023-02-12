class Queue {
  dataStore: Array<string | number> = []

  enqueue (element: string | number): void {
    this.dataStore.push(element)
  }

  dequeue (): void {
    this.dataStore.shift()
  }

  front (): string | number {
    return this.dataStore[0]
  }

  back (): string | number {
    return this.dataStore[this.dataStore.length - 1]
  }

  toString (): string {
    let retStr: string = ''
    for (const value of this.dataStore) {
      retStr += value + '\n'
    }
    return retStr
  }

  isEmpty (): boolean {
    return this.dataStore.length == 0
  }
}
