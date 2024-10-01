function solution(arr1, arr2) {
    var answer = [[]]
    for (let i = 0; i < arr1.length; i++){
        answer[i] = []; 
        for(let p = 0; p < arr1[i].length; p++){
            answer[i].push(arr1[i][p] + arr2[i][p])
        }
    }
    return answer
}