findAllNoOfSum=(arr)=>{
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    console.log("total Sum = " +sum);
}
var arr=[10,20,30,50,100];
findAllNoOfSum(arr);