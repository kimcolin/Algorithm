function solution(strings, n) {
    let result = [];

    for (let i = 0; i < strings.length; i++) {
    //strings의 0번째 요소부터 시작한다, i가 문자열 길이가 작을때까지 i를 1씩 중가 시키면서 true일때까지만 반복한다.
        
      strings[i] = strings[i][n] + strings[i];
      //strings의 0번째 요소는 같다. strings i요소의 n번째에 있는것 과 strings의 0번째요소를 합친것과
    }
    
      //인덱스의 1번째 줄로 참고해보자면  
      //strings = ["sun", "bed", "car"] 문장
      //strings[i]  = sun, bed, car 단어
      //strings[i][n]  = n은 1번째라고하면 sun에선 u가 해당된다
      
      //따라서 sun = u + sun -> sun = usun
      //반복 결과는 usun, ebed, acar  


    strings.sort();
    //acar, ebed, acar순으로 정렬됨

    for(let j = 0; j < strings.length; j ++) { 
      strings[j] = strings[j].replace(strings[j][0],"");
      //strings의 0번째 요소는 같다.
      //strings의 0번째요소를 replace한다(바꿀요소 및 어떻게 바꿀것인지)
      //strings 0번째 요소의 0번째를 "" -> 빈칸 으로 바꾼다  
    
      result.push(strings[j]); //result에 strings[j]를 추가한다
    }

    return result;
}