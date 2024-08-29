function solution(n) {
  return Number(String(n).split("").sort().reverse().join(""))
}

//문자열로 바꿔주고 sort()로 정렬해준뒤 reverse로 내림차순 배열만들기 그 후 숫자로 출력
//배열의 각 요소를 지정된 구분자로 연결(join)하여 하나의 문자열로 반환하는 함수

//EX
//const fruits = ["사과", "바나나", "딸기"];

//console.log(fruits.join());
// "사과,바나나,딸기"

//console.log(fruits.join(""));
// "사과바나나딸기"

//console.log(fruits.join(" "));
// "사과 바나나 딸기"

//console.log(fruits.join(", "));
// "사과, 바나나, 딸기"

//console.log(fruits.join("-"));
// "사과-바나나-딸기"