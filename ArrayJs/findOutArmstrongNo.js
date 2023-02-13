findArmstrong=(arr)=>{
    var armstrong= [];
    var sum=0,rem=0,index =0;
    var orgNo=0, temp=0;
    for(var i=0;i<arr.length;i++)
    {
        orgNo=arr[i];
        temp=arr[i];
        while (temp>0)
        {
            rem = temp%10;
            temp=temp/10;
            temp=parseInt(temp);
            sum = rem*rem*rem+sum;
        }
        if(sum===parseInt(orgNo)){
            armstrong[index]==arr[i];
            index++;
        }
        orgNo=0;
        temp=0;
        sum=0;  
    }
    console.log(arr);
    console.log(armstrong);
}
var arr=[121,153,173,371]
findArmstrong(arr);