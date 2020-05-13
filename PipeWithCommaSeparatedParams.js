const myPipeWith = (...params)=>(R.pipeWith((func,result)=>func(...result),params))
const mySum = (...params)=>reduce((acc,num)=>acc+num,0,params)
const double = x=>x*2;
const doubles = (...params)=>map(double,params);
const doubleAndSum = myPipeWith(doubles,mySum)
doubleAndSum(1,2) // 6
