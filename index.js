// 2048

const readline = require(`readline`);
const chalk = require(`chalk`);
const stdout = process.stdout;
const stdin = process.stdin;

readline.emitKeypressEvents(stdin);
stdin.setRawMode(true);

var grid = {};
for (var y = 0; y < 4; y += 1) {
	grid[y] = {};
	for (var x = 0; x < 4; x += 1) {
		grid[y][x] = 0;
	}
}

stdin.on(`keypress`, (str, key) => {
	if (key[`name`] == `up` || key[`name`] == `w`) {
		
	} else if (key[`name`] == `left` || key[`name`] == `a`) {
		
	} else if (key[`name`] == `down` || key[`name`] == `s`) {
		
	} else if (key[`name`] == `right` || key[`name`] == `d`) {
		
	}
});

const log = () => {
	
}