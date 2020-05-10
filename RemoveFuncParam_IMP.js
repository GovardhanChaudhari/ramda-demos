const f = (n)=>curry((...b)=>remove(0,n,b));
const parametersToRemove=3;
const removeTwoParameters = f(parametersToRemove);
removeTwoParameters(1,2,3,4) // [3,4]
