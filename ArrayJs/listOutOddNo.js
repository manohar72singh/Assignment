findAllOddNo =(arr) => {
    var oddNo =[];
    for(var i=0;i<arr.length;i++) {
        if(arr[i] % 2 !== 0)
        {
            oddNo.push(arr[i]);
        }
    }
    console.log(oddNo);
}

var arr =[50,20,1,4,9,15,45,17,23,171,121];
findAllOddNo(arr);