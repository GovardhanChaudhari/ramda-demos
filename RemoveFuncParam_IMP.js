const f = (n,...a)=>curryN(a.length,(...b)=>remove(0,n,b));
const parametersToRemove=2;
const removeTwoParameters = f(parametersToRemove);
removeTwoParameters(1,2,3,4) // [3,4]
