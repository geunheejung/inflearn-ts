interface Hero {
  name: string; skill: string;
}
const human: Pick<Hero, 'name'> = {
  name: '스킬이 없는 사람'
}

type HasThen<T> = Pick<Promise<T>, 'then' | 'catch'>;
// 제네릭 타입이며, Promise객체의 반환 타입은 제네릭으로 받은 타입으로 지정한다. 
// 그리고 Promise 객체의 then 또는 catch 프로퍼티를 지정해서 타입으로 쓴다.
let hasThen: HasThen<number> = Promise.resolve(4);
