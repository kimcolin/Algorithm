function solution(x) {
    let a = 0;
    //String(x)로 문자열로 바꾼 뒤 한글자씩 나누고 str 배열에 대입해준다.
    let str = String(x).split("");
    for(let i = 0; i < str.length; i++){
        a += Number(str[i]);
    }
    //x를 a으로 나눈 나머지가 0 이면 true, false 가 반환되는 삼항연산자
    return (x % a == 0) ? true : false;
}
