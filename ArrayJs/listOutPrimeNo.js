findAllPrimeNo = (arr) =>{
    var primeNo = [];
    var index=0
    var count=0;
    for(var i=0; i<arr.length; i++){

        for(var j=2; j<arr[i]; j++)
        {
            if(arr[i] % j == 0)
            {
                count++;
            }
        }
        
        if(count == 0)
        {
            primeNo[index]=arr[i];
            index++;
        }
        count=0;
    }
    console.log(primeNo);
}
var arr =[2,5,3,40,10,11,17,117,121,171,127,];
findAllPrimeNo(arr);