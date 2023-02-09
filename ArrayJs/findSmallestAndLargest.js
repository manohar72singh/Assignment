findSmallestAndLargest =(arr)=>{
    // let 1st element in arr is largest and smallest no
    
    var smallNo =arr[0];
    var largeNo = arr[0];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]> largeNo)
        {
            largeNo=arr[i];
        }
        if(arr[i]<smallNo)
        {
            smallNo=arr[i];
        }
    }
    console.log("Smallest No = "+ smallNo +" Largest no = "+ largeNo);
}

var arr =[15,50,40,60,1,20,0,100];
findSmallestAndLargest(arr);