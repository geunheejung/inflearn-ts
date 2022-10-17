"use strict";
const _enum = () => {
    let Avengers;
    (function (Avengers) {
        Avengers[Avengers["Capt"] = 2] = "Capt";
        Avengers[Avengers["IronMan"] = 3] = "IronMan";
        Avengers[Avengers["Thor"] = 4] = "Thor";
    })(Avengers || (Avengers = {}));
    ;
    let hero1 = Avengers.Capt;
    let hero2 = Avengers[4];
    // js에는 enum이 없고, Avengers[Avengers["Capt"] = 0] = "Capt" 식으로 구현된다.
    // Avengers.Capt -> 0 이며, Avengers[0] -> Capt이다. 
    // enum은 Key로 접근 시 Index를 반환하고, Index로 접근 시 해당 Value를 반환한다. 
    // Index는 해당 프로퍼티의 Key로 정의되어 있다. Avengers[Avengers.key1] -> Avengers.value1
    console.log(hero2);
};
let unuseful = undefined;
let nullish = null;
const notuse = () => { console.log('sth'); };
