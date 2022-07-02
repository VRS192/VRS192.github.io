const r1c1 = document.getElementById("r1c1");
const r1c2 = document.getElementById("r1c2");
const r1c3 = document.getElementById("r1c3");
const r1c4 = document.getElementById("r1c4");
const r2c1 = document.getElementById("r2c1");
const r2c2 = document.getElementById("r2c2");
const r2c3 = document.getElementById("r2c3");
const r2c4 = document.getElementById("r2c4");
const r3c1 = document.getElementById("r3c1");
const r3c2 = document.getElementById("r3c2");
const r3c3 = document.getElementById("r3c3");
const r3c4 = document.getElementById("r3c4");
const r4c1 = document.getElementById("r4c1");
const r4c2 = document.getElementById("r4c2");
const r4c3 = document.getElementById("r4c3");
const r4c4 = document.getElementById("r4c4");

const board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

const updateBoard = () => {
    r1c1.innerText = board[0][0] || "";
    r1c2.innerText = board[0][1] || "";
    r1c3.innerText = board[0][2] || "";
    r1c4.innerText = board[0][3] || "";
    r2c1.innerText = board[1][0] || "";
    r2c2.innerText = board[1][1] || "";
    r2c3.innerText = board[1][2] || "";
    r2c4.innerText = board[1][3] || "";
    r3c1.innerText = board[2][0] || "";
    r3c2.innerText = board[2][1] || "";
    r3c3.innerText = board[2][2] || "";
    r3c4.innerText = board[2][3] || "";
    r4c1.innerText = board[3][0] || "";
    r4c2.innerText = board[3][1] || "";
    r4c3.innerText = board[3][2] || "";
    r4c4.innerText = board[3][3] || "";
}

board[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)] = 2;

updateBoard();

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (key == "ArrowUp") {
        for (let j = 0; j < 4; j++) {
            const numbers = [];

            for (let i = 0; i < 4; i++) {
                const number = board[i][j];

                if (number) {
                    numbers.push(number);
                }
            }

            let n = 0;

            while (n < numbers.length - 1) {
                if (numbers[n] == numbers[++n]) {
                    numbers[--n] *= 2;
                    numbers.splice(++n, 1);
                }
            }

            for (let i = 0; i < 4; i++) {
                board[i][j] = numbers[i] || 0;
            }
        }
    } else if (key == "ArrowDown") {
        for (let j = 0; j < 4; j++) {
            const numbers = [];

            for (let i = 3; i >= 0; i--) {
                const number = board[i][j];

                if (number) {
                    numbers.push(number);
                }
            }

            let n = 0;

            while (n < numbers.length - 1) {
                if (numbers[n] == numbers[++n]) {
                    numbers[--n] *= 2;
                    numbers.splice(++n);
                }
            }

            for (let i = 3; i >= 0; i--) {
                board[i][j] = numbers[3 - i] || 0;
            }
        }
    } else if (key == "ArrowLeft") {
        for (let i = 0; i < 4; i++) {
            const numbers = [];

            for (let j = 0; j < 4; j++) {
                const number = board[i][j];

                if (number) {
                    numbers.push(number);
                }
            }

            let n = 0;

            while (n < numbers.length - 1) {
                if (numbers[n] == numbers[++n]) {
                    numbers[--n] *= 2;
                    numbers.splice(++n, 1);
                }
            }

            for (let j = 0; j < 4; j++) {
                board[i][j] = numbers[j] || 0;
            }
        }
    } else if (key == "ArrowRight") {
        for (let i = 0; i < 4; i++) {
            const numbers = [];

            for (let j = 3; j >= 0; j--) {
                const number = board[i][j];

                if (number) {
                    numbers.push(number);
                }
            }

            let n = 0;

            while (n < numbers.length - 1) {
                if (numbers[n] == numbers[++n]) {
                    numbers[--n] *= 2;
                    numbers.splice(++n);
                }
            }

            for (let j = 3; j >= 0; j--) {
                board[i][j] = numbers[3 - j] || 0;
            }
        }
    } else {
        return;
    }

    const empty = [];

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (!board[i][j]) {
                empty.push([i, j]);
            }
        }
    }

    updateBoard();

    if (!empty.length) {
        alert("Game Over");
    }

    const random = empty[Math.floor(Math.random() * empty.length)];
    const value = Math.floor(Math.random() * 2) ? 2 : 4;

    setTimeout(() => {
        board[random[0]][random[1]] = value;
        updateBoard();
    }, 1000);
});