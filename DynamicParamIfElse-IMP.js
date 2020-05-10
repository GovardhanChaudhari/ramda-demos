const r = (...a)=>remove(0,1,a)
const r2 = (...a)=>remove(0,2,a)
const cf = f=>a=>f(...a);
const pa = (...a)=>a;
const f = pipe(r2,cf(prop))
const f1 = pipe(r,cf(pa))
const p = x=>x>0;
const ff = ifElse(p,f,f1)
ff(1,2,"x",{x:1}) // 1
ff(0,2,"x",{x:1}) // [2,"x",{x:1}]
