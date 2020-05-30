const obj = {x:1,y:2};
const objs=[obj,{x:3,y:4,z:10}];
const xgt1 = {x:R.gt(R.__,1)};
const ylt1 = {y:R.lt(R.__,1)};
const pred = R.either(R.where(xgt1),R.where(ylt1));
const double = R.multiply(2);
const add3 = R.add(3);
const doubleAndAdd3 = R.pipe(double,add3);
const name='x';
const value=4;
const isFunction = R.is(Function);
const paramToFunc = (p)=>()=>p;
const toFunction = R.unless(isFunction,paramToFunc);
const toEvolveParam = (key,value)=>({[key]:toFunction(value)});
const up=R.curry((name,value,obj)=>R.evolve(toEvolveParam(name,value),obj));
const doubleAndAdd3ToX = up("x",doubleAndAdd3);
const upsf =(pred,func) => R.compose(R.filter(pred),R.map(func));
upsf(pred,doubleAndAdd3ToX)(objs);
R.transduce(upsf(pred,doubleAndAdd3ToX),R.flip(R.append),[],objs) // [{"x": 9, "y": 4, "z": 10}]
