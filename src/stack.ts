class Stack {
  dataStore: (number[] | string[]) = []
  top: number = 0

  push (element: number | string): void {
    this.dataStore[this.top++] = element
  }

  peek (): number | string {
    return this.dataStore[this.top - 1]
  }

  pop (): number | string {
    return this.dataStore[--this.top]
  }

  clear (): void {
    this.top = 0
  }

  length (): number {
    return this.top
  }
}
