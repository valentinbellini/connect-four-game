export const TURNS = {
    X: '❌',
    O: '⚪'
}
  
export const WINNERS_COMBOS = [
    // Líneas horizontales
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [6, 7, 8, 9],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [13, 14, 15, 16],
    [14, 15, 16, 17],
    [18, 19, 20, 21],
    [19, 20, 21, 22],
    [20, 21, 22, 23],
    [24, 25, 26, 27],
    [25, 26, 27, 28],
    [26, 27, 28, 29],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [32, 33, 34, 35],
  
    // Líneas verticales
    [0, 6, 12, 18],
    [1, 7, 13, 19],
    [2, 8, 14, 20],
    [3, 9, 15, 21],
    [4, 10, 16, 22],
    [5, 11, 17, 23],
    [6, 12, 18, 24],
    [7, 13, 19, 25],
    [8, 14, 20, 26],
    [9, 15, 21, 27],
    [10, 16, 22, 28],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [13, 19, 25, 31],
    [14, 20, 26, 32],
    [15, 21, 27, 33],
    [16, 22, 28, 34],
    [17, 23, 29, 35],
  
    // Líneas diagonales hacia la derecha
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [6, 13, 20, 27],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [14, 21, 28, 35],
    [18, 25, 32, 39],
    [19, 26, 33, 40],
    [20, 27, 34, 41],
    [24, 31, 38, 45],
    [25, 32, 39, 46],
    [26, 33, 40, 47],
    [30, 37, 44, 51],
    [31, 38, 45, 52],
    [32, 39, 46, 53],
    [36, 43, 50, 57],
    [37, 44, 51, 58],
    [38, 45, 52, 59],
  
    // Líneas diagonales hacia la izquierda
    [3, 8, 13, 18],
    [4, 9, 14, 19],
    [5, 10, 15, 20],
    [9, 14, 19, 24],
    [10, 15, 20, 25],
    [11, 16, 21, 26],
    [15, 20, 25, 30],
    [16, 21, 26, 31],
    [17, 22, 27, 32],
    [21, 26, 31, 36],
    [22, 27, 32, 37],
    [23, 28, 33, 38],
    [27, 32, 37, 42],
    [28, 33, 38, 43],
    [29, 34, 39, 44],
    [33, 38, 43, 48],
    [34, 39, 44, 49],
    [35, 40, 45, 50],
    [39, 44, 49, 54],
    [40, 45, 50, 55],
    [41, 46, 51, 56]
];