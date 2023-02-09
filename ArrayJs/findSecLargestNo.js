findSecoundLargestNo =(arr)=>{
    var first = -1
    var secound = -1;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>first)
        {
            secound =first;
            first=arr[i];
        }
        else if(arr[i]>secound && arr[i] !=first)
        {
            secound=arr[i];
        }
    }
    console.log(secound)
}
var arr = [12, 1, 10, 34, 1, 10, 34, 32, 36]
findSecoundLargestNo(arr);
