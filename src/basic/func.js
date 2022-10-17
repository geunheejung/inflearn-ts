"use strict";
const sum = (a, ...nums) => {
    let totalOfNums = 0;
    for (let key in nums) {
        totalOfNums += nums[key];
    }
    return a + totalOfNums;
};
sum(1, 2, 3, 4, 5, 6, 7, 8);
(() => {
    class Person {
        constructor(name) {
            this.name = name;
        }
        getName() {
            return this.name; // this는 어떤 객체의 메서드로써 호출되냐에 따라 달라짐.
        }
    }
    const me = new Person('Kim');
    console.log(me.getName()); // Kim
    Person.prototype.name = 'Jung';
    console.log(me.getName()); // Jung  
})();
