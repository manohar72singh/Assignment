findSmallestAndLargest =(arr)=>{
    // let 1st element in arr is largest and smallest no
    var sl=[2]
    var smallNo =arr[0];
    var largeNo = arr[0];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]> largeNo)
        {
            largeNo=arr[i];
            sl[0]=arr[i];
        }
        if(arr[i]<smallNo)
        {
            smallNo=arr[i];
            sl[1]=arr[i];
        }
    }
    return sl;
    //console.log("Smallest No = "+ smallNo +" Largest no = "+ largeNo);
}
var arr =[15,50,40,60,1,20,0,100];
var sl = findSmallestAndLargest(arr);
console.log("Largest No = " +sl[0])
console.log("Smallest No = " +sl[1])
