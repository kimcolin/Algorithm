function solution(arr) {
    let answer = []
    
    // 배열의 길이가 1이거나 그보다 작으면 -1을 리턴 
    if(arr.length <= 1){  
        return [-1]
        
    } else {	
    // 배열의 최소값을 구해줍니다.
    let min = Math.min(...arr)
   
    for(let i = 0 ; i < arr.length; i++){
      if(arr[i] === min){
        continue;
      }else{
        answer.push(arr[i])
      }
    }
    return answer
    }
}

//...의 역할 
// 1. 함수의 매개변수로 배열을 전달
// 2. 배열의 '값'만 복사
// 3. 배열 여러 개를 병합
