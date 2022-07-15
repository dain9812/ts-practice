// never
// 모든 타입의 subtype이며 모든 타입에 할당 할 수 있음
// 하지만 never에는 그 어떤 것도 할당할 수 없음
// any 조차도 never에 할당 할 수 없음
// 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 함

function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error('failed');
}

function infiniteLoop(): never {
  while (true) {

  }
}

declare const a: string | number;

if (typeof a !== 'string') {
  a;
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

// const b: Indexable<{}> = '';