// create by object literal
const person1 = { name: "dain", age: 24 };

// person1 is not 'object' type
// person1 is "{name: string, age: number}" type

// breatee by Object.create
const person2 = Object.create({name: 'Dain', age: 24});

// object
// "primitive type이 아닌 것"을 나타내고 싶을 때 사용하는 타입
// nom-primitive type
// - not number, string, bollean, bigint, symbol, null, or undefined