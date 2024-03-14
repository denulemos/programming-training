function findPath(maze, start, end) {
    const visited = new Set();
    
    function dfs(current) {
        const [x, y] = current;
        if (x < 0 || y < 0 || x >= maze.length || y >= maze[0].length || maze[x][y] === 1 || visited.has(`${x},${y}`)) {
            return false;
        }
        
        visited.add(`${x},${y}`);
        
        if (x === end[0] && y === end[1]) {
            return true;
        }
        
        if (dfs([x + 1, y]) || dfs([x, y + 1]) || dfs([x - 1, y]) || dfs([x, y - 1])) {
            console.log(`(${x},${y})`);
            return true;
        }
        
        return false;
    }
    
    dfs(start);
}

// Ejemplo de uso
const maze = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
];
findPath(maze, [0, 0], [4, 4]);
