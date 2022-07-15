// new Symbol 로 사용할 수 없음
// Symbol 을 함수로 사용해서 symbol 타입을 만들어 낼 수 있음
// type으로 사용할땐 소문자 symbol

console.log(Symbol('foo') === Symbol('foo')); // false

const sym = Symbol();

const obj = {
  [sym]: "value",
};

obj[sym];