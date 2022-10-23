
const getText = <T>(text: T): T => text;
// getText(10);
// getText('hi'); 
// getText('hello');
/* 함수의 파라미터 전달하듯이, Type을 사용하는 쪽에서 정의함. */
let a = getText<string>('hello');
let b = getText<number>(13213); 
let c = getText<boolean>(true); 

const logText = <T>(text: T[]): T[] => {
  console.log(text.length);
  return text;  
}

const arr = logText<number>([1, 2, 3]); // return에 타입이 규정되어 있어 변수에도 T[] 타입으로 규정.

let str: <T>(text: T) => T = getText; // 함수 타입으로 규정 서로 동일
let str2: { <T>(text: T): T } = getText; // 인터페이스로 규정

interface GenericGetTextFn {
  <T>(text: T): T;
}
interface GenericGetTextFn2<T> {
  (text: T): T;
}
let myString: GenericGetTextFn = getText;
let myString2: GenericGetTextFn2<string> = getText;
//이와 같은 방식으로 제네릭 인터페이스 뿐만 아니라 클래스도 생성할 수 있다.
// 다만, enum, namespace 는 제네릭으로 생성할 수 없다.

class GenericMath<T> {
  pi!: T;
  sum!: (x: T, Y: T) => T; 

}

let math = new GenericMath<number>()

interface LengthWise {
  length: number;
}

// length 내장 메소드의 타입을 임의로 규정하여 엔진에게 타입 힌트를 줌.
const logText3 = <T extends LengthWise>(text: T): T => {  
  console.log(text.length); // 타입이 동적으로 지정되어서 array.length 메서드 사용 불가
  
  return text;
}

logText3(10) // 숫자 타입에는 length가 존재하지 않으므로 오류.
logText3({ length: 0, value: 'sayHello' })

function getProperty<T, O extends keyof T>(obj: T, key: O) {
  return obj[key]; // 첫 번째 파라미터의 타입을 제네릭으로 받고, A파라미터의 Key를 추출해 B파라미터 타입으로
}
let obj = { a: 1, b: 2, c: 3 };
getProperty(obj, "a");

