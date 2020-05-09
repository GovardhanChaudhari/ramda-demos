const oneFunc = arg=>arg;
const twoFunc = (arg1,arg2)=>[arg1,arg2];
const removeOne = func=> (...args)=>R.remove(0,1,[...args]);
const removed = removeOne(twoFunc);
const objValue = func=>(name,obj)=>obj[name];
const removedObjValue = objValue(removed);
const checkFunc = R.ifElse(R.F,twoFunc,removedObjValue);
checkFunc("x",{x:3}) // 3
