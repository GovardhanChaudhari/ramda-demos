class User{
  constructor(name){
    this.name=name;
  }
}
const plus1 = add(1)
const mayAdd = ifElse(isNil,always(null),plus1);
const mayAddArray = ifElse(Array.isArray,map(mayAdd),mayAdd);//doubleArray([2,4,null,mayBe(undefined)])
mayAddArray([null]); // [null]
mayAddArray(null); // null
mayAddArray(1); // 2
mayAddArray([1]) // [2]
