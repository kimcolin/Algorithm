function solution(x, n) {
    let answer = [];
    for (let i = 1; i <= n; i++){
        answer.push(x * i);// x의 배수들로 구성된 배열을 대입
    }
    return answer;
}