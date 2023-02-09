findAllEvenNo = (arr) => {
    var evenNo =[]
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i] % 2 === 0)
        {
            //console.log(arr[i]);
            evenNo.push(arr[i]);
        }
        
    }
    console.log(evenNo);
}

var arr = [5,4,6,3,2,40,10];
findAllEvenNo(arr);