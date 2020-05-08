const isString=R.is(String)
const falseValue = R.F;
const trueValue = R.T;
const trimAndIsEmpty = R.pipe(R.trim,R.isEmpty);
const isTrimmedStringEmpty = R.ifElse(isString,trimAndIsEmpty,falseValue)

isTrimmedStringEmpty("") // true
isTrimmedStringEmpty(" ") // true
isTrimmedStringEmpty(" 1 ") // false
isTrimmedStringEmpty(0) // false
isTrimmedStringEmpty([]) // false
