// returns array
const removeTwoParams = (...args)=>R.remove(0,2,[...args]);

// need to use in pipe function and after removeTwoParams function, so params are colleced in array
const objValue =([name,obj])=>obj[name];
const condition = x=>x>0;
// first remove two params, then convert last two params to single value and finnay passed that single value to condition
const rop = R.pipe(removeTwoParams,objValue,condition);
rop(1,2,"x",{x:0}) // false
rop(1,2,"x",{x:1}) // true
