const printBoard = board => {
	console.log("Current Board:");
	for (let i=0; i<board.length; i++) {
		console.log(board[i].join(' | '));
	}
//	console.log(board[0].join(' | '));
//	console.log(board[1].join(' | '));
//	console.log(board[2].join(' | '));
};

let board = [
	[' ',' ',' '],
	[' ',' ',' '],
	[' ',' ',' ']
];

printBoard(board);

board[0][1] = '1';
board[2][2] = 'B';

printBoard(board);
