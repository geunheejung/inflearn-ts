const getAge = (age: any) => {
  age.toFixe(); // age의 타입이 any로 추론되기 때문에 Number 관련 api를 작성할 때 코드가 자동 완성되지 않음.
  return age;
}

const getAgeUnionType = (age: number | string) => {    
  if (typeof age === 'number') { // typeof로 타입을 체크하여 타입스크립트가 타입 추론 하는데 도움을 줌.
    return age.toFixed(); // age의 타입이 'number'로 추론되기 때문에 숫자 관련 api를 쉽게 작성.
  }
  if (typeof age === 'string') {
    return age;
  }

  return new TypeError('age must be number or string');
}
 
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
// 여러 개의 타입 정의를 하나로 합치는 방식을 인터렉션 타입 정의 방식이라고 한다.
type Capt = Person & Developer;

const introduce = (someone: Person | Developer) => {
  // Union 타입이니 Person도 되고, Developer도 될거라 예상하지만
  // 타입스크립트 관점에서는 introduce() 함수를 호출하는 시점에 Person 타입이 올지 Developer 타입이 올지 알 수 없다.

  const { 
    name, 
    /* 
    Person | Develop 타입일 경우 서로 교집합된 속성만 가능.
    skill, 
    age 

    union이라 받았는데 한 쪽에 없는 멤버를 사용할 시 오류가 날 수 있으니
    */ 
  } = someone;
}

const capt: Person = { name: 'capt', age: 100 };
const tony: Developer = { 
  name: 'tony', 
  skill: 'iron making',
  coding() {
    
  },
  drink() {
    
  },
};

introduce(capt); // introduce() 함수 내에서 age 프로퍼티 접근 시 에러 발생
introduce(tony); // introduce() 함수 내에서 skill 프로퍼티 접근 시 에러 발생
