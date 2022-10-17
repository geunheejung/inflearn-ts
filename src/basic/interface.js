"use strict";
let myBeer = {
    name: 'Saporo',
    price: 4000,
    initialBear: ['Cass', 'Tera', 'Hite'],
};
const brewBeer = (beer) => {
    console.log(beer.name);
    // myBeer.price = '1'
};
const pickBear = (index) => {
    return myBeer.initialBear[index];
};
const kim = {
    mistake: () => {
        // myBeer.initialBear[2] = 'Apple'; 읽기 전용
    }
};
brewBeer(myBeer);
brewBeer({ initialBear: ['a'], price: 4000, name: 'james' });
console.log(pickBear(0));
(() => {
    const myBeer = () => {
        let my = ((beer) => {
            console.log(beer);
        }); // 값은 함수를 할당한 뒤, 타입은 CraftBeer 인터페이스로 지정하여 객체로써 판단되게함.
        my.brand = 'Beer Kitchen';
        my.brew = function () {
            console.log(my.brand);
        };
        return my;
    };
    let brewerBeer = myBeer();
    brewerBeer('My First Beer');
    brewerBeer.brand = 'Pangyo Craft';
    brewerBeer.brew();
})();
