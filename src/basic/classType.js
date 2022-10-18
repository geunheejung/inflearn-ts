"use strict";
class Developer {
    drink() {
        console.log('drink sth');
    }
}
class FrontEndDeveloper extends Developer {
    constructor(theName) {
        super();
        this.theName = theName;
        this._salary = 4500;
        this.theName = theName;
    }
    coding() {
        console.log('develop web');
    }
    get salary() { return this._salary; }
    set salary(value) {
        if (value < 4500) {
            throw new Error('적정 금액이 아닙니다.');
        }
        this._salary = value;
    }
}
let john = new FrontEndDeveloper('John');
john.coding();
john.drink();
console.log(john.salary);
// john.name = 'John';  readonly 필드임으로 변경 불가.
