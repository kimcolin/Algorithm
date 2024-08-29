function solution(a, b) {
    let num = 0;
    
    if(a < b) { 
        for(i = a; i <= b; i++){
        //i=b까지만 반복한다
        num += i
        } 
    } else if (a > b){
        for(i = a; i >= b; i--){
        num += i
        }    
    }
    
    return a===b? a : num

}