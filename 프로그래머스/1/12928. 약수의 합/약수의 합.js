function solution(n) {
    let answer = 0;
    for (let i = 0; i <= n; i++) {//0부터 1씩증가, 이것이 n의 숫자와 같아질때까지 반복
        if( n % i === 0) //n을 i로 나눳을때 값이 0이된다면
            answer += i //answer에 i값을 대입
    }
    return answer;
}