enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
// Direction[Direction["Up"] = 1] = "Up";
// Up 으로 접근 시 -> 인덱스가 반환되고, 인덱스로 접근 시 Key가 반환된다.

enum Bear {
  Cass = 'CASS',
  Tera = 'TERA',
  Hite = 'HITE'
}
// Bear["Cass"] = "CASS";

enum ResponseStatus {
  No = 0,
  Yes = 1,
}

const respond = (recipient: string, message: ResponseStatus): void => {
  console.log(`${recipient} - ${message}`);
  
}

respond('Geunhee', ResponseStatus.Yes);

enum LogLevel {
  ERROR, WARN, INFO, DEBUG
}

// 런타임 시점에서는 실제 객체이므로 keyof시 주의해야 함.
// typeof 해주지 않을 경우 객체로 판명되어 내장 메소드가 나옴.
type LogLevelStrings = keyof typeof LogLevel;

type test = keyof LogLevel;

const printImportant = (key: LogLevelStrings, message: string) => {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log('Log level key is: ', key);
    console.log('Log level value is: ', num);
    console.log('Log level message is: ', message);
  }
}

printImportant('ERROR', 'This is a message');

