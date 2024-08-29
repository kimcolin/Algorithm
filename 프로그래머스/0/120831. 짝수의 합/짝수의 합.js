function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) { // i의 값을 1씩 증가
        if (i % 2 === 0) {  // i가 짝수인지 확인
            answer += i;    // 짝수일 경우 합에 더하기
        }
    }
    return answer;
}
