
function getRandom(min, max) { //von verschiedenen Tools verwendet. Generiert Zufallszahl
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}