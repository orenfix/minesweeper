'use strict';

var printBoard = function printBoard(board) {
	console.log("Current Board:");
	for (var i = 0; i < board.length; i++) {
		console.log(board[i].join(' | '));
	}
	//	console.log(board[0].join(' | '));
	//	console.log(board[1].join(' | '));
	//	console.log(board[2].join(' | '));
};

var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

printBoard(board);

board[0][1] = '1';
board[2][2] = 'B';

printBoard(board);