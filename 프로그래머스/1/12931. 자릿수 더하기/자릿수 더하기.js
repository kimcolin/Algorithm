function solution(n){
    let answer = 0;
    let str = String(n);//숫자를 문자열로 변환
    //왜냐면 '"123"[0]'은 '"1"'이므로 문자를 하나씩 이용 할 수 있기 때문에
    
    for ( let i = 0; i < str.length; i++) {
        answer += parseInt(str[i]); //parseInt()는 string을 정수로 변환한 값을 반환한다
    }
    return answer;
}