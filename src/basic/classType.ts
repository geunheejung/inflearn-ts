abstract class Developer {
  abstract coding(): void;
  drink(): void {
    console.log('drink sth');    
  }
}

class FrontEndDeveloper extends Developer {  
  private _salary: number = 4500;

  constructor(readonly theName: string) {    
    super();
    this.theName = theName;
  }
  
  coding(): void {
    console.log('develop web');    
  }

  get salary(): number { return this._salary; }

  set salary(value: number) {
    if (value < 4500) {
      throw new Error('적정 금액이 아닙니다.')
    }
    this._salary = value;
  }
}

let john = new FrontEndDeveloper('John'); 
john.coding();
john.drink();
console.log(john.salary);
// john.name = 'John';  readonly 필드임으로 변경 불가.



