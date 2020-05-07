const intToBool = R.pipe(R.not,R.not);
const isOdd = R.pipe(R.modulo(R.__,2),intToBool);
isOdd(3)
