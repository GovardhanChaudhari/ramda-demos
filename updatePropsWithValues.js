const updateProp = R.curry((value, name, obj) =>
  ({...obj, ...{[name]: value}}));
const value = 4;
const name = "x";
const names = [name,"y"];
const mValues = [value,5];
const obj = {x:1,y:2};
const updateProps = (value,names,obj)=> R.reduce((acc,name)=>updateProp(value,name,acc),obj,names)
const groupParams = (names,values)=>R.transpose([names,values]);
const updatePropsWithValues = (values,names,obj)=>R.reduce((acc,[name,value])=>updateProp(value,name,acc),obj,groupParams(names,values));
updateProp(4,"x",{x:1})
updateProps(value,names,obj)
groupParams(names,mValues);
updatePropsWithValues(mValues,names,obj) // {"x": 4, "y": 5}
