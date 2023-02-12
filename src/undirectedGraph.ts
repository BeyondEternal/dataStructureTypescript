import { INodeGraph } from './node'
import Queue from './queue'

export default class Graph {
  noOfVertices: number
  AdjList: Map<INodeGraph, INodeGraph[]>

  constructor (noOfVertices: number) {
    this.noOfVertices = noOfVertices
    this.AdjList = new Map<INodeGraph, INodeGraph[]>()
  }

  addVertex (v: INodeGraph) {
    this.AdjList.set(v, [])
  }

  addEdge (v: INodeGraph, w: INodeGraph) {
    const vList = this.AdjList.get(v)
    const wList = this.AdjList.get(w)
    if (vList != null && wList != null) {
      vList.push(w)
      wList.push(v)
    }
  }

  printGraph () {
    const get_keys = this.AdjList.keys()
    for (const i of get_keys) {
      const get_values = this.AdjList.get(i)
      let conc = ''
      if (get_values != null) {
        for (const j of get_values) {
          conc += j.data.toString() + ' '
        }
      }
      console.log(i.data.toString() + ' -> ' + conc)
    }
  }

  bfs (startingNode: INodeGraph) {
    const visited: { [key: string]: boolean } = {}
    const q = new Queue()

    visited[startingNode.data.toString()] = true
    q.enqueue(startingNode)

    while (!q.isEmpty()) {
      const getQueueElement = q.front()
      console.log(getQueueElement.data.toString())
      const get_List = this.AdjList.get(getQueueElement)
      if (get_List != null) {
        for (const neigh of get_List) {
          if (!visited[neigh.data.toString()]) {
            visited[neigh.data.toString()] = true
            q.enqueue(neigh)
          }
        }
      }
      q.dequeue()
    }
  }

  dfs (startingNode: INodeGraph) {
    const visited: { [key: string]: boolean } = {}
    this.DFSUtil(startingNode, visited)
  }

  // Recursive function which process and explore
  // all the adjacent vertex of the vertex with which it is called
  DFSUtil (vert: INodeGraph, visited: { [key: string]: boolean }) {
    visited[vert.data.toString()] = true
    console.log(vert.data.toString())

    const get_neighbors = this.AdjList.get(vert)

    if (get_neighbors != null) {
      for (const i in get_neighbors) {
        const get_elem = get_neighbors[i]
        if (!visited[get_elem.data.toString()]) {
          this.DFSUtil(get_elem, visited)
        }
      }
    }
  }
}


/* Example code
const graphUndirected = new Graph(6)

const vertices = ['A', 'B', 'C', 'D', 'E', 'F']
const nodeVertices: INodeGraph[] = []

for (let i = 0; i < vertices.length; i++) {
  const node = { data: vertices[i], left: null, right: null }
  nodeVertices.push(node)
  graphUndirected.addVertex(node)
}

graphUndirected.addEdge(nodeVertices[0], nodeVertices[1])
graphUndirected.addEdge(nodeVertices[0], nodeVertices[3])
graphUndirected.addEdge(nodeVertices[0], nodeVertices[4])
graphUndirected.addEdge(nodeVertices[1], nodeVertices[2])
graphUndirected.addEdge(nodeVertices[3], nodeVertices[4])
graphUndirected.addEdge(nodeVertices[4], nodeVertices[5])
graphUndirected.addEdge(nodeVertices[4], nodeVertices[2])
graphUndirected.addEdge(nodeVertices[2], nodeVertices[5])

graphUndirected.printGraph()

graphUndirected.bfs(nodeVertices[0])
graphUndirected.dfs(nodeVertices[0])
*/