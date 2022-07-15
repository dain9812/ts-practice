// unknown
// any와 짝으로 any 보다 Type-safe한 타입
//   - any와 같이 아무거나 할당할 수 있음
//   - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없음
// runtime error를 줄일 수 있음
// 사용 전에 데이터의일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있음

declare const maybe: unknown;

// const aNumber: number = maybe;

if (maybe === true) {
  const aBoolean: boolean = maybe;

  // const aString: string = maybe;
}

if (typeof maybe === 'string') {
  const aString: string = maybe;

  // const aBoolean: boolean = maybe;
}