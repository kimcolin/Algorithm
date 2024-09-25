function solution(price, money, count) {
    let totalPrice = 0;
    
    // count수까지 돌면서 totalPrice에 price * i 를 더한다.
    for(let i = 1; i <= count; i++){
        totalPrice += price * i;
    }
    //만약 money가 totalPrice보다 크면 0을 ,
    //그렇지 않다면 totalPrice - money를 return 한다.
    return money > totalPrice ? 0 : totalPrice - money
}