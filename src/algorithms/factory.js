import Dijkstra from './Dijkstra';
import BreadthFirstSearch from './BreadthFirstSearch';
import DepthFirstSearch from './DepthFirstSearch';
import { DIJKSTRA,  BFS, DFS } from '../constants';

const PATHFINDER_MAPPING = {
  [DIJKSTRA]: Dijkstra,
  [BFS]: BreadthFirstSearch,
  [DFS]: DepthFirstSearch,
};

export default PATHFINDER_MAPPING;
