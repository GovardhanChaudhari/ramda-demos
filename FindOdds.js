const intToBool = R.pipe(R.not,R.not);
const isOdd = R.pipe(R.modulo(R.__,2),intToBool);
const findOdds = R.filter(isOdd);
findOdds([1,2,3,4]) // [1,3]
