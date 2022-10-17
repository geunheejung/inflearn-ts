interface Address {
  email: string;
  address: string;
}

// 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있다.
// 유틸리티 타입: 이미 정의해 놓은 타입을 변환할 때 사용하기 좋은 타입 문법.
// 유틸리티 타입을 꼭 쓰지 않더라도 기존의 인터페이스, 제네릭 등의 기본 문법으로 충분히 타입을 변환할 수 있다.
type MayHaveEmail = Partial<Address>; 
const me: MayHaveEmail = {};
const you: MayHaveEmail = { email: 'test@a.com' };
const all: MayHaveEmail = { email: 'geuni@a.com', address: 'Paju' }

