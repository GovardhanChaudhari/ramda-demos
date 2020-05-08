const isString=R.is(String)
const falseValue = R.F;
const trueValue = R.T;
const throwError = ()=>Error();
const isStringEmpty = R.allPass([isString,R.isEmpty]);
const isStringEmptyOrThrow = R.either(isStringEmpty,throwError);

isStringEmptyOrThrow("") // true
isStringEmptyOrThrow(" ") // Error
isStringEmptyOrThrow(1) // Error
isStringEmptyOrThrow([]) // Error
