interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 api 함수.
const fetchProducts = (): Promise<Product[]> => {
  //..
};
/** Pick
 * API 데이터의 일부 속성만 필요, 인터페이스 모양이 Backend와 다를 경우 새로운 인터페이스 정의 or 유틸리티 타입 사용.
 * 처음에는 유틸리티 타입 보다는 새로운 타입을 정의하여 Ts의 이점ㅇ을 활용하려 함.
 * 그러다 인터페이스, 타입 정의에 익숙해지면 유틸리티 타입으로 불필요한 타입 정의를 줄임
 */
// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }
// Pick을 이용하여 기존의 타입을 재활용함.
type ShoppingItem = Pick<Product, "id" | "name" | "price">;
// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
const displayProductDetail = (shoppingItem: ShoppingItem) => {};
/** Partial
 * 상품을 업데이트 할 시 상품 인터페이스 사용 시 모든 속성을 구현해야 함.
 * 다시 재정의한 뒤 Optional 속성으로 바꿀 경우 코드 중복이 발생함.
 * Partial은 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있음.
 * 유틸리티 타입을 통해 불필요한 타입 정의를 방지함.
 */
// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }
type UpdateProduct = Partial<Product>; // 따로 타입 정의 할 시, 어떻게 추론 되는지 알기 쉬움.
// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
const updateProductItem = (productItem: UpdateProduct) => {};

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
// #1
// type UserProfileUpdate = {
//   username: UserProfile["username"];
//   email: UserProfile["email"];
//   profilePhotoUrl: UserProfile["profilePhotoUrl"];
// };

// #2 in 연산자 이용. (Mapped Type)
// type UserProfileUpdate = {
//   [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// };

// #3
// type UserProfileUpdate = {
//   [p in keyof UserProfile]?: UserProfile[p]
// };

// #4 특정 타입에 국한되지 않고, 넘겨받을 수 있도록 제네릭 사용.
type Subset<T> = {
  [p in keyof T]?: T[p];
};
