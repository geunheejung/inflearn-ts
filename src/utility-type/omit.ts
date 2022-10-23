interface AddressBook {
  name: string; phone: number;
  address: string; company: string;
}
const phoneBook: Omit<AddressBook, 'address'> = { 
  name: '재택근무', phone: 111, company: '내 방', // address: 'dd' Omit 키워드에 의해 지워짐.
}
const chingtao: Omit<AddressBook, 'address' | 'company'> = { 
  name: '중국집', phone: 321, // company: 'google', address: 'dd' Omit 키워드에 의해 지워짐.
}