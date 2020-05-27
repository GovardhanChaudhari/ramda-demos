const obj = {x:1};
const double = R.multiply(2);
const add3 = R.add(3);
const doubleAndAdd3 = R.pipe(double,add3);
const name='x';
const value=4;
const isFunction = R.is(Function);
const paramToFunc = (p)=>()=>p;
const toFunction = R.unless(isFunction,paramToFunc);
const toEvolveParam = (key,value)=>({[key]:toFunction(value)});
const up=(name,value,obj)=>R.evolve(toEvolveParam(name,value),obj);
up('x',doubleAndAdd3,obj); // 5
up('x',6,obj); // 6
