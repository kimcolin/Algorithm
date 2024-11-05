function solution(n, k) {
  let answer = 0
  let drink = Math.floor(n / 10)
  answer = (n * 12000) + ((k - drink) * 2000) // (양꼬치 금액 + ((서비스 음료의 금액 * 음료 금액)
  return answer
}