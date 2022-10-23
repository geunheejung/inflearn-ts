// 전역 변수.
declare const PI = 3.14;

// 전역 함수
declare namespace myLib {
  function greet(person: string): string;
  let name: string;
}

export interface Triangle {
  width: number;
  height: number;
}

