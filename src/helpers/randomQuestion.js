export const randomQuestion = function (obj) {
	const keys = Object.keys(obj);
	const randomKey = keys[ keys.length * Math.random() << 0];
	return {'answer': randomKey, hints: obj[randomKey]}
};