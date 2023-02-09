sortArray = (arr) =>{
    acendingArr= [];
    descendinArr =[];
    var temp;
    
    //copy to array
    for(var i=0;i<arr.length;i++)
    {
        acendingArr[i]=arr[i];
        descendinArr[i]=arr[i];
    }

    for(var i=0;i<acendingArr.length-1;i++)
    {
        for(var j=i+1;j<acendingArr.length;j++)
        {
            if(acendingArr[i]>acendingArr[j])
            {
                temp = acendingArr[i];
                acendingArr[i]=acendingArr[j];
                acendingArr[j]=temp;
            }
        }
    }

    for(var i=0;i<descendinArr.length-1;i++)
    {
        for(var j=i+1;j<descendinArr.length;j++)
        {
            if(descendinArr[i]<descendinArr[j])
            {
                temp = descendinArr[i];
                descendinArr[i]=descendinArr[j];
                descendinArr[j]=temp;
            }
        }
    }

    console.log(arr);
    console.log(acendingArr);
    console.log(descendinArr);
}

var arr=[30,50,20,40,10];
sortArray(arr);