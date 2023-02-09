findPallindrome =(arr)=>{
    var pallindrome = [];
    var rem =0;
    var rev =0;
    var temp=0;
    var orgNo=0;
    for(var i=0;i<arr.length;i++)
    {
        orgNo=arr[i];
        temp=arr[i];
        while(temp>0)
        {
            rem= rem%10;
            temp=temp/10;
            temp=parseInt(temp);
            rev=rev*10+rem;
        }
        if(rev==parseInt(orgNo))
        {
            pallindrome[i]=orgNo
        }
        orgNo=0;
        temp=0;
        rev=0;
    }
    console.log(arr)
    console.log(pallindrome);
}

var arr= [121,417,12344321,171,32154];
findPallindrome(arr);