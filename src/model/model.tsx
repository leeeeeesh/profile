// 사용자타입 만든건 따로 빼서 쓰는게 좋음

// 사용자타입은 객체로만 만들수잇음
export interface skillType{
  id:string,
  title:string,
  text:string
}

// 객체를 배열로 확장시켜주는것
export interface skillTypeArray extends Array<skillType>{}