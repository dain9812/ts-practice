// any
// 어떤 타입이어도 상관없는 타입
// 최대한 쓰지 않는것이 중요 -> 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문
// 컴파일 옵션 중 any를 써야 하는데 쓰지 않으면 오류를 뱉는 옵션 -> noImplicitAny

function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

any1.toString();

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
  const a: number = obj.num;
  const b = a + 1;
  return b;
}

const c = leakingAny({ num: 0 });
// c.indexOf('0');