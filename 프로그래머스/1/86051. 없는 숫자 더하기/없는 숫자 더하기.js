function solution(numbers) {
    var answer = 0;
    var result;

    for (let i = 0; i < numbers.length; i++) {
        answer += numbers[i]
    }
    // 45(0부터 9까지의 숫자를 더한 값)
    result = 45 - answer
    return result;
}
