countSpace=(str)=>{
    var count=0;
    for(var i=0; i<str.length; i++)
    {
        if(str[i]==" ")
        {
            count++;
        }
    }
    return count;
}
var string="My name Is Man ohar singh";
var totalSpace = countSpace(string);
console.log("Total Space in this string = "+totalSpace);