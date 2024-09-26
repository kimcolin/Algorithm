function solution(s) {

  if (s.length === 4 || s.length === 6) {  // 문자열의 길이가 4 또는 6인지 확인
    for (let i = 0; i < s.length; i++) {   // 문자열의 각 문자를 순차적으로 확인하는 반복문
      if (isNaN(s[i])) return false;       // 해당 문자가 숫자가 아니면 false를 반환,
    }                                      //isNaN() 함수는 어떤 값이 NaN인지 판별합니다.
    return true; // 문자열이 모두 숫자라면 true를 반환
  }
  return false; // 문자열의 길이가 4나 6이 아니면 false를 반환
}