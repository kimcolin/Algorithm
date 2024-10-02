process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]); 
    
    const str = "*".repeat(a); // repeat를 써서 5번 출력 
    for(let i = 0; i < b; i++) { // for 3전까지 출력 
        console.log(str);  // for 0번째 일 때 str(*****)출력 for 1번째일 때 str또 출력
    }
    
});