function staircase(n) {
    var a = n;
    var stair, hash, space;
     for (var i = 0; i < a &&  0 < n < 10; i++){
        space = a - 1 - i;
        hash = i + 1;
        stair = ' '.repeat(space) + '#'.repeat(hash);
        console.log(stair);    
    }  


}