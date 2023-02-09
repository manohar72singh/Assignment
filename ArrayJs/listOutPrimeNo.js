findAllPrimeNo = (arr) =>{
    var primeNo = [];
    var count=0;
    for(var i=0;i<=arr.length;i++){

        if(arr[i] % i === 0)
        {
            count++;
        }
        if(count === 2)
        {
            primeNo.push(arr[i]);
        }
    }
    console.log(primeNo);
    console.log(count)
}
var arr =[2,5,3,40,10,11,17,117];
findAllPrimeNo(arr);