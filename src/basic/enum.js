"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
// Direction[Direction["Up"] = 1] = "Up";
// Up 으로 접근 시 -> 인덱스가 반환되고, 인덱스로 접근 시 Key가 반환된다.
var Bear;
(function (Bear) {
    Bear["Cass"] = "CASS";
    Bear["Tera"] = "TERA";
    Bear["Hite"] = "HITE";
})(Bear || (Bear = {}));
// Bear["Cass"] = "CASS";
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["No"] = 0] = "No";
    ResponseStatus[ResponseStatus["Yes"] = 1] = "Yes";
})(ResponseStatus || (ResponseStatus = {}));
const respond = (recipient, message) => {
    console.log(`${recipient} - ${message}`);
};
respond('Geunhee', ResponseStatus.Yes);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
const printImportant = (key, message) => {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log('Log level key is: ', key);
        console.log('Log level value is: ', num);
        console.log('Log level message is: ', message);
    }
};
printImportant('ERROR', 'This is a message');
