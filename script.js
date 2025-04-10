let board = [];
let score = 0;
let gameOver = false;
let gridCells = [];

const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restart');
const gridContainer = document.querySelector('.grid');
const gameOverMessage = document.createElement('div');

function createGrid() {
    gridContainer.innerHTML = '';
    gridCells = [];
    
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        gridContainer.appendChild(cell);
        gridCells.push(cell);
    }
}

function startNewGame() {
    board = [];
    score = 0;
    gameOver = false;
    scoreDisplay.textContent = score;

    createGrid();

    for (let i = 0; i < 4; i++) {
        board[i] = [0, 0, 0, 0];
    }

    generateRandomTile();
    generateRandomTile();

    updateBoard();
    removeGameOverMessage();
}

function generateRandomTile() {
    let emptyCells = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (board[row][col] === 0) {
                emptyCells.push([row, col]);
            }
        }
    }

    if (emptyCells.length > 0) {
        const [row, col] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        board[row][col] = Math.random() < 0.9 ? 2 : 4;
    }
}

function updateBoard() {
    gridCells.forEach((cell, index) => {
        const row = Math.floor(index / 4);
        const col = index % 4;
        const value = board[row][col];

        cell.textContent = value === 0 ? '' : value;
        cell.style.backgroundColor = getTileColor(value);
        cell.style.color = value > 4 ? '#f9f6f2' : '#776e65';
    });
    scoreDisplay.textContent = score;
}

function getTileColor(value) {
    switch (value) {
        case 2: return '#eee4da';
        case 4: return '#ede0c8';
        case 8: return '#f2b179';
        case 16: return '#f59563';
        case 32: return '#f67c5f';
        case 64: return '#f65e3b';
        case 128: return '#edcf72';
        case 256: return '#edcc61';
        case 512: return '#edc850';
        case 1024: return '#edc53f';
        case 2048: return '#edc22e';
        default: return '#cdc1b4';
    }
}

function move(direction) {
    if (gameOver) return;

    const oldBoard = JSON.stringify(board);
    const oldScore = score;

    switch (direction) {
        case 'up':
            for (let col = 0; col < 4; col++) {
                let stack = [];
                for (let row = 0; row < 4; row++) {
                    if (board[row][col] !== 0) {
                        stack.push(board[row][col]);
                    }
                }

                for (let i = 0; i < stack.length - 1; i++) {
                    if (stack[i] === stack[i + 1]) {
                        stack[i] *= 2;
                        score += stack[i];
                        stack.splice(i + 1, 1);
                    }
                }

                while (stack.length < 4) {
                    stack.push(0);
                }

                for (let row = 0; row < 4; row++) {
                    board[row][col] = stack[row];
                }
            }
            break;

        case 'down':
            for (let col = 0; col < 4; col++) {
                let stack = [];
                for (let row = 3; row >= 0; row--) {
                    if (board[row][col] !== 0) {
                        stack.push(board[row][col]);
                    }
                }

                for (let i = 0; i < stack.length - 1; i++) {
                    if (stack[i] === stack[i + 1]) {
                        stack[i] *= 2;
                        score += stack[i];
                        stack.splice(i + 1, 1);
                    }
                }

                while (stack.length < 4) {
                    stack.push(0);
                }

                for (let row = 3; row >= 0; row--) {
                    board[row][col] = stack[3 - row];
                }
            }
            break;

        case 'left':
            for (let row = 0; row < 4; row++) {
                let stack = [];
                for (let col = 0; col < 4; col++) {
                    if (board[row][col] !== 0) {
                        stack.push(board[row][col]);
                    }
                }

                for (let i = 0; i < stack.length - 1; i++) {
                    if (stack[i] === stack[i + 1]) {
                        stack[i] *= 2;
                        score += stack[i];
                        stack.splice(i + 1, 1);
                    }
                }

                while (stack.length < 4) {
                    stack.push(0);
                }

                for (let col = 0; col < 4; col++) {
                    board[row][col] = stack[col];
                }
            }
            break;

        case 'right':
            for (let row = 0; row < 4; row++) {
                let stack = [];
                for (let col = 3; col >= 0; col--) {
                    if (board[row][col] !== 0) {
                        stack.push(board[row][col]);
                    }
                }

                for (let i = 0; i < stack.length - 1; i++) {
                    if (stack[i] === stack[i + 1]) {
                        stack[i] *= 2;
                        score += stack[i];
                        stack.splice(i + 1, 1);
                    }
                }

                while (stack.length < 4) {
                    stack.push(0);
                }

                for (let col = 3; col >= 0; col--) {
                    board[row][col] = stack[3 - col];
                }
            }
            break;
    }

    if (JSON.stringify(board) !== oldBoard || score !== oldScore) {
        generateRandomTile();
        updateBoard();
        checkGameOver();
    }
}

function checkGameOver() {
    if (isGameOver()) {
        gameOver = true;
        showGameOverMessage();
    }
}

function isGameOver() {
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (board[row][col] === 0) return false;
            if (row < 3 && board[row][col] === board[row + 1][col]) return false;
            if (col < 3 && board[row][col] === board[row][col + 1]) return false;
        }
    }
    return true;
}

function showGameOverMessage() {
    const overlay = document.createElement('div');
    overlay.className = 'game-overlay';
    
    const message = document.createElement('div');
    message.className = 'game-over-message';
    message.textContent = 'Game Over!';
    
    overlay.appendChild(message);
    gridContainer.appendChild(overlay);
}

function removeGameOverMessage() {
    const overlay = document.querySelector('.game-overlay');
    if (overlay) {
        overlay.remove();
    }
}

document.addEventListener('keydown', (event) => {
    if (gameOver) return;

    switch (event.key) {
        case 'ArrowUp':
            move('up');
            break;
        case 'ArrowDown':
            move('down');
            break;
        case 'ArrowLeft':
            move('left');
            break;
        case 'ArrowRight':
            move('right');
            break;
        default:
            return;
    }
});

startNewGame();